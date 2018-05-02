import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Hello, stranger!',
    };
  }
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div className="hui-znaet">
        <input
          type="text"
          placeholder="enter name"
          className="input"
          onChange={this.handleNameChange.bind(this)}
        />
        <code className="result">{this.state.name}</code>
      </div>
    );
  }
}

export default App;
