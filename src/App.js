import React,{useState,useEffect} from 'react';
import './App.css';
import BeerCard from './component/BeerCard';
function App() {
  useEffect(() => {
    async function fetchBeers() {
      try {
        const response = await fetch('https://api.sampleapis.com/beers/ale');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBeersData(data);
      } catch (error) {
        console.error('Error fetching beers:', error);
      }
    }

    fetchBeers();
  }, []);

  const [beersData, setBeersData] = useState([]);






  
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredBeers = beersData.filter(beer =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <>
  
  <div className="App">
      <h1>Beer Data</h1>
      <input
        type="text"
        placeholder="Search for a beer..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <BeerCard data={filteredBeers} />
    </div>
 
    </>
  );
}

export default App;
