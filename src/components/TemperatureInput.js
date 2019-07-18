import React, { Component } from 'react';

const aScalesName = {
  C: 'Celsius',
  F: 'Farenheit'
}
class TemperatureInput extends Component
{
  constructor(props)
  {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      temperature: ''
    };
  }

  handleChange(e){
    this.setState({ temperature: e.target.value })
  }

  render()
  {
    const { temperature } = this.state;
    const { scale } = this.props;

    return (
      <fieldset>
        <legend> Ingresa Temperatura in {aScalesName[scale]} </legend>
        <input 
          type="text"
          value={temperature}
          onChange={this.handleChange}
        />
      </fieldset>
    )
  }
}