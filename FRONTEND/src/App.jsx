import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './AppRoute/AppRoutes';

function App() {
  return (
    <div className="w-full h-screen px-5 pt-10 bg-zinc-900 text-white absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:200px_200px]">

        <BrowserRouter>
        <Navbar/>
        <AppRoutes/> 
        </BrowserRouter>

    </div>
  );
}

export default App;
