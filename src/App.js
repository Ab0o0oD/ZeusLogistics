import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Site under construction .. for more info:
        </p>
        <a
          className="App-link"
          href="mailto:zeus.logistics.oslo@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
        Contact us
        </a>
      </header>
    </div>
  );
}

export default App;
