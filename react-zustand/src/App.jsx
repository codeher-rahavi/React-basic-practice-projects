import CounterValue from "./counter-app/counter-value"
import ManageCounter from "./counter-app/manage-counter"
import Products from "./products"


function App() {

  return (
    <div className="text-center mt-12">
      <h1 className="mb-5">React With Zustand</h1>
      <ManageCounter />
      <CounterValue />
      <Products />
    </div>
  )
}

export default App
