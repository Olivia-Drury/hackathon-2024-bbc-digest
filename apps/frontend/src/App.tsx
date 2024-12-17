import { useEffect, useState } from "react";
import "./App.css";
// import { DigestCard } from "./components/DigestCard";
import { DigestGrid } from "./components/DigestGrid";
import { useFetchDigestData } from "./utils/useFetchDigestData";

interface DigestDataModel {
  id: number;
  favourite: boolean;
  category: string;
  data: {
    title: string;
    image: string;
    uuid: number;
  };
}

function App() {
  // useEffect(() => {}, []); -->> This is where we collect the data from the backend - pass the whole json object to the DigestGrid
  // useState to store the data

  // we can add loader and error handler here as well
  const { digestData } = useFetchDigestData();

  return (
    <div className="App">
      <header className="App-header">
        <DigestGrid />
      </header>
    </div>
  );
}

export default App;
