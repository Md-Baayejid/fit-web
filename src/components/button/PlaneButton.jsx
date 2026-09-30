
"use client"

import { CardContext } from '@/context/CardProvider';
import React, { useContext } from 'react';

const PlaneButton = ({data}) => {
        
    const {planeCard, setPlaneCard} = useContext(CardContext)

    const isSaved = planeCard?.some((item) => item.id === data.id);

    const handleClick = () =>{

        if (isSaved) return;
        setPlaneCard([...planeCard, data]);

    }

    return (
        <div>
            <button 
            onClick={() => handleClick()}
            disabled={isSaved}
             className="btn btn-primary flex-1 font-bold">
                {isSaved ? "Added ✓" : "Add to today's plan"}
          
        </button>
        </div>
    );
};

export default PlaneButton;