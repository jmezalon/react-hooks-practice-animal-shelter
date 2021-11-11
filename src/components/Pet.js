import React from "react";

function Pet({ petObj: {name, age, weight, gender, id, isAdopted, type}, onAdoptPet }) {

  function handleAdoptClick() {
    fetch(`http://localhost:3001/pets/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({isAdopted: true})
    })
    .then(r => r.json())
    .then(data => onAdoptPet(data.id))
  }
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender==='male'?'♀' : '♂'}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted ? <button className="ui disabled button">Already adopted</button> :
        <button onClick={handleAdoptClick} className="ui primary button">Adopt pet</button>}
      </div>
    </div>
  );
}

export default Pet;
