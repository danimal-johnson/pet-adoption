import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ThemeContext from './ThemeContext';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import Modal from './Modal';

// Created to show how to use class components with the withRouter HOC.
//  const { id } = useParams(); <-- useParams() is how we would get the ID from React Router in a *functional* component

class Details extends Component {
  constructor () {
    super();
    this.state = { loading: true, showModal: false };
  }
  async componentDidMount () { // Runs only once - when the component is first rendered
    const { id } = this.props.match.params;
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
    const json = await res.json();

    this.setState(Object.assign({ loading: false }, json.pets[0]));
    // Object.assign() is a method that takes two or more objects and merges them together.
  }

  // FIXME: Why does the linter say there is an unexpected token?
  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => (window.location = "http://bit.ly/pet-adopt");

  render () {  // This method is in every class component
    if (this.state.loading) {
      return <h2>Loading...</h2>
    }

    const { name, animal, breed, city, state, description, images, showModal } = this.state;
    
    // throw new Error('This is a test error'); // NOTE: FOR TESTING ONLY

    return (
      <div className='details'>
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button 
                style={{ backgroundColor: theme }}
                onClick={this.toggleModal}
              >Adopt {name}</button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {
            showModal ? (
              <Modal>
                <div>
                  <h1>Would you like to adopt {name}?</h1>
                  <div className="buttons">
                    <button onClick={this.adopt}>Yes</button>
                    <button onClick={this.toggleModal}>No</button>
                  </div>
                </div>
              </Modal>
            ) : null
          }
        </div>
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default function detailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <DetailsWithRouter {...props} />
    </ErrorBoundary>
  )
}