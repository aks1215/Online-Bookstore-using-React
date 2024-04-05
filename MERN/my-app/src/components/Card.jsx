import React, { useEffect, useState } from "react";
import './Card.css'
import { Link } from "react-router-dom";

export default function Card() {
  const [books, setBooks] = useState([]);
  const [search,setSearch] = useState("")
  useEffect(() => {
    fetch("http://localhost:5000/get-allbooks")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        console.log(data);
      });
  }, []);
  const handleSearch = (e)=>{
    setSearch(e.target.value)
    }
    const filterBooks = books.filter(book=>
      book.bookTitle.toLowerCase().includes(search.toLowerCase())
      )
  return (
    <>
    <div className="col-md-6">
      <input onChange={handleSearch} className="form-control" placeholder="Search"></input>
    </div>
    <h1 align="center">Have a look at our Book collection</h1>
    <div className="row">
      {filterBooks.map((book, index) => (
        <div className="col-md-4">
          <div className="card">
            <img src={book.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{book.bookTitle}</h5>
              <p className="card-text text-truncate">{book.bookDescription}</p>
              <Link to={`/singlebook/${book._id}`}>
                <button className="btn btn-red">Show Details</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
  );
};