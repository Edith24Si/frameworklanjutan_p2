import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BiodataDiri from './pertemuan2_tugas/components/BiodataDiri';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      
      {/* --- BAGIAN 1: TUGAS BIODATA --- */}
      <div style={{ marginBottom: '50px' }}>
        <h2 style={{ textAlign: 'center', color: '#646cff', marginBottom: '20px' }}>
          ✨ pemograman Framework lanjutan ✨
        </h2>
        <BiodataDiri />
      </div>

      <div style={{ textAlign: 'center' }}>
        <h2 style={{ color: '#646cff', marginBottom: '20px' }}>
          📦 Latihan Vite Bawaan 📦
        </h2>
        </div>

        <div>

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
  )
}

export default App;
