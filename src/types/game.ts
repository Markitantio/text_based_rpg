export interface Character {
  name: string;
  level: number;
  experience: number;
  attributes: {
    strength: number;
    dexterity: number;
    endurance: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  skills: {
    [key: string]: number;
  };
  inventory: Item[];
  health: number;
  maxHealth: number;
  stamina: number;
  maxStamina: number;
  gold: number;
}

export interface Item {
  id: string;
  name: string;
  type: 'weapon' | 'armor' | 'potion' | 'quest' | 'misc';
  description: string;
  value: number;
  effects?: {
    type: string;
    value: number;
  }[];
}

export interface GameState {
  character: Character;
  currentLocation: string;
  questLog: Quest[];
  gameLog: string[];
  inventory: Item[];
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'completed' | 'failed';
  objectives: {
    description: string;
    completed: boolean;
  }[];
  rewards: {
    gold?: number;
    experience?: number;
    items?: Item[];
  };
}