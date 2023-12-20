import React from 'react';
import Santa from '../assets/Santa.svg';
import Goblin from '../assets/Goblin.svg';

export const Slot = ({ ch, y, x }) => {

    return (
        <div className='slot' x={x} y={y}>
            {ch && (
                <img src={ch === 'X' ? Santa : Goblin} width='100%' height='100%' />
            )}
        </div>
    );
};