import logo from './logo192.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo512.png" />
        <p>
          AAVE<code> ON</code> MOONBEAM.
        </p>
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Lending and Borrowing - USDC

        </a>
        
        <form>
         <label>
          Enter USDC Pool:
          <input type="text" name="pool" />
        </label>
         <input type="submit" value="Submit" />
        </form>

        <form>
         <label>
          Flash Loan amount:
          <input type="text" name="amount" />
        </label>
         <input type="submit" value="Submit" />
        </form>
        
      </header>
    </div>
  );
}

export default App;
