import React,{useState} from 'react'

export const Upload = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Sci-Fi",
    "Horror",
    "Comedy",
    "Comics",
    "Mystery",
  ];
  const [selectedCategory,setSelectedCategory] = useState(bookCategories[0])

const handleChange = (event)=>{
setSelectedCategory(event.target.value)
}

  const handleSubmit = (event)=>{
    event.preventDefault()
    const form = event.target 
    const bookTitle = form.elements.bookTitle.value
    const authorName = form.elements.authorName.value 
    const bookDescription = form.elements.bookDescription.value 
    const imageUrl = form.elements.imageUrl.value 
    const pdfUrl = form.elements.pdfUrl.value 
    const category = selectedCategory

    const bookObj = {
      bookTitle,
      authorName,
      bookDescription,
      imageUrl,
      pdfUrl,
      category
    }
    fetch("http://localhost:5000/upload-books",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(bookObj)
    }).then((res)=>res.json())
    .then((data)=>{
      alert("Book Uploaded Successfully")     
    })

    console.log("Button works")
  }
  return (
    <div>
    <h2>Upload Book</h2>
    <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="bookTitle">Book Title</label>
          <input type="text" id="bookTitle" className="form-control" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="authorName">Author Name</label>
          <input type="text" id="authorName" className="form-control" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="imageUrl">Image URL</label>
          <input type="text" id="imageUrl" className="form-control" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="pdfUrl">PDF URL</label>
          <input type="text" id="pdfUrl" className="form-control" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="bookDescription">Book Description</label>
          <input type="text" id="bookDescription" className="form-control" />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="inputState">Book Category</label>
          <select onChange={handleChange}  value={selectedCategory}
          className="form-control" id="inputState">
            {bookCategories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <button type="submit">Upload Book</button>
        </div>
      </form>
    </div>
  );
};
