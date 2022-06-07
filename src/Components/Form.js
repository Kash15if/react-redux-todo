import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../Redux/Store1";

const Form = ({ name, setName }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { id, value } = e.target;

    setName({
      ...name,
      [id]: value,
    });
    console.log(name);
  };

  return (
    <div
      style={{
        width: "60vw",
        textAlign: "center",
        margin: "auto",
        padding: "10vh",
      }}
    >
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          // type="email"
          class="form-control"
          id="first"
          aria-describedby="emailHelp"
          placeholder="Enter First"
          onChange={handleChange}
          value={name.first}
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          // type="text"
          class="form-control"
          id="last"
          placeholder="Last"
          onChange={handleChange}
          value={name.last}
        />
      </div>
      <button
        class="btn btn-success m-2"
        onClick={() =>
          dispatch(
            addTodo({
              first: name.first,
              last: name.last,
            })
          )
        }
      >
        Submit
      </button>

      <button
        class="btn btn-warning m-2"
        onClick={() =>
          dispatch(
            updateTodo({
              first: name.first,
              last: name.last,
            })
          )
        }
      >
        Update
      </button>
    </div>
  );
};

export default Form;
