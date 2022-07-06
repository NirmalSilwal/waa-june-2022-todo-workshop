import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter } from "react-router-dom";
import Counter from "./components/counter/Counter";
import { Provider } from "react-redux";
import { store } from "./components/redux/Store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Dashboard></Dashboard>
          <Counter />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
