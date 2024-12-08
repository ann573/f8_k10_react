import React from "react";
import { useContext } from "react";
import { TodoContext } from "./../contexts/TodoContext";

const HomePage = () => {
  const { todos } = useContext(TodoContext);
  console.log(todos);
  return (
    <table className="border border-collapse w-1/2 mx-auto mt-5 text-center">
      <thead>
        <tr>
          <th className="border">ID</th>
          <th className="border">Title</th>
          <th className="border">Status</th>
          <th className="border">Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((item, index) => (
          <tr key={index}>
            <td className="border">{item.id}</td>
            <td className="border">{item.title}</td>
            <td className="border text-center">
              {item.status ? (
                <span className="bg-green-400 px-3 py-1 rounded-md cursor-pointer">Done</span>
              ) : (
                <span className="bg-orange-400 px-3 py-1 rounded-md cursor-pointer">Doing</span>
              )}
            </td>
            <td className="border text-center py-2">
              <button className="bg-red-500 rounded-lg p-1 mr-3">Remove</button>
              <button className="bg-yellow-500 rounded-lg p-1">Update</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HomePage;
