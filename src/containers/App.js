import React, { Component, PropTypes } from 'react';
import Header from '../common/Header';


// Parent component renders the Header component and component(s) in the route the user navigates to.

class App extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;

// App component is the parent component of the app.  Ever other componet is a child to it. this.props.children is where other child components are rendered.
//
//stateless functional component: composing other components.

//Header: a stateless functional component. presentational components are separated from the container components

//
