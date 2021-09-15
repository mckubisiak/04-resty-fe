import React, { Component } from 'react';
import Controls from '../post-kubi/Controls';
import Display from '../post-kubi/Display';
import Header from '../post-kubi/Header';
import { apiRouter } from '../services/apiRouter';
// import Display from '../components/post-kubi/Display';

export default class Postkubi extends Component {
  state = {
    url: 'Type url here',
    jsonInput: 'json input',
    route: '',
    routeResponse: { text: 'howdy partner, valid requests populate here' },
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async () => {
    const response = 
    await apiRouter(this.state.url, this.state.route, this.state.jsonInput);
    this.setState({ routeResponse: response });
  }

  render() {
    return (
      <>
        <Header />
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
