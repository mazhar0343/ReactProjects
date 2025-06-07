import './css/App.css'
import Home from './pages/Home'
import {Routes,Route} from "react-router-dom";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";
import {MovieProvider} from "./contexts/MovieContext";
import {useEffect} from "react";

function App() {

  return (
      <MovieProvider>
          <NavBar/>
          <main className="main-content">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/favs" element={<Favorites/>}/>
              </Routes>
          </main>
      </MovieProvider>
  );
}



export default App;
