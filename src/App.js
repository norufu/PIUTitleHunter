import "./App.css";
import SearchLayout from "./Components/SearchLayout/SearchLayout";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      <h1 className="title">PIU Title Hunter</h1>
      <SearchLayout />
      <Analytics />
    </div>
  );
}

export default App;
