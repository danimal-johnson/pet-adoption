import { useState } from 'react';

const ANIMALS = ['bird', 'cat', 'dog', 'fish', 'lizard'];

const SearchParams = () => {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const breeds = ['labradoodle', 'poodle', 'pug', 'german shepard', 'chihuahua'];

  const updateLocation = (e) => {
    setLocation(e.target.value);
  };

  const updateBreed = (e) => {
    setBreed(e.target.value);
  }

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

        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams;