import { useEffect, useState } from 'react'
import axios from "axios"
import Header from './components/header.jsx'
import BookInput from './components/BookInput.jsx'
import BookTable from './components/BookTable.jsx'
import './App.css'




function App() {
  const [books, setBooks] = useState([]);
  const BASE_URL = "http://localhost:3001";

  useEffect(()=>{

    const getAllData = async ()=>{
      try{
      const response = await axios.get(BASE_URL+'/books');
      setBooks(response.data);
      localStorage.setItem('books', JSON.stringify(response.data));
    }
      catch(error){
        console.error("Veri çekilemedi:", error);
        const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
        setBooks(storedBooks);
      };
    }

    getAllData();
  },[])

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };
    

  return (
    <>
     <Header />
     <BookInput addBook={addBook} />
     <BookTable books={books} setBooks={setBooks} />

    </>
  )
}

export default App
