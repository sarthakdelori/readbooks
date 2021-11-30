import { useState } from "react";
import "./styles.css";

const booksDict = {
  Javascript: [
    {
      name: "Eloquent JavaScript",
      author: "Marijn Haverbeke"
    },
    {
      name: "You don't know JS",
      author: "Kyle Simpson"
    }
  ],
  Selfhelp: [
    {
      name: "Ignited Minds",
      author: "Dr. A.P.J Abdul Kalam"
    },
    {
      name: "Deep Work",
      author: "Cal Newport"
    },
    {
      name: "The subtle art of not giving a f*ck",
      author: "Mark Manson"
    }
  ],
  Finance: [
    {
      name: "Pyschology of Money",
      author: "Morgan Housel"
    },
    {
      name: "Rich Dad Poor Dad",
      author: "--"
    }
  ]
};

var bookPedia = Object.keys(booksDict);

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("Javascript");

  function genreClickHandler(genre) {
    setSelectedGenre(genre);
  }

  return (
    <div className="App">
      <h1>ReadBooks</h1>
      <h2>Find your next read here!!</h2>
      <div>
        {bookPedia.map((genre) => {
          return (
            <button
              onClick={() => genreClickHandler(genre)}
              key={genre}
              style={{
                cursor: "pointer",
                display: "inline",
                margin: "2rem",
                padding: "0.5rem"
              }}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <div>
        <ul>
          {booksDict[selectedGenre].map((book) => (
            <li>
              {book.name} {" - "}
              {book.author}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
