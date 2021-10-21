import logo from './logo.svg';
import './App.css';
import Lista from './Components/Lista/Lista';

function App() {
  return (
    <div className="container d-flex align-items-center flex-column">
      <span className="bolder h1">Lista de digimons</span>
      <Lista />
    </div>
  );
}

export default App;
