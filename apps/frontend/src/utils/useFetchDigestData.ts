import { useEffect, useState } from "react";
import { HomeFeed, soundsData, iPlayerData, newsData } from "../models/types";

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
        console.log("FULL DATA: ", data);
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

// Api call to get Sounds Series
export const useFetchCatergoryData = () => {
  const [catergoryData, setCatergoryData] = useState<soundsData[] | iPlayerData[] | newsData[] >([]);
  const fetchCatergoryData = async (category: string, id: string) => {
    try {


      const response = await fetch(`http://localhost:4000/${category}/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data) {
        setCatergoryData(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
    }
  };
  return { fetchCatergoryData, catergoryData };
};

