import React from 'react';
import { useGameStore } from '../store/gameStore';
import { Sword, Map, Scroll, Backpack } from 'lucide-react';

export const ActionMenu: React.FC = () => {
  const currentLocation = useGameStore((state) => state.currentLocation);
  const addToLog = useGameStore((state) => state.addToLog);

  const handleAction = (action: string) => {
    switch (action) {
      case 'explore':
        addToLog(`You begin exploring ${currentLocation}...`);
        break;
      case 'talk':
        addToLog('You look around for someone to talk to...');
        break;
      case 'inventory':
        addToLog('You check your belongings...');
        break;
      case 'quest':
        addToLog('You review your current objectives...');
        break;
      default:
        break;
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <button
        onClick={() => handleAction('explore')}
        className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-gray-200 p-4 rounded-lg transition-colors"
      >
        <Map className="mr-2" size={20} />
        Explore
      </button>
      
      <button
        onClick={() => handleAction('talk')}
        className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-gray-200 p-4 rounded-lg transition-colors"
      >
        <Sword className="mr-2" size={20} />
        Combat
      </button>
      
      <button
        onClick={() => handleAction('inventory')}
        className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-gray-200 p-4 rounded-lg transition-colors"
      >
        <Backpack className="mr-2" size={20} />
        Inventory
      </button>
      
      <button
        onClick={() => handleAction('quest')}
        className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-gray-200 p-4 rounded-lg transition-colors"
      >
        <Scroll className="mr-2" size={20} />
        Quests
      </button>
    </div>
  );
};