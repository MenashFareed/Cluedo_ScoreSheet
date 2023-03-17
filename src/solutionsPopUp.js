import React from "react";

function Popup(props) {
  const characterList = props.characters.reduce((a, o) => (!o.found && a.push(o.name), a), []);
  const weaponsList = props.weapons.reduce((a, o) => (!o.found && a.push(o.name), a), []);
  const locationsList = props.locations.reduce((a, o) => (!o.found && a.push(o.name), a), []);
  console.log(characterList)

const combinations = [];

for (let a of characterList) {
  for (let b of weaponsList) {
    for (let c of locationsList) {
      combinations.push([a, b, c]);
    }
  }
}

console.log(combinations);

  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Possible Solutions</h2>
        <ul>
          {combinations.map((ans) => (
            <li>
              {ans.join(" ")}
            </li>
          ))}
        </ul>
        <button onClick={props.closePopup}>Close</button>
      </div>
    </div>
  );
}

export default Popup;
