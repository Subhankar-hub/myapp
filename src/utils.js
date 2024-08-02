import React from 'react'

export const setNewOffset = (card, mouseMoveDirection = { x: 0, y: 0}) => {
    const offsetLeft = card.offsetLeft - mouseMoveDirection.x;
    const offsetTop = card.offsetTop - mouseMoveDirection.y;

    return {
        x: offsetLeft < 0 ? 0 : offsetLeft,
        y: offsetTop < 0 ? 0 : offsetTop,
    };


};
