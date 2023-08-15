import React from 'react';
import Description from './pages/Description';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Background from './pages/Background';
import './css/main.scss'

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Description />
      <Projects />
      <Contacts />
      <Background />
    </div>
  );
}
}

export default App;
