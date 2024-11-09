import { create } from 'zustand';
import { GameState, Character, Item, Quest } from '../types/game';

const initialCharacter: Character = {
  name: '',
  level: 1,
  experience: 0,
  attributes: {
    strength: 10,
    dexterity: 10,
    endurance: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  },
  skills: {
    swordsmanship: 1,
    alchemy: 1,
    magic: 1,
    persuasion: 1,
  },
  inventory: [],
  health: 100,
  maxHealth: 100,
  stamina: 100,
  maxStamina: 100,
  gold: 100,
};

interface GameStore extends GameState {
  setCharacterName: (name: string) => void;
  addToLog: (message: string) => void;
  addQuest: (quest: Quest) => void;
  updateQuest: (questId: string, status: Quest['status']) => void;
  addItem: (item: Item) => void;
  removeItem: (itemId: string) => void;
  modifyGold: (amount: number) => void;
  modifyHealth: (amount: number) => void;
  modifyExperience: (amount: number) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  character: initialCharacter,
  currentLocation: 'Bloody Cat Tavern',
  questLog: [],
  gameLog: ['Welcome to the world of The Witcher: Age of Fire and Ice'],
  inventory: [],

  setCharacterName: (name) =>
    set((state) => ({
      character: { ...state.character, name },
    })),

  addToLog: (message) =>
    set((state) => ({
      gameLog: [...state.gameLog, message],
    })),

  addQuest: (quest) =>
    set((state) => ({
      questLog: [...state.questLog, quest],
    })),

  updateQuest: (questId, status) =>
    set((state) => ({
      questLog: state.questLog.map((quest) =>
        quest.id === questId ? { ...quest, status } : quest
      ),
    })),

  addItem: (item) =>
    set((state) => ({
      inventory: [...state.inventory, item],
    })),

  removeItem: (itemId) =>
    set((state) => ({
      inventory: state.inventory.filter((item) => item.id !== itemId),
    })),

  modifyGold: (amount) =>
    set((state) => ({
      character: {
        ...state.character,
        gold: state.character.gold + amount,
      },
    })),

  modifyHealth: (amount) =>
    set((state) => ({
      character: {
        ...state.character,
        health: Math.min(
          state.character.maxHealth,
          Math.max(0, state.character.health + amount)
        ),
      },
    })),

  modifyExperience: (amount) =>
    set((state) => {
      const newExp = state.character.experience + amount;
      const newLevel = Math.floor(newExp / 1000) + 1;
      
      return {
        character: {
          ...state.character,
          experience: newExp,
          level: newLevel,
        },
      };
    }),
}));