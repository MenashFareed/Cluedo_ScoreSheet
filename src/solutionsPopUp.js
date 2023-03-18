import React, { useEffect, useRef } from "react";

function Popup(props) {
  const characterList = props.characters.reduce(
    (a, o) => (!o.found && a.push(o.name), a),
    []
  );
  const weaponsList = props.weapons.reduce(
    (a, o) => (!o.found && a.push(o.name), a),
    []
  );
  const locationsList = props.locations.reduce(
    (a, o) => (!o.found && a.push(o.name), a),
    []
  );
  console.log(characterList);

  const combinations = [];

  for (let a of characterList) {
    for (let b of weaponsList) {
      for (let c of locationsList) {
        combinations.push([a, b, c]);
      }
    }
  }

  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        props.closePopup();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef, props]);

  return (
    <div className="popup-container">
      <div className="popup" ref={popupRef}>
        <table id="customers">
          <thead>
            <tr>
              <th>Possible Solutions</th>
            </tr>
          </thead>
          <tbody>
            <ul className="popup-list">
              {combinations.map((ans, index) => (
                <tr>
                  <li class="popup-list-items" key={index}>{ans.join(" ")}</li>
                </tr>
              ))}
            </ul>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Popup;
