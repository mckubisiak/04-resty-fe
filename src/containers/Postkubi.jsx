import React, { Component } from 'react';
import Controls from '../post-kubi/Controls';
import Display from '../post-kubi/Display';
import { apiRouter } from '../services/apiRouter';
// import Display from '../components/post-kubi/Display';

export default class Postkubi extends Component {
  state = {
    url: 'API here',
    jsonInput: 'json input',
    route: '',
    routeResponse: { text: 'howdy partner' },
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async () => {
    console.log(this.state);
    const response = 
    await apiRouter(this.state.url, this.state.route, this.state.jsonInput);
    this.setState({ routeResponse: response });
  }

  render() {
    return (
      <>
        <Controls 
          url={this.state.url} 
          jsonInput={this.state.jsonInput}
          onChange={this.handleChange} 
          submit={this.handleSubmit}
        />

        <Display routeResponse={this.state.routeResponse} />
      </>
    );
  }
}
