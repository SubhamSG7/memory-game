import React, { useState, useEffect } from "react";
import { ImagesArr, unknowImage } from "../ImageArr";
import { useNavigate } from "react-router-dom";

const Game = () => {
    const [unknownImage, setUnknowImage] = useState("");
    const [gallery, setGallery] = useState([]);
    const [flipedId, setFlipedId] = useState([]);
    const [matchedCard, setMatchedCard] = useState([]);
    const [attempts, setAttempts] = useState(0);
    const [timer, setTimer] = useState(60);
    const navigate = useNavigate();

    useEffect(() => {
        const shuffledImages = shuffleImages();
        setGallery(shuffledImages);
        setUnknowImage(unknowImage);
    }, []);

    const shuffleImages = () => {
        return [...ImagesArr, ...ImagesArr].sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer(prev => prev - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const handleFlip = (index, id) => {
        const isMatched = matchedCard.some(val => val.index === index);
        if (flipedId.length === 2 || isMatched) return;

        const newFlipped = [...flipedId, { id, index }];
        setFlipedId(newFlipped);

        if (newFlipped.length === 2) {
            setAttempts(prev => prev + 1);
            if (newFlipped[0].id === newFlipped[1].id) {
                setMatchedCard(prev => [...prev, newFlipped[0], newFlipped[1]]);
            }
            setTimeout(() => {
                setFlipedId([]);
            }, 1000);
        }
    };

    const showImage = (id, index) => {
        return flipedId.some(val => val.index === index) || matchedCard.some(val => val.index === index);
    };

    const resetGame = () => {
        setGallery(shuffleImages());
        setFlipedId([]);
        setMatchedCard([]);
        setAttempts(0);
        setTimer(0);
    };

    useEffect(() => {
        if (matchedCard.length === gallery.length && gallery.length !== 0) {
            navigate("/score", { state: { timer, attempts, score: matchedCard.length / 2 } });
        }
        if (timer === -1) {
            navigate("/score", { state: { timer: timer + 1, attempts, score: matchedCard.length / 2 } });
        }
    }, [matchedCard, gallery, timer, attempts, navigate]);

    return (
        <div className="relative h-screen overflow-hidden bg-gradient-to-r from-neutral-300 to-stone-400">
            <div className="absolute top-0 right-32 bg-white p-2 rounded shadow-lg z-10">Attempts: {attempts}</div>
            <div className="absolute top-0 right-6 bg-white p-2 rounded shadow-lg z-10">Matched: {matchedCard.length / 2}</div>
            <div className="absolute top-0 right-58 bg-white p-2 rounded shadow-lg z-10">Timer: {timer}s</div>
            <button onClick={resetGame} className="absolute bottom-4 right-4 bg-blue-500 text-white p-2 rounded shadow-lg z-10">Reset Game</button>
            <div className="flex flex-wrap justify-center">
                {gallery.length === 0 ? (
                    <p>Loading images...</p>
                ) : (
                    gallery.map((val, index) => (
                        <div key={index} className="flex justify-center" style={{ width: 'calc(25% - 16px)', margin: '8px' }}>
                            <div className="relative w-full h-36 flip">
                                <div className={`flip-inner ${showImage(val.id, index) ? 'flipped' : ''}`}>
                                    <div className="flip-front">
                                        <img
                                            src={unknownImage}
                                            alt={`Image ${index + 1}`}
                                            className="absolute inset-0 w-full h-full object-center rounded-lg shadow-lg cursor-pointer"
                                            onClick={() => handleFlip(index, val.id)}
                                        />
                                    </div>
                                    <div className="flip-back">
                                        <img
                                            src={showImage(val.id, index) ? val.url : unknownImage}
                                            alt={`Image ${index + 1}`}
                                            className="absolute inset-0 w-full h-full object-center rounded-lg shadow-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Game;
