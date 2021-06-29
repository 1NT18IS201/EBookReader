import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const BookCard = (props) => {
  const book = props.book;

  return (
    <div className="card-container">
      <img src={book.cover} width="250" height="400" />
      <div className="desc">
        <h2>
          <Link
            style={{ textDecoration: "none", color: "#5bc0de" }}
            to={`/show-book/${book._id}`}
          >
            {book.title}
          </Link>
        </h2>
        <h3>{book.author}</h3>
      </div>
    </div>
  );
};

export default BookCard;
