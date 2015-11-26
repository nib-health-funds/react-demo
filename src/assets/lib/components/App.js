
import React from 'react';

class App extends React.Component {

  render() {
    const {children} = this.props;
    return <div>{children || null}</div>;
  }

}

App.propTypes = {
  children: React.PropTypes.node
};

export default App;
