import { useState } from "react";
import '../../styles/wordDisplay.css'

export default function WordDisplay() {
    const [lettersBlock, setLettersBlock] = useState([
        {letter: 'H', id: 1},
        {letter: 'E', id: 2},
        {letter: 'L', id: 3},
        {letter: 'L', id: 4},
        {letter: 'O', id: 5},
        {letter: 'W', id: 6},
        {letter: 'O', id: 7},
        {letter: 'R', id: 8},
        {letter: 'L', id: 9},
        {letter: 'D', id: 10},
        {letter: '?', id: 11},
        {letter: '!', id: 12},
    ]);
    
    const block = lettersBlock.map(lettersBlock => 
        <li
            key={lettersBlock.id}
            className="block_list-element"
        >
            {lettersBlock.letter}
        </li>
    ); 

    return (
    <div className="block_container">
        <ul className="block_list">
            {block}
        </ul>
    </div>
  );
}
