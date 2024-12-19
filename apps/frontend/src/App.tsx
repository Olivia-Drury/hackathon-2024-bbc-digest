import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DigestContent from "./components/DigestContent";
import { DigestGrid } from "./components/DigestGrid";
import { useFetchDigestData } from "./hooks/useFetchDigestData";
import Layout from "./Layout";
import { HomeFeed, NavigationDigest } from "./models/types";
import Settings from "./Settings";

// lifted this out to fix the issue for useNavigate call before react router being intialised
const Home = ({ digestData }: { digestData: HomeFeed[] }) => {
  const [homeFeedData, setHomeFeedData] = useState<HomeFeed[]>(digestData);

  useEffect(() => {
    if (digestData) {
      setHomeFeedData(digestData);
    }
  }, [digestData]);

  const getDigestData = (eventValue: NavigationDigest) => {
    if (eventValue === NavigationDigest.shuffle) {
      const randomDigest = Math.floor(Math.random() * digestData.length);
      setHomeFeedData([digestData[randomDigest]]);
    }

    if (eventValue === NavigationDigest.home) {
      setHomeFeedData(digestData);
    }
  };

  return (
    <Layout getDigestData={getDigestData}>
      <DigestGrid data={homeFeedData} />
    </Layout>
  );
};

const App = () => {
  const { digestData } = useFetchDigestData();
  const [homeFeedData, setHomeFeedData] = useState<HomeFeed[]>([]);

  useEffect(() => {
    if (digestData) {
      setHomeFeedData(digestData);
    }
  }, [digestData]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home digestData={homeFeedData} />} />
        <Route
          path="/:category/:id"
          element={
            <Layout>
              <DigestContent />
            </Layout>
          }
        />
        <Route
          path="/settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
