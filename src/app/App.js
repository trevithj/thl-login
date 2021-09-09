import './App.css';

function App() {
  const view = 'login'; //TODO: control this via state
  const error = ''; //TODO: control this via state
  
  return (
    <div className="App">
      <header>
        THL Digital
      </header>
      {view === 'login' && <h1>TODO: login screen</h1>}
      {view === 'error' && <h1>TODO: error screen</h1>}
      {view === 'main' && <h1>TODO: main screen</h1>}
      <footer>
        {error && <h2>TODO:error {error}</h2>}
      </footer>
    </div>
  );
}

export default App;
