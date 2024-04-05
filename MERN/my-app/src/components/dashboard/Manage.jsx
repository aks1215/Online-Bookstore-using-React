import React,{useEffect,useState} from 'react'

export const Manage = () => {
  const [books,setBook]=useState([])
  useEffect(()=>{
    fetch("http://localhost:5000/get-allbooks")
    .then(response=>response.json()).then((data)=>{
      setBook(data)
      console.log(data)
    })
  },[])

  const handleDelete=(id)=>{
    fetch(`http://localhost:5000/delete-book/${id}`,{
      method:"DELETE"
    }).then(response=>response.json())
    .then((data)=>{
      setBook(books.filter(book=>book._id!=id))
    })
  }
  return (
  <div>
    <h2 className='font-bold'>Manage Books</h2>
    <table className='table table-striped'>
      <thead>
      <tr>
        <th>Sr No</th>
        <th>Book Name</th>
        <th>Author Name</th>
        <th>Category</th>
        <th>manage</th>
      </tr>
      </thead>
      <tbody>
    {
      books.map((book,index)=>(
      <tr key={book._id}>
        <td>{index+1}</td>
        <td>{book.bookTitle}</td>
        <td>{book.category}</td>
        <td>{book.authorName}</td>
        <td><button onClick={()=>handleDelete(book._id)} className='btn btn-danger'>Delete</button></td>
      </tr>
      ))
    }

      </tbody>
    </table>
  </div>
  )
}
