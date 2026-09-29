"use client"

import { CardContext } from '@/context/CardProvider';
import React, { useContext } from 'react';

const SaveButton = ({data}) => {

    const {saveCard, setsaveCard} = useContext(CardContext);

    const handleClick = () =>{
        setsaveCard([...saveCard, data]);


    console.log("Selected Card:", data);
    console.log("Today's Plan:", [...saveCard, data]);
    }

    return (
        <div>
            <button onClick={()=> handleClick()} className="btn btn-base-200 border-base-300 flex-1 font-bold">
                Save for later
            </button>
        </div>
    );
};

export default SaveButton;