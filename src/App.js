import React, {Component}  from 'react';
import { TemperatureInput, BoilingVerdict } from './components/';
import { tryConvert, toCelsius, toFarenheit } from './components/functions';

class Calculator extends Component 
{

  constructor(props)
  {
    super(props);

    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFarenheitChange = this.handleFarenheitChange.bind(this);

    this.state = { temperature: '', scale: 'c' };
  }


  handleCelsiusChange(temperature)
  {
    this.setState({scale: 'c', temperature});
    
  }
  
  handleFarenheitChange(temperature)
  {
    this.setState({scale: 'f', temperature});

  }


  render()
  {

    const { scale, temperature } = this.state;
    const celsius = ((scale === 'f')? tryConvert(temperature, toCelsius) : temperature );
    const farenheit = ((scale === 'c')? tryConvert(temperature, toFarenheit) : temperature );
    return (
      <>
        <TemperatureInput 
          scale="c" 
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput 
          scale="f" 
          temperature={farenheit}
          onTemperatureChange={this.handleFarenheitChange}
        />

        <BoilingVerdict 
          celsius={parseFloat(celsius)}
        />

      </>
    )
  }
}

export default Calculator;