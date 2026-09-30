"use client";

import { CardContext } from "@/context/CardProvider";
import React, { useContext } from "react";

const SaveButton = ({ data }) => {
    const { saveCard, setsaveCard } = useContext(CardContext);

    const isSaved = saveCard?.some((item) => item.id === data.id);

    const handleClick = () => {
        if (isSaved) return;

        const updatedCards = [...saveCard, data];

        setsaveCard(updatedCards);

        
    };

    return (
        <div>
            <button
                onClick={()=>handleClick()}
                disabled={isSaved}
                className="btn btn-base-200 border-base-300 flex-1 font-bold"
            >
                {isSaved ? "Saved ✓" : "Save for later"}
            </button>
        </div>
    );
};

export default SaveButton;