import { useEffect, useState } from "react";
import "./App.css";
// import { DigestCard } from "./components/DigestCard";
import { DigestGrid } from "./components/DigestGrid";
import { dataFetcher } from "./components/dataFetcher";

interface DigestDataModel {
  id: number,
  favourite: boolean,
  category: string,
  data: {
    title: string,
    image: string,
    uuid: number
  };
}

function App() {
  // useEffect(() => {}, []); -->> This is where we collect the data from the backend - pass the whole json object to the DigestGrid
  // useState to store the data
  const [digiestData, setdigiestData] = useState<[]>([]);
  // await the dataFeatcher function
  useEffect(() => {
    const fetchData = async () => {
      await dataFetcher().then((data) => {
        if (data) {
          setdigiestData(data);
        }
      })
    }
    fetchData();
  }, []);
  // console.log(digiestData);
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <DigestCard /> */}
        <DigestGrid />
      </header>
    </div>
  );
}

export default App;
