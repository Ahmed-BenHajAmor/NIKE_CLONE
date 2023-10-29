import { createContext, useEffect, useReducer, useState } from 'react'
import './App.css'
import { Navbar, Men, Women, Kids, Sales, Bag } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AllMensShoes, AllWomensShoes } from './api/Api'
import { reducer } from './reducer'
export const Context = new createContext()

function App() {
  const [data, setData] = useState([])
  const [state, dispatch] = useReducer(reducer, {
    showBag: false,
    bagProducts: [],
    totalPrice: 0,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const menData = await AllMensShoes();
        const womenData = await AllWomensShoes();
        setData([menData.slice(3), womenData.slice(3)]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  return (
    <BrowserRouter>
      <Context.Provider value={{data, state, dispatch}}>
        <Navbar />
        <Bag show={state.showBag}/>
        <Routes>
          <Route path='/' element={<Men />}/>
          <Route path='/women' element={<Women />}/>
          <Route path='/kids' element={<Kids />}/>
          <Route path='/sales' element={<Sales />}/>
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  )
}

export default App;