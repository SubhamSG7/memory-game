import React, { useState, useEffect } from 'react';
import { ImagesArr } from '../ImageArr';

const Game = () => {
    const [gallery, setGallery] = useState([]);
    const unknowImage="https://img.freepik.com/premium-photo/3d-unknown-person-icon-anonymous-concept-question-mark-human-silhouette-trendy-modern-vector-3d-style_839035-1745803.jpg"
    const [flipedId,setFlipedId]=useState([]);
    const [showId,setShowid]=useState([]);
    function handleFlip(index,id){
        if(flipedId.length==0){
            setFlipedId(prev=>prev.concat({id,index}))
        }
        if(flipedId.length>0){
            setFlipedId(prev=>prev.concat({id,index}))
            setTimeout(()=>{
                setFlipedId((prev)=>prev.slice(flipedId.length-1))
            },3000)
            // let matched=flipedId.find((val)=>val.id==id)
            //    if(!matched){
            //    }
        }
        
    }
    function handleShow(index,id){
        if(showId.includes(id)) return true
    }
    useEffect(() => {
        const shuffledImages = [...ImagesArr].sort(() => Math.random() - 0.5);
        setGallery([...ImagesArr, ...shuffledImages]);
    }, []); 

    return (
        <div className="flex flex-wrap justify-center">
            {  console.log(flipedId)}
            {gallery.length > 0 ? (
                gallery.map((val, index) => (
                    <div key={index} className="w-[25%] m-2 ">
                        <img
                            src={flipedId[0]?.index===index?val.url:unknowImage}
                            onClick={()=>handleFlip(index,val.id)}
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
}

export default Game;
