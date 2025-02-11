import { useState } from "react";

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
      <div>
        <h2>Создание слова</h2>
        <input
          placeholder="Введите загадываемое слово"
          onChange={(e) => setWord(e.target.value)}
        />
        <button onClick={createWord}>Создать слово</button>
      </div>
    </>
  );
}
