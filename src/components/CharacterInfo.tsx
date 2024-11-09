import React from 'react';
import { useGameStore } from '../store/gameStore';
import { Sword, Brain, Heart, Shield, Coins } from 'lucide-react';

export const CharacterInfo: React.FC = () => {
  const character = useGameStore((state) => state.character);

  return (
    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <Sword className="mr-2" size={20} />
        {character.name || 'Unnamed Witcher'} - Level {character.level}
      </h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <Heart className="mr-2" size={16} />
          Health: {character.health}/{character.maxHealth}
        </div>
        
        <div className="flex items-center">
          <Shield className="mr-2" size={16} />
          Stamina: {character.stamina}/{character.maxStamina}
        </div>
        
        <div className="flex items-center">
          <Brain className="mr-2" size={16} />
          Experience: {character.experience}
        </div>
        
        <div className="flex items-center">
          <Coins className="mr-2" size={16} />
          Gold: {character.gold}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-bold mb-2">Attributes</h3>
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(character.attributes).map(([attr, value]) => (
            <div key={attr} className="flex justify-between">
              <span className="capitalize">{attr}:</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-bold mb-2">Skills</h3>
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(character.skills).map(([skill, value]) => (
            <div key={skill} className="flex justify-between">
              <span className="capitalize">{skill}:</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};