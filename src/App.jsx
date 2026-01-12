import Ways from "./routes/Ways";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (import.meta.env.MODE !== "test") {
      AOS.init();
    }
  }, []);

  return <Ways />;
}

export default App;
