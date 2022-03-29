import { useState, useEffect } from 'react';

const ANIMALS = ['bird', 'cat', 'dog', 'fish', 'reptile'];

const SearchParams = () => {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const [pets, setPets] = useState([]);
  const breeds = [];

  useEffect (() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?location=${location}&animal=${animal}&breed=${breed}`);
    const json = await res.json();
    console.log(json);
    setPets(json.pets);
  }


  const updateLocation = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            type="text"
            value={location.toUpperCase()}
            placeholder="Location" 
            onChange={updateLocation}
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

        <button onClick={requestPets} >Submit</button>
      </form>
    </div>
  )
}

export default SearchParams;