import React, { useState } from 'react';
import './Word.css'
function WordCount() {
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = (event) => {
    const text = event.target.value;
    const words = text.match(/\b\w+\b/g) || [];
    const wordCount = words.length;
    const charCount = text.length;

    setWordCount(wordCount);
    setCharCount(charCount);
  };

  return (
    <>
    <div className="container">

      <h2>Word and Character Counter</h2>
      <textarea
        id="textbox"
        cols="50"
        rows="10"
        onChange={handleInputChange}
        className='mt-3'
      ></textarea>
      <div className='paragraph'>
        <span id="word">{wordCount}</span> words and{' '}
        <span id="word">{charCount}</span> characters
      </div>
    </div>

    </>
  );
}

export default WordCount;
