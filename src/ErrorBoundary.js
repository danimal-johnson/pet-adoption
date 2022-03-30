import { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

// ErrorBoundary can only be used with class components.

class ErrorBoundary extends Component {
  constructor (props) {
    super(props);
    this.state = { hasError: false, redirect: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // I log this into Sentry, Azure Monitor, New Relic, TrackJS, etc.
    console.error("ErrorBoundary has caught an error:", error, info);
  }

  componentDidUpdate() {
    if(this.state.hasError) {
      setTimeout(() => {
        this.setState({ redirect: true });
    }, 5000);
    }
  }

  render () {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h2>
          This listing has an error. <Link 
          to="/">Click here</Link> to 
          go back to the home page.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;