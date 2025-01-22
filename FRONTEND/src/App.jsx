import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './AppRoute/AppRoutes';

function App() {
  return (
    <div className="w-full h-screen px-5 pt-10 bg-zinc-900 text-white">
      <BrowserRouter>
      <Navbar/>
      <AppRoutes/> 
      </BrowserRouter>
    </div>
  );
}

export default App;
