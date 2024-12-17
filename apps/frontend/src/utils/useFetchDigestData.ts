import { useEffect, useState } from "react";

// types interface for each catergory
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

// This will be the for the whole list of favourites
export const useFetchDigestData = () => {
  const [digestData, setDigestData] = useState<DigestDataModel[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
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
