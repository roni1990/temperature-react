export function toCelsius(farenheit)
{
  return (farenheit - 32 ) * 5 / 9;
}

export function toFarenheit( celsius )
{
  return (celsius * 9 / 5 ) +32;
}

export function tryConvert( temperature, convert )
{
  const input = parseFloat(temperature);
  if(Number.isNaN(input))
  {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(ouput * 1000 ) / 1000;
  return rounded.toString();
}