import React from 'react';
import Description from './pages/Description';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import './css/main.scss'
class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Description />
      <Projects />
      <Contacts />
    </div>
  );
}
}

export default App;
