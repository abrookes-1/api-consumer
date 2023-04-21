import './App.css';

import HomePage from './components/homePage';
import { TitleBar } from './components/miscComponents';

function App() {
  return (
    <div className='App'>
      <div className='appContainer'>
        <TitleBar title='Gemini Objects'/>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
