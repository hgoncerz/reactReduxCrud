import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUserName } from "./features/Users";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [newUserName, setNewUserName] = useState("");
  return (
    <div className="grid place-items-center min-h-screen my-3">
      <div className="">
        <div className="">
          <input
            type="text"
            placeholder="Name..."
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="border rounded-md shadow leading-tight focus:shadow-outline p-1 mx-1"
          />
          <input
            type="text"
            placeholder="Username..."
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            className="border rounded-md shadow leading-tight focus:shadow-outline p-1 mx-1"
          />
          <button
            onClick={() => {
              dispatch(
                addUser({
                  id: userList[userList.length - 1].id + 1,
                  name,
                  userName,
                })
              );
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline "
          >
            Add User
          </button>
        </div>
      </div>
      <div className="">
        {userList.map((user) => {
          return (
            <div
              className="bg-blue-200 shadow-md p-2 m-2 px-6 rounded-md text-center"
              key={user.id}
            >
              <h1>{user.name}</h1>
              <h1>{user.username}</h1>
              <input
                type="text"
                placeholder="New Username..."
                onChange={(e) => {
                  setNewUserName(e.target.value);
                }}
                className="border rounded-md shadow leading-tight focus:shadow-outline p-1"
              />
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 mx-1 rounded focus:outline-none focus:shadow-outline>Update username"
                onClick={() =>
                  dispatch(
                    updateUserName({ id: user.id, username: newUserName })
                  )
                }
              >
                Update username
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 mx-1 rounded focus:outline-none focus:shadow-outline>Update username"
                onClick={() => dispatch(deleteUser({ id: user.id }))}
              >
                Delete User
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
