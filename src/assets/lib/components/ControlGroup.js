import React from 'react';

export default class ControlGroup extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="control-group">
        {this.props.children}
      </form>
    );
  }

}

ControlGroup.propTypes = {
  children: React.PropTypes.node.isRequired
};
