import './css/App1.css';
import 'antd/dist/antd.css';

import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
