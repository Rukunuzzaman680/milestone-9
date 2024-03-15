import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import PriceList from './components/PriceList/PriceList';

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
