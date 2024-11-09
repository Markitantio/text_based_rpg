import React from 'react';
import { useGameStore } from './store/gameStore';
import { GameLog } from './components/GameLog';
import { CharacterInfo } from './components/CharacterInfo';
import { ActionMenu } from './components/ActionMenu';
import { Sword } from 'lucide-react';

function App() {
  const [showNameInput, setShowNameInput] = React.useState(true);
  const setCharacterName = useGameStore((state) => state.setCharacterName);
  const addToLog = useGameStore((state) => state.addToLog);
  const [nameInput, setNameInput] = React.useState('');

  const handleStartGame = () => {
    if (nameInput.trim()) {
      setCharacterName(nameInput);
      setShowNameInput(false);
      addToLog(`Welcome, ${nameInput}. Your journey begins at the Bloody Cat Tavern...`);
      addToLog('A mysterious client awaits your arrival with an urgent contract...');
    }
  };

  if (showNameInput) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-200 p-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 flex items-center justify-center">
              <Sword className="mr-4" size={32} />
              The Witcher: Age of Fire and Ice
            </h1>
            <p className="text-gray-400">Enter your name to begin your journey</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className="w-full bg-gray-700 text-gray-200 p-3 rounded-lg mb-4"
              placeholder="Enter your name"
              onKeyPress={(e) => e.key === 'Enter' && handleStartGame()}
            />
            
            <button
              onClick={handleStartGame}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white p-3 rounded-lg transition-colors"
            >
              Begin Adventure
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto grid gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CharacterInfo />
          <div className="space-y-8">
            <ActionMenu />
            <GameLog />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;