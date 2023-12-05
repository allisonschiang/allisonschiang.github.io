import './App.css';
import SearchBar from './components/SearchBar'
import MediaGrid from './components/MediaGrid/MediaGrid';
import Navbar from './components/navbar';


function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <MediaGrid/>
      </div>
    </div>
  );
}

export default App;
