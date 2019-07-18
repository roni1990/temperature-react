import React, { Component } from 'react';

const aScalesName = {
  c: 'Celsius',
  f: 'Farenheit'
}
class TemperatureInput extends Component
{
  constructor(props)
  {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.props.onTemperatureChange(e.target.value)
  }

  render()
  {
    const { scale, temperature } = this.props;

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

export default TemperatureInput;