import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Score = () => {
    const location = useLocation();
    const { attempts, score, timer } = location.state;

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-neutral-300 to-stone-400">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
                <h2 className="text-2xl font-bold mb-4">Game Over</h2>
                <h4 className="text-xl mb-2">Number of Attempts: <span className="font-semibold">{attempts}</span></h4>
                <h4 className="text-xl mb-2">Score: <span className="font-semibold">{score}</span></h4>
                <h4 className="text-xl mb-4">Time remaining: <span className="font-semibold">{timer}s</span></h4>
                <Link to="/Game">
                    <button className="bg-blue-500 text-white p-2 rounded shadow-lg hover:bg-blue-600 transition duration-300">Play Again</button>
                </Link>
            </div>
        </div>
    );
};

export default Score;
