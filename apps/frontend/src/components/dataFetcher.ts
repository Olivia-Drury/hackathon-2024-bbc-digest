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
export const dataFetcher: () => Promise<[]| undefined> = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })

    const json = await response.json()
    if (response.ok) {
      return json
    } else {
      throw new Error('Error fetching data')
    }
  } catch (error) {
    console.error(error)
    return
  }
}

// Another data caller for the individual list for each catergory
// The will then call the end point of collating catergory / digest id with the BE "`GET /news-articles/:id`"