import './App.css';
import { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function App() {

  const [name, setName] = useState('')
  const [saludo, setSaludo] = useState()
  const [status, setStatus] = useState()

  const handleChangeName = (e) => {
    const nameInput = e.target.value
    console.log(nameInput)
    setName(nameInput)
  }

  const handleSubmit = async () =>{
    try {
      const response = await axios.get(`${API_BASE_URL}/hello?name=${name}`)
      setSaludo(response.data)
    } catch (error) {
      console.log("handleSubmit error :", error)
    }
  }

  const handleCheckStatus = async () =>{
    try {
      const response = await axios.get(`${API_BASE_URL}`)
      setStatus(response.data)
    } catch (error) {
      console.log("handleSubmit error :", error)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <div>
            <label>Nombre: </label>
            <input
              type="text"
              name="name"
              autoComplete="off"
              value={name}
              onChange={(e) => handleChangeName(e)}
              placeholder="Ingrese su nombre..."
            />
          </div>
        </form>
        <button
          onClick={handleSubmit}
        >
          Obtener Saludo
        </button>
      <div>
        {
          saludo && 
          <p>{saludo}</p>
        }
      </div>
      <button
          onClick={handleCheckStatus}
        >
          Obtener Status
        </button>
      <div>
        {
          status && 
          <p>{status}</p>
        }
      </div>
      </header>
    </div>
  );
}

export default App;
