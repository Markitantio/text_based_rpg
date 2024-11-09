import React from 'react';
import { useGameStore } from '../store/gameStore';

export const GameLog: React.FC = () => {
  const gameLog = useGameStore((state) => state.gameLog);
  const logEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [gameLog]);

  return (
    <div className="bg-gray-900 text-gray-200 p-4 rounded-lg h-64 overflow-y-auto">
      {gameLog.map((log, index) => (
        <p key={index} className="mb-2">
          {log}
        </p>
      ))}
      <div ref={logEndRef} />
    </div>
  );
};