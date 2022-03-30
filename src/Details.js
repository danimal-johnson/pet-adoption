import { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Created to show how to use class components with the withRouter HOC.
//  const { id } = useParams(); <-- useParams() is how we would get the ID from React Router in a *functional* component

class Details extends Component {
  constructor () {
    super();
    this.state = { loading: true };
  }
  async componentDidMount () { // Runs only once - when the component is first rendered
    const { id } = this.props.match.params;
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
    const json = await res.json();

    this.setState(Object.assign({ loading: false }, json.pets[0]));
    // Object.assign() is a method that takes two or more objects and merges them together.
  }


  render () {  // This method is in every class component
    if (this.state.loading) {
      return <h2>Loading...</h2>
    }

    const { name, animal, breed, city, state, description } = this.state;
    // TODO: Add images?

    return (
      <div className='details'>
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
