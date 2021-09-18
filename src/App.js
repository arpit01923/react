import React, { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "🍇": "Grape",
  "🍉": "Watermelon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🍓": "Strawberry",
  "🍒": "Cherries",
  "🥭": "Mango",
  "🥝": "Kiwi"
};

export default function App() {
  var [meaning, setmeaning] = useState("");

  function emojiClickHandler(event) {
    var meaning = emojiDictionary[event.target.value];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Welcome</h1>
      <input onChange={emojiClickHandler}></input>
      <div>{meaning}</div>
    </div>
  );
}
