import "./App.css";
import Todo from "./components/ToDo";
import "./components/ToDo/styles-dark.css";
function App() {
  return (
    <div className="grid grid-cols-11">

      <div className="App col-span-3 col-start-5">
        <h3 className="text-3xl font-bold mb-3 ">Hello Fuat!</h3>
        <h4 className="text-xl font-medium mb-5 text-zinc-600">What is your plan today?</h4>
        <Todo />
      </div>
    </div>
  );
}

export default App;
