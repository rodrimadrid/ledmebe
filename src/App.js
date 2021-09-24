import './App.css';
import NavBar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer marca = 'Led Me Be'/>
    </div>
  );
}

export default App;
