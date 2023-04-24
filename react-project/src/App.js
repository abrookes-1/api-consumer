import './App.css';

import HomePage from './components/homePage';
import { TitleBar } from './components/misc_components/miscComponents';

function App() {
  return (
    <div className='App'>
      <div className='appContainer'>
        <TitleBar title='Astronauts' subtitle='Provided by thespacedevs.com'/>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
