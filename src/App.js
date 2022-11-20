import logo from './logo192.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo512.png" />
        <p>
          Decentralized<code> Bond </code> Exchange
        </p>
        <p>
          Enter APP Below
        </p>
        <a
          className="App-link"
          href="https://falling-rice-7109.on.fleek.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cross-Chain Swaps

        </a>
        
        <a
          className="App-link"
          href="https://dawn-water-3129.on.fleek.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pools and Bonds

        </a>
    
        <a
          className="App-link"
          href="https://github.com/Jackrabbit-Finance"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentation

        </a> 
      </header>
      <h2>
        <div class="team-info">
            <img src="img-2.jpg" alt="" width="300" height="300"/>
            <h4>What you can do in the JRT App</h4>
             <p>1) Create liquidity pools</p>
             <p>2) Provide liquidity</p>
             <p>3) Swap digital assets</p>
             <p>4) Buy and stake into Bonds</p>
        </div>
      </h2>
    </div>
  );
}

export default App;
