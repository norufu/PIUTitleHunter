import "./App.css";
import SearchLayout from "./Components/SearchLayout/SearchLayout";

function App({ params, searchParams }) {
  return (
    <div className="App">
      <h1 className="title">PIU Title Hunter</h1>
      <SearchLayout />
    </div>
  );
}

export default App;
