import React from 'react'
import Final from './Components/Navbar'
import Header from '../src/Components/Header'

function App() {

  return (
    <div className='container' style={{backgroundColor: 'orange'},{height: '100vh'}}>
      <Header/>
      <h2>Welcome to Arakiwi</h2>
      <Final />
    </div>
  );
}

export default App;
