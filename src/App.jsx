import { useState } from 'react';
import Navbar from './components/Navbar';
import Buy from './components/Buy';

import './App.css';

function App() {
    return (
        <>
            <Navbar />
            <h1 className='text-center pt-2'>Get me a coffee</h1>

            <Buy />
        </>
    );
}

export default App;
