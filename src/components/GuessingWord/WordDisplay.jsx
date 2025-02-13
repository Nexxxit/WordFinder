import { useState } from "react";

export default function WordDisplay() {
    const [lettersBlock, setLettersBlock] = useState([
        {letter: 'H', id: 1},
        {letter: 'E', id: 2},
        {letter: 'L', id: 3},
        {letter: 'L', id: 4},
        {letter: 'O', id: 5},
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
