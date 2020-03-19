import React from 'react';
import './App.css';
import '@elastic/eui/dist/eui_theme_light.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './components/student_components/Routing';

function App() {
  return (
    <div className="App">
      <Routing/>
    </div>
  );
}

export default App;
