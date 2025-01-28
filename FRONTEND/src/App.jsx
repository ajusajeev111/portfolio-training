import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './appRoute/AppRoutes';

function App() {
  return (
    <div className="cursor-custom w-full sm:h-full md:h-full lg:h-full xl:h-full 2xl:h-full  px-5 pt-10 bg-zinc-900 text-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:200px_200px]">

        <BrowserRouter>
        <Navbar/>
        <AppRoutes/> 
        </BrowserRouter>

    </div>
  );
  
}


// cursor-custom w-full sm:h-full md:h-full lg:h-[100vh] xl:h-full 2xl:h-screen  px-5 pt-10 bg-zinc-900 text-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:200px_200px]
export default App;
