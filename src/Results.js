import Pet from './Pet';

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Results to Display</h2>
        ) : (
        pets.map(pet => (
          <Pet 
            key={pet.id}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed} 
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  )
} // end of Results

export default Results;