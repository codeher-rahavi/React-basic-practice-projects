import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassBasedComponent from './components/class-based-component'
import FuncionalComponent from './components/functional-components'
import ProductList from './components/products/index.jsx'
import Users from './components/user/index.jsx'
import ContextButtonComponent from './components/context-concept/button.jsx'
import ContextTextComponent from './components/context-concept/text.jsx'
import UseReducerExample from './components/use-reducer-example.jsx'

const dummyProductData = ['Product 1','Product 2','Product 3'];

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>React js concepts 2025</h1>
      {/* <ClassBasedComponent/> */}
      {/* <FuncionalComponent/> */}
      <UseReducerExample/>
      {/* <ProductList listOfProducts ={dummyProductData} name="rahavi" city="ABCD" /> */}
      {/* <Users/> */}
      {/* <ContextButtonComponent/> */}
      {/* <ContextTextComponent/> */} 
    </div>
  )
}

export default App
 