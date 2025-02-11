import { useState } from "react";
import "../../styles/creator.css";

export default function WordCreator() {
  const [word, setWord] = useState("");
  const [createdWord, setCreatedWord] = useState({});

  const createWord = () => {
    if (word === "") {
      return;
    }

    setCreatedWord({
      letters: word.trim().length,
      word: [...word.trim()],
    });
  };

  return (
    <>
      <div className="creator_container">
        <h2 className="creator_h2">Создание слова</h2>
        <div className="creator_container-controls">
          <input
            className="input creator_input"
            placeholder="Введите загадываемое слово"
            onChange={(e) => setWord(e.target.value)}
          />
          <button className="btn creator_btn" onClick={createWord}>
            Создать слово
          </button>
        </div>
      </div>
    </>
  );
}
