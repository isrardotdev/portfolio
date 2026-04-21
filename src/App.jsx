import { Analytics } from "@vercel/analytics/react";
import Resume from "./Components/Resume";
import "./App.css";

function App() {
  return (
    <>
      <Analytics />
      <Resume />
    </>
  );
}

export default App;
