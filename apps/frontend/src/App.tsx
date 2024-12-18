import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { HomeFeed, NavigationDigest } from "./models/types";
import { useFetchDigestData } from "./hooks/useFetchDigestData";
import { DigestGrid } from "./components/DigestGrid";
import DigestContent from "./components/DigestContent";
import Settings from "./Settings";

const App = () => {
  const { digestData } = useFetchDigestData();
  const [homeFeedData, setHomeFeedData] = useState<HomeFeed[]>([]);

  useEffect(() => {
    if (digestData) {
      setHomeFeedData(digestData);
    }
  }, [digestData]);

  const getDigestData = (eventValue: NavigationDigest) => {
    if (eventValue === NavigationDigest.favourites) {
      setHomeFeedData(digestData.filter((item) => item.favourite));
    }

    if (eventValue === NavigationDigest.shuffle) {
      const randomDigest = Math.floor(Math.random() * digestData.length);
      setHomeFeedData([digestData[randomDigest]]);
    }

    if (eventValue === NavigationDigest.home) {
      setHomeFeedData(digestData);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout getDigestData={getDigestData}>
              <DigestGrid data={homeFeedData} />
            </Layout>
          }
        />
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
