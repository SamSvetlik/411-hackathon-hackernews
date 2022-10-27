import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"  />
         <h1>Search Hacker News</h1>
         <form>
          <input placeholder='Search stories by title, url, or author'></input>
         </form>
         <span>Settings</span>
      </header>
      <main>
        <div>
          <h2>Filter by:</h2>
          <form>
            <input>dropdown menu with default, date, and author</input>
          </form>
          <h2>number of results</h2>
        </div>
        <ul>The search results will be listed here as LI's

        </ul>
      </main>
      <footer>
          There will be a bunch of a tags here for links
      </footer>
    </div>
  );
}

export default App;
