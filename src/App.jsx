import { useState, useMemo } from 'react';
import './Text.css'; 

function Reversed() {
  const [text, setText] = useState('');

  const reversedText = useMemo(() => {
    return text.split('').reverse().join('');
  }, [text]);

  return (
    <div className="container">
      <h1 className="title">Text Reverser</h1>
      <input
        type="text"
        className="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <p className="output">
        Reversed Text: <span>{reversedText}</span>
      </p>
    </div>
  );
}

export default Reversed;
