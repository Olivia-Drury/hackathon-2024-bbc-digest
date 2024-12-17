import { useEffect, useState } from "react";
import { HomeFeed } from "../models/types";

// This will be the for the whole list of favourites
export const useFetchDigestData = () => {
  const [digestData, setDigestData] = useState<HomeFeed[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/home-feed", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        console.log("DATA: ", data);
        if (data) {
          setDigestData(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
      }
    };

    fetchData();
  }, []);

  return { digestData };
};

// Another data caller for the individual list for each catergory
// The will then call the end point of collating catergory / digest id with the BE "`GET /news-articles/:id`"
