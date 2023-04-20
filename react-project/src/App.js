import './App.css';

import Card from './components/card';
import { TitleBar } from './components/pageComponents';

function App() {
  return (
    <div className="App">
      <TitleBar title="Irish Sheep Census"/>
      <Card content={{body: "something"}}/>
    </div>
  );
}

export default App;
