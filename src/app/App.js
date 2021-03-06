import './App.css';
import {useSelector} from 'react-redux';
import Login from '../login/Login';
import Main from '../common/Main';

function App() {
  const {view, info, warn, error} = useSelector(state => state.appControl);

  return (
    <div className="App">
      <header>
        <img src="/THL_Digital_logo.jpg" alt="main logo"/>
      </header>
      {view === 'login' && <Login />}
      {view === 'main' && <Main />}
      {view === 'error' && <h1>TODO: error screen</h1>}
      {view === 'main' && <h1>TODO: main screen</h1>}
      <footer>
        {info && <h2 title="info">{info}</h2>}
        {warn && <h2 title="warn">{warn}</h2>}
        {error && <h2 title="error">{error}</h2>}
      </footer>
    </div>
  );
}

export default App;
