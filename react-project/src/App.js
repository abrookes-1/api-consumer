import './App.css';

import HomePage from './components/homePage';
import { TitleBar } from './components/miscComponents';

function App() {
  return (
    <div className="App">
      <TitleBar title="Irish Sheep Census"/>
      <HomePage />
    </div>
  );
}

export default App;
