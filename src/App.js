import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { characters, weapons, locations } from "./utils/gameComponents";
import Popup from "./solutionsPopUp";

function App() {
  const [charactersList, setCharactersList] = useState(characters);
  const [weaponsList, setWeaponsList] = useState(weapons);
  const [locationsList, setLocationsList] = useState(locations);
  const [showPopup, setShowPopup] = useState(false);

  const handleCheckboxChange = (event, type) => {
    const name = event.target.id;
    if (type === "character") {
      const updatedList = charactersList.map((character) =>
        character.name === name
          ? { ...character, found: event.target.checked }
          : character
      );
      setCharactersList(updatedList);
      console.log(updatedList);
    } else if (type === "weapon") {
      const updatedList = weaponsList.map((weapon) =>
      weapon.name === name
          ? { ...weapon, found: event.target.checked }
          : weapon
      );
      setWeaponsList(updatedList);
      console.log(updatedList);
    } else {
      const updatedList = locationsList.map((location) =>
        location.name === name
          ? { ...location, found: event.target.checked }
          : location
      );
      setLocationsList(updatedList);
      console.log(updatedList);
    }
  };
    const handleShowPopup = () => {
      setShowPopup(true);
    };
  
    const handlePopupClose = () => {
      setShowPopup(false);
    };

  return (
    <div className="App">
      <button onClick={handleShowPopup}>Show Character List</button>
      {showPopup && (
        <Popup
          characters={charactersList}
          weapons={weaponsList}
          locations={locationsList}
          closePopup={handlePopupClose}
        />
      )}
      <table id="customers">
        <thead>
          <tr>
            <th></th>
            <th>P1</th>
            <th>P2</th>
            <th>P3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id="title">WHO?</td>
          </tr>
          {charactersList.map((character) => (
            <tr key={character.name}>
              <td>{character.name}</td>
              <td>
                <input
                  type="checkbox"
                  id={character.name}
                  onChange={(event) =>
                    handleCheckboxChange(event, "character")
                  }
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  id={character.name}
                  onChange={(event) =>
                    handleCheckboxChange(event, "character")
                  }
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  id={character.name}
                  onChange={(event) =>
                    handleCheckboxChange(event, "character")
                  }
                />
              </td>
            </tr>
          ))}
          <tr>
            <td id="title">WHAT?</td>
          </tr>
          {weaponsList.map((weapon) => (
            <tr key={weapon.name}>
              <td>{weapon.name}</td>
              <td>
                <input
                  type="checkbox"
                  id={weapon.name}
                  onChange={(event) =>
                    handleCheckboxChange(event, "weapon")
                  }
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  id={weapon.name}
                  onChange={(event) =>
                    handleCheckboxChange(event, "weapon")
                  }
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  id={weapon.name}
                  onChange={(event) =>
                    handleCheckboxChange(event, "weapon")
                  }
                />
              </td>
            </tr>
          ))}
          <tr>
            <td id="title">WHERE?</td>
          </tr>
          {locationsList.map((location) => (
            <tr key={location.name}>
              <td>{location.name}</td>
              <td>
                <input
                  type="checkbox"
                  id={location.name}
                  onChange={(event) =>
                    handleCheckboxChange(event, "location")
                  }
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  id={location.name}
                  onChange={(event) =>
                    handleCheckboxChange(event, "location")
                  }
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  id={location.name}
                  onChange={(event) =>
                    handleCheckboxChange(event, "location")
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button id="solution-btn">Possible Solutions</button>
      
    </div>
  );
}

export default App;
