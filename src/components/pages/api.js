// import React, { useState } from "react";
// import axios from "axios";
// import { BASE_URL, headers } from "../../services/constant";

// const BoardGameSearch = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [games, setGames] = useState([]);

//   const handleSearch = () => {
//     axios
//       .get(`https://www.api.boardgameatlas.com/api/search?q=${searchTerm}`, {
//         headers: {
//           Authorization: `Bearer ${process.env.SECRET_KEY}`,
//         },
//       })
//       .then((response) => {
//         setGames(response.data.games);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search for a game..."
//         onChange={(event) => setSearchTerm(event.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//       <ul>
//         {games.map((game) => (
//           <li key={game.id}>{game.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BoardGameSearch;

/* export const GetAllCategories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [games, setGames] = useState([]);

  const handleSearch = () => {
    axios
      .get(`https://api.boardgameatlas.com/api/search?q=${searchTerm}`, {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      })
      .then((response) => {
        setGames(response.data.games);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a game..."
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
}; */

import React, { useState } from "react";
import axios from "axios";
import { BASE_URL, headers } from "../../services/constant";

const BoardGameSearch = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`${BASE_URL}?query=${query}`, {
        headers,
      });
      setSearchResults(response.data);
    } catch (error) {
      console.log("Error occurred while making the request.", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search board games"
        onChange={(e) => handleSearch(e.target.value)}
      />
      {searchResults.map((result) => (
        <div key={result.id}>
          <h3>{result.title}</h3>
          <p>{result.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BoardGameSearch;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { BASE_URL, headers } from "../../services/constant";

// require("dotenv").config();

// const BoardGameSearch = () => {
//   const [searchResults, setSearchResults] = useState([]);
//   const [query, setQuery] = useState("");

//   useEffect(() => {
//     const fetchSearchResults = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}/search?query=${query}`, {
//           headers,
//         });
//         setSearchResults(response.data);
//       } catch (error) {
//         console.log("Error occurred while making the request.", error);
//       }
//     };

//     fetchSearchResults();
//   }, [query]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search board games"
//         onChange={(e) => {
//           setQuery(e.target.value);
//           setSearchResults([]);
//         }}
//       />
//       {searchResults.map((result) => (
//         <div key={result.id}>
//           <h3>{result.title}</h3>
//           <p>{result.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BoardGameSearch;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { BASE_URL } from "../../services/constant";

// const BoardGameSearch = () => {
//   const [searchResults, setSearchResults] = useState([]);
//   const [query, setQuery] = useState("");

//   useEffect(() => {
//     const fetchSearchResults = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}/search?query=${query}`, ${
//           // headers: {
//           //   "Content-Type": "application/json",
//           //   Authorization: `Bearer ${process.env.SECRET_KEY}`,
//           // },
//         });
//         setSearchResults(response.data);
//       } catch (error) {
//         console.log("Error occurred while making the request.", error);
//       }
//     };

//     fetchSearchResults();
//   }, [query]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search board games"
//         onChange={(e) => {
//           setQuery(e.target.value);
//           setSearchResults([]);
//         }}
//       />
//       {searchResults.map((result) => (
//         <div key={result.id}>
//           <h3>{result.title}</h3>
//           <p>{result.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BoardGameSearch;
