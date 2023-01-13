import './index.scss';
import React, { useCallback } from 'react';

const fromCurrencies = ['RUB'];
const toCurrencies = ['USD', 'EUR'];

function App() {
//STATES
const [objCurrencies, setObjCurrencies] = React.useState({});

const [fromCurrency, setFromCurrency] = React.useState('RUB');
const [valueFrom, setValueFrom] = React.useState(0);

const [toCurrency, setToCurrency] = React.useState('USD');
const [valueTo, setValueTo] = React.useState (0);

console.log(objCurrencies, fromCurrency, valueFrom, toCurrency, valueTo)
//FETCH API
React.useEffect (() => {
  fetch('https://www.cbr-xml-daily.ru/latest.js')
  .then((res)=> res.json())
  .then((json) => setObjCurrencies(json.rates))
},[])

//FUNCTIONS

const onChangeValue = (val) => {
  setValueFrom(val)
  setValueTo((val*objCurrencies[toCurrency]).toFixed(2))
}


const onClickToChangeCurrency = (value) => {
  setToCurrency(value);
  setValueTo((valueFrom*objCurrencies[toCurrency]).toFixed(2))
}

React.useEffect(() => {
  onClickToChangeCurrency(toCurrency)
},[toCurrency])

//RENDER

  return (
<div className="App">

      <div className="block">
        <ul className="currencies">

          {fromCurrencies.map((cur) => (
            <li
              //onClick={(e) => setFromCurrency(e.target.value)}
              className={fromCurrency === cur ? 'active' : ''}
              key={cur}>
              {cur}
            </li>
              ))}

        </ul>

    <input
      onChange={(e) => onChangeValue(e.target.value)}
      value={valueFrom}
      type="number"
      placeholder={0}
    />

    </div>


  <div className="block">
    <ul className="currencies">
      {toCurrencies.map((cur) => (
        <li
          onClick={() => onClickToChangeCurrency(cur)}
          className={toCurrency === cur ? 'active' : ''}
          key={cur}>
          {cur}
        </li>
      ))}
      <li>
        <svg height="50px" viewBox="0 0 50 50" width="50px">
          <rect fill="none" height="50" width="50" />
          <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
        </svg>
      </li>
    </ul>
    <input
      onChange={(e) => setValueTo(e.target.value)}
      value={valueTo}
      type="number"
      placeholder={0}
    />

  </div>
</div>
  );
}

export default App;
