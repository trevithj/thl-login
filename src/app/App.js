import './App.css';
import {useSelector} from 'react-redux';

function App() {
  const {view, info, warn, error} = useSelector(state => state.appControl);

  return (
    <div className="App">
      <header>
        THL Digital
      </header>
      {view === 'login' && <h1>TODO: login screen</h1>}
      {view === 'error' && <h1>TODO: error screen</h1>}
      {view === 'main' && <h1>TODO: main screen</h1>}
      <footer>
        {info && <h2>TODO:info {info}</h2>}
        {warn && <h2>TODO:warn {warn}</h2>}
        {error && <h2>TODO:error {error}</h2>}
      </footer>
    </div>
  );
}

export default App;
