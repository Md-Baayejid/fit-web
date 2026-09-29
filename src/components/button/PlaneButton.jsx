
"use client"

import { CardContext } from '@/context/CardProvider';
import React, { useContext } from 'react';

const PlaneButton = ({data}) => {
        
    const {planeCard, setPlaneCard} = useContext(CardContext)

    const handleClick = () =>{
        setPlaneCard([...planeCard, data]);


    console.log("Selected Card:", data);
    console.log("Today's Plan:", [...planeCard, data]);
    }

    return (
        <div>
            <button onClick={() => handleClick()} className="btn btn-primary flex-1 font-bold">
          Add to today&apos;s plan
        </button>
        </div>
    );
};

export default PlaneButton;