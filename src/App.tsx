import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Charts from './views/charts/Charts';
import Cooling from './views/cooling/Cooling';
import ErrorList from './views/errors/Error';
import Parameters from './views/parameters/Parameters';
import Process from './views/process/Process';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Process />} />
            <Route path='/params' element={<Parameters />} />
            <Route path='/cooling' element={<Cooling />} />
            <Route path='/data' element={<Charts />} />
            <Route path='/errors' element={<ErrorList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
