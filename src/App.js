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
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Cross-Chain Swaps

        </a>
        
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Pools and Bonds

        </a>
    
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentation

        </a> 
      </header>
      <h1>
        <div class="team-info">
            <img src="img-2.jpg" alt="" width="300" height="300"/>
            <h4>Filecoin Virtual Machine</h4>
             <p>Deployed on FVM, the virtual machine that allows your applications to interact with the Filecoin Network.</p>
        </div>
      </h1>
    </div>
  );
}

export default App;
