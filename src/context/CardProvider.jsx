"use client"
import React, { createContext, useState } from 'react';

export const CardContext = createContext({})

const CardProvider = ({children}) => {

    const [planeCard, setPlaneCard] = useState([]);
    const [saveCard, setsaveCard] = useState([]);

    const shareData = {
        planeCard, setPlaneCard, saveCard, setsaveCard
    }

    return (
        <CardContext.Provider value={shareData} > {children} </CardContext.Provider>
    );
};

export default CardProvider;