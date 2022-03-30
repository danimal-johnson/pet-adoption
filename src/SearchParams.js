import { useState, useEffect } from 'react';
import Pet from './Pet';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('reptile');
  const [breed, setBreed] = useState('');
  const [pets, setPets] = useState([]);
  const breeds = [];

  useEffect (() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    console.log (`Requesting pets from ${location}, ${animal}, ${breed}`);
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?location=${location}&animal=${animal}&breed=${breed}`);
    const json = await res.json();
    console.log(json.pets);
    setPets(json.pets);
    console.log(pets);
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            type="text"
            value={location}
            placeholder="Location" 
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}
          >
            <option />
            {
              ANIMALS.map(animal => (
                <option key={animal} value={animal}>{animal}</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.target.value)}
            disabled={!breeds.length}
          >
            <option />
            {breeds.map ((breed) => (
              <option key={breed} value={breed}>{breed}</option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
      { pets.map(pet => (
        <Pet key={pet.id} name={pet.name} animal={pet.animal} breed={pet.breed} />
      ))}
    </div>
  )
}

export default SearchParams;