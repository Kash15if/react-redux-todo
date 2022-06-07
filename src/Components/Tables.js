import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../Redux/Store1";

const Table = ({ name, setName }) => {
  const todos = useSelector((state) => state.todoSlice);
  const dispatch = useDispatch();

  const editVal = (params) => {
    setName({ ...params });
  };

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr>
              {Object.keys(todo).map((item) => (
                <td>{todo[item]}</td>
              ))}
              <td>
                <button
                  className="btn btn-primary m-2"
                  onClick={() => editVal(todo)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger m-2"
                  onClick={() => dispatch(removeTodo(todo.first))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
