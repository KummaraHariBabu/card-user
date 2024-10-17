import UserHeader from "./usercard/userHeader/UserHeader";
import UserMain from "./usercard/userMain/UserMain";
import { useEffect, useState } from "react";
import "./app.css";

function App() {
  const [user, setUser] = useState("");
  const getData = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();
      setUser(data.results[0]);
    } catch (error) {
      console.log("Error fetching Data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(user);
  return (
    <div className="App">
      <UserHeader user={user} />
      <UserMain {...user} getData={getData} />
    </div>
  );
}

export default App;
