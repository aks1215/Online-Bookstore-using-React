const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const { MongoClient, ServerApiVersion , ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://username:password@nodeexpressproject.rxeeynq.mongodb.net/?retryWrites=true&w=majority&appName=NodeExpressProject";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const bookCollection = client.db("bookInventory").collection("books");

    app.post("/upload-books", async (req, res) => {
      const data = req.body;
      const results = await bookCollection.insertOne(data);
      res.send(results);
    });

app.get("/get-allbooks", async (req,res)=>{
const allBooks = bookCollection.find()
const results = await allBooks.toArray()
res.send(results)
})

app.get("/filter/:category", async (req,res)=>{
  const category =  req.params.category 
  const books = bookCollection.find({category:category})
  const result =await books.toArray()
  res.send(result)
})

app.patch("/update-books/:id", async (req,res)=>{
  const id = req.params.id 
  const data = req.body 
  const filter = { _id: new ObjectId(id)}

  updateData={
    $set:{
     ...data
    }
  }
const options = {upsert:true}
const result = await bookCollection.updateOne(filter,updateData,options)
res.send(result)

})

app.delete("/delete-book/:id",async (req,res)=>{

  const id = req.params.id 
  const result = bookCollection.deleteOne({_id:new ObjectId(id)})
  res.send(result)
})
app.get("/single-book/:id",async(req,res)=>{
  const id=req.params.id
  const book=await bookCollection.findOne({_id:new ObjectId(id)})
  res.send(book)
})




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
