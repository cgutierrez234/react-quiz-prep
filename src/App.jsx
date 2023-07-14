import React from "react";
import { useState, useEffect } from "react";
import Users from "./components/Users";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };
    getData();
  }, []);

  return <Users users={users} />;
};

export default App;
