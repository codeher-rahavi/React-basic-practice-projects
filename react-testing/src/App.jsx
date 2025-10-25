import ApiCallTest from "./components/api-testing"
import Counter from "./components/counter"
import HelloWorld from "./components/hello-world"

function App() {

  return (
    <div className="text-center font-semibold p-10 flex flex-col gap-8">
      <h1>React Unit Testing Crash Course</h1>
      <HelloWorld />
      <Counter />
      <ApiCallTest />
    </div>
  )
}

export default App
