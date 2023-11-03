import './App.css';
import SearchBar from './components/SearchBar'
import MediaGrid from './components/MediaGrid/MediaGrid';


function App() {
  return (
    <div>
      <SearchBar/>
      
      <div>
        <MediaGrid/>
      </div>
    </div>
  );
}

export default App;
