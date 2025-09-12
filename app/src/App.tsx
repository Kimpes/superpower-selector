import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [powers, setPowers] = useState([]);

  useEffect(() => {
    axios
      .get("/api")
      .then((res) => setPowers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {powers &&
        powers.map((power, i) => {
          return <div key={i}>{`${power}`}</div>;
        })}
    </div>
  );
}

export default App;
