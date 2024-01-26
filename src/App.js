import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect } from 'react';

function App() {
    // const [emojiString, setEmojiString]= useState("😀")
  const [character, setCharacter] = useState({
    name: 'Gandalf',
    strength: 10,
    intelligence: 18,
    charisma: 16
  });

  useEffect(() => {
    const storedCharacter = JSON.parse(localStorage.getItem('character'));
    if (storedCharacter) {
      setCharacter(storedCharacter);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      [name]: value
    }));
  };

  useEffect(() => {
    localStorage.setItem('character', JSON.stringify(character));
  }, [character]);

  const handleSave = () => {
    // Aquí puedes realizar acciones adicionales antes de guardar si es necesario
    console.log('Guardar datos:', character);
  };

  return (

      <label className="character-form">
        Name: 
        <input
          name= "name"
          value= {character.name}
          onChange= {handleChange}
          />

        Strength:
        <input
          name= "strength"
          value= {character.strength}
          onChange= {handleChange}
          />

        Intelligence:
        <input
          name= "intelligence"
          value= {character.intelligence}
          onChange= {handleChange}
          />
        Charisma:
        <input
          name= "charisma"
          value= {character.charisma}
          onChange= {handleChange}
          />

        <button className="save-button" onClick={handleSave}>Save data</button>
      </label>

    // <div>
    //   <h1>{emojiString}</h1>
    //   <button onClick={() => {
    //     setEmojiString(prevEmoji => prevEmoji + "😀");
    //   }}>Add 1 smiles</button>

    //   <button onClick={() => {
    //     setEmojiString(prevEmoji => prevEmoji.substring(prevEmoji.length));
    //   }}>Delete all</button>
    //   <button onClick={() => {
    //     setEmojiString(prevEmoji => prevEmoji.substring(2));
    //   }}>Delete 1  emoji</button>

    // </div>
  );
}

export default App;
