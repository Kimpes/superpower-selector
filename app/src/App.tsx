import { useEffect, useState } from "react";
import axios from "axios";
import type { Power } from "@shared/types";

function App() {
  const [powers, setPowers] = useState(Array<Power>);

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
