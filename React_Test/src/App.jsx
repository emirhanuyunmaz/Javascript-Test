import AddTodo from "./components/AddTodo"
import AllTodo from "./components/AllTodo"


function App() {

  return (
    <div className="relative max-w-3xl min-h-[100vh] mx-auto mt-10 ">
      <h1 className="text-4xl font-bold text-center">TODO LIST</h1>
      <AllTodo/>
      <AddTodo/>
    </div>
  )
}

export default App
