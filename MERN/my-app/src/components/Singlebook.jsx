import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import './Singlebook.css';

export default function Singlebook(){
  const {id}=useParams()
  const [book,setBook]=useState(null)
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    fetch(`http://localhost:5000/single-book/${id}`)
    .then(response=>response.json()).then((data)=>{
      setBook(data)
      console.log(data)
      setLoading(false)
    })
  },[id])
  if(loading){
    return <div>...loading</div>
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
      <img className="new" src={book.imageUrl}></img></div>
      <div className='col-md-6'>
    
    <div class="card shadow p-3 mb-5 bg-white rounded">
  <div class="card-body n">
  <h5>{book.bookTitle}</h5>
  Description:{book.bookDescription}
  </div>
</div>
   
      </div>
      </div>
    </div>
  )
}

