import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  // const [allPets, setAllPets] = useState([]);
  const [pets, setPets] = useState([])
  const [filters, setFilters] = useState({ type: "all" });
  const BASE_URL = 'http://localhost:3001/pets'

  function handleTypeChange(e) {
    setFilters({ type: e.target.value })
  }

  function handleFindPetClick() {
    if (filters.type === 'all') {
      fetch(`${BASE_URL}`)
      .then(r => r.json())
      .then(setPets)
    } else {
      fetch(`${BASE_URL}?type=${filters.type}`)
      .then(r => r.json())
      .then(setPets)
    }
  }

  function handleAdoptPet(id) {
    const updatedPet = pets.map(pet => {
      if(pet.id === id) {
        return {...pet, isAdopted: true}
      } else {
        return pet
      }
    })
    setPets(updatedPet)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters 
              onChangeType={handleTypeChange} 
              filters={filters.type} 
              onFindPetsClick={handleFindPetClick}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handleAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
