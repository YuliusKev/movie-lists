import './App.css';
import NavigationBar from "./components/NavigationBar"
import Dashboard from "./components/Dashboard"
import { useState, useEffect } from "react";
import "./style/container.css"

function App() {

  const [allMovies, setAllMovies] = useState({});

  useEffect(() => {
    fetch(`https://www.omdbapi.com?apikey=715289b&s=Batman&page=1`)
     .then((response) => response.json())
     .then((actualData) => setAllMovies(actualData))
     .catch((err) => {
        console.log(err.message);
     });
   }, []);

  return (
    <div>
      <div className="allPage">
        {/* HEADER */}
          <div className="border">
            <NavigationBar />
          </div>
          {/* HEADER */}
          {/* Dashboard section to show the movies */}
          <Dashboard allData = {allMovies}/>
          {/* Dashboard section to show the movies */}
      </div>
    </div>
  );
}

export default App;
