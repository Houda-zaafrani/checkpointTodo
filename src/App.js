import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTask from "./component/AddTask";
import ListTask from "./component/ListTask";
import { useSelector } from "react-redux";

function App() {
  const tasks = useSelector((state) => state.reducerTask);
  console.log(tasks);

  return (
    <div className="App">
      <div style={{ margin: 30 }}>
        <h1
          style={{
            fontWeight: 50,
            textAlign: "center",
            color: "rgb(80, 77, 77)",
          }}
        >
          What's your task today ?
        </h1>
      </div>
      <div
        style={{
          width: 479,
          height :400,
          marginTop: 10,
          margin: "auto",
          fontSize: 20,
          backgroundColor: "rgb(219, 228, 243)",
        }}
      >
        <AddTask tasks={tasks} />
        <div style={{ margin: 5 }}>
          <h3
            style={{
              fontWeight: 200,
              textAlign: "center",
              color: "rgb(80, 77, 77)",
            }}
          >
            Lists of todo
          </h3>
          <ListTask tasks={tasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
