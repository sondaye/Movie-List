import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";

function CoinTracker({price}){
  // props로 받아온 price를 state에 넣어서 사용하면 이후 부모 컴포넌트에서 price값이 업데이트 되어도 자식 컴포넌트에 반영되지 않으므로,
  // state에 넣지 않고 사용한다.
  const [input, setInput] = useState(0);
  const [inverted, setInverted] = useState(false);
  const onChange = (event) => {
    setInput(event.target.value);
  }
  const reset = () => {
    setInput(0);
  }
  const invert = () => {
      reset();
      setInverted((current) => !current);
  }
  return (
    <div>
        <div>
          <div>
            <label htmlFor="money">$ </label>
            <input 
              id="money" 
              type="number" 
              placeholder="Enter the what you have"
              value={inverted ? Math.floor((price*input)*100)/100 : input}
              onChange={onChange}
              disabled={inverted}
            /><br/>
            <label htmlFor="coin">You can get </label>
            <input
              id="coin" 
              type="number"
              value={inverted ? input : Math.floor((input/price)*100)/100}
              onChange={onChange}
              disabled={!inverted}
            /><br/>
            <button onClick={reset}>reset</button>
            <button onClick={invert}>invert</button>
          </div>
        </div>
    </div>
  );
}


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]); // useState()안에 아무값도 넣지 않으면 coins가 undefined가 되므로 컴포넌트가 undefined가 돼서 에러가 발생함.
  const [selected, setSelected] = useState("xx");
  useEffect(()=> {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false)
    });
  }, [])
  const selectOption = (event) => {
    setSelected(event.target.value);
  }
  return (
    <div>
        <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
        {loading ? <strong>Loading...</strong> 
        : (
        <div>
          <select onChange={selectOption}>
            <option value="xx">select coin</option>
            {coins.map((coin) => (
            <option value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
            </option>
            ))}
          </select>
          <hr />
          {selected === "xx" ? <strong>Please select coin</strong> : <CoinTracker price={selected} />}
        </div>
        )}
    </div>
  );
}

export default App;
