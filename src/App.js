import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import { store } from "./Redux/Store1";
import { Provider } from "react-redux";
// import { useSelector, useDispatch } from "react-redux";

import Table from "./Components/Tables";
import Form from "./Components/Form";

function App() {
  const [name, setName] = useState({
    first: "",
    last: "",
  });

  return (
    <Provider store={store}>
      <div className="App">
        <Form name={name} setName={setName} />
        <Table name={name} setName={setName} />
      </div>
    </Provider>
  );
}

export default App;
