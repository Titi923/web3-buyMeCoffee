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

// const contractAddress = '0x11f11582f153d5a156d70c2c0c147f19d71d2265';