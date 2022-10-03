import { useState } from "react";
import "./styles.css";

var books = {
  Horrer: [
    {
      name: "The Turn of the Screw by Henry James",
      rating: "4/5",
      description:
        "A young woman is the governess for two disturbingly fearless and distinctly odd children, Miles and Flora, in a remote country home, Bly Manor, that seems bedeviled by mysterious doings and fiendish creatures."
    },
    {
      name: "The Haunting of Hill House by Shirley Jackson",
      rating: "4.5/5",
      description:
        "One of the most famous ghost stories in modern history by a master of the genre, Jackson's truly spooky tale spawned two feature films "
    },
    {
      name: "The Woman in Black by Susan Hill",
      rating: "5/5",
      description:
        "Another haunted house, this one in a small English town, features a rocking chair, a child's scream cutting through the fog and, of course, the mysterious Woman in Black"
    },
    {
      name: "Salem's Lot by Stephen King",
      rating: "3.5/5",
      description:
        "his terrifying tale is only the second novel by King, but it's as frightening as any of his great works. We meet writer Ben Mears, who returns to the small Maine town where he grew up to study the history of a particularly disturbing house, now owned by a Kurt Barlow "
    }
  ],
  Manga: [
    {
      name: "Haikyuu",
      rating: "5/5",
      description:
        "The story follows Shōyō Hinata, a boy determined to become a great volleyball player despite his small stature."
    },
    {
      name: "Kuroko's Basketball",
      rating: "3/5",
      description:
        "Kuroko's Basketball is a Japanese sports manga series written and illustrated by Tadatoshi Fujimaki. It was serialized in Weekly Shōnen Jump from December 2008 to September 2014, with the individual chapters collected into 30 tankōbon volumes by Shueisha."
    },
    {
      name: "Captain Tsubasa",
      rating: "3.5/5",
      description:
        "An 11-year-old boy who loves soccer is discovered by a former Brazilian star."
    }
  ],
  Romantic: [
    {
      name: "The Proposal by Jasmine Guillory",
      rating: "5/5",
      description:
        "You really can't go wrong with any of Jasmine Guillory's fun, romantic romps, but this sporty love story is especially great. Freelance writer Nik's boyfriend proposes at a Dodger's game, and the dude can't even spell her name right"
    },
    {
      name: "The Hating Game by Sally Thorne",
      rating: "4/5",
      description:
        "If you've ever carried a torch for a colleague (the scandal!) this novel will feel familiar. Coworkers Lucy Hutton and her sworn nemesis Joshua Templeman have a rivalry as bitter as they come, especially as they compete for the same promotion."
    },
    {
      name: "Vision In White by Nora Roberts",
      rating: "4.5/5",
      description:
        "The prolific Nora Roberts has penned more than 200 romance novels, but this one earned top marks from her fans as the first installment in The Bride Quartet. Wedding photographer Mackensie 'Mac' Elliot operates a wedding planning company with three friends"
    },
    {
      name: "The Kiss Quotient by Helen Hoang",
      rating: "4.5/5",
      description:
        "More nerdy storylines, please! In this novel from Helen Hoang, Stella Lane is the genius mathematician who puts herself in remedial romance. "
    }
  ]
};

var book = Object.keys(books);

export default function App() {
  var [display, setDisplay] = useState([]);
  function onClickHandler(item) {
    display = books[item];
    setDisplay(display);
  }
  return (
    <div className="App">
      <header>
        <h1>Book Recommender</h1>
      </header>
      <h2>Select a genre to get started</h2>
      <ul>
        {book.map((item) => {
          return (
            <button key={item} onClick={() => onClickHandler(item)}>
              {item}
            </button>
          );
        })}
      </ul>
      <div>
        {display.map((item) => {
          return (
            <li key={item}>
              <div>{item.name}</div>
              <div id="text">Rating - {item.rating}</div>
              <div id="description">Description - {item.description}</div>
            </li>
          );
        })}
      </div>
    </div>
  );
}
