import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm ="") => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=d46509aadd23f83b1e08cc852696aa2a&query=${queryTerm}`

    useEffect(() => {
        async function fetchMovies(){
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
      }, [url])

  return { data }
}

// import { useState, useEffect } from "react";

// export const useFetch = (apiPath) => {
//     const [data, setData] = useState([]);
//     const url = `https://api.themoviedb.org/3/${apiPath}?api_key=d46509aadd23f83b1e08cc852696aa2a`

//     useEffect(() => {
//         async function fetchMovies(){
//           const response = await fetch(url);
//           const json = await response.json();
//           setData(json.results);
//         }
//         fetchMovies();
//       }, [url])

//   return { data }
// }