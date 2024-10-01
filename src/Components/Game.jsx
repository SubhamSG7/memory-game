import React, { useState, useEffect } from "react";
import { ImagesArr, unknowImage } from "../ImageArr";

const Game = () => {
  const [unknownImage, setUnknowImage] = useState("");
  const [gallery, setGallery] = useState([]);
  const [flipedId, setFlipedId] = useState([]);
  const [matchedCard, setMatchedCard] = useState([]);
  function handleFlip(index, id) {
    if (flipedId.length === 2) return;

    const newFlipped = [...flipedId, { id, index }];
    setFlipedId(newFlipped);

    if (newFlipped.length === 2) {
      if (newFlipped[0].id === newFlipped[1].id) {
        setMatchedCard((prev) => [...prev, newFlipped[0], newFlipped[1]]);
      }
      setTimeout(() => {
        setFlipedId([]);
      }, 1000);
    }
  }

  function showImage(id, index) {
    const isFlipped = flipedId.some((val) => val.index === index);
    const isMatched = matchedCard.some((val) => val.index === index);
    return isFlipped || isMatched;
  }

  useEffect(() => {
    setUnknowImage(unknowImage);
    const shuffledImages = [...ImagesArr, ...ImagesArr].sort(
      () => Math.random() - 0.5
    );
    setGallery(shuffledImages);
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {gallery.length > 0 ? (
        gallery.map((val, index) => (
          <div key={index} className="w-[25%] m-2 ">
            <img
              src={showImage(val.id, index) ? val.url : unknowImage}
              onClick={() => handleFlip(index, val.id)}
              alt={`Image ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl cursor-pointer"
            />
          </div>
        ))
      ) : (
        <p>Loading images...</p>
      )}
    </div>
  );
};

export default Game;
