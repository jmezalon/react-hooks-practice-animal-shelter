import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  return <div className="ui cards">
    {pets.map(pet => <Pet key={pet.id} petObj={pet} onAdoptPetq={onAdoptPet} />)}
  </div>;
}

export default PetBrowser;
