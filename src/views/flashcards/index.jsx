import { useState, useCallback } from 'react';
import Game from './Game';
import Setup from './Setup';
import GameResults from './GameResults';

export default function Flashcards() {
  
  const [gameOptions, setGameOptions] = useState();
  const [stats, setStats] = useState();

  const handleEnd = useCallback((gameStats) => {
    setStats(gameStats);
  }, []);

  const playAgain = () => {
    setStats(undefined);
    setGameOptions(undefined);
  };

  return <>
    {!stats && !gameOptions && <Setup onStart={setGameOptions} />}
    {!stats && gameOptions && <Game options={gameOptions} onEnd={handleEnd} />}
    {stats && <GameResults stats={stats} onPlayAgain={() => playAgain()} />}
  </>
}

