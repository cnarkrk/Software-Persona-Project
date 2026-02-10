import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export default function BookInput({addBook}){
const [author,setAuthor] = useState('');
const [book,setBook] = useState('');
const [category,setCategory] = useState('');
const [date,setDate] = useState('');

const BASE_URL = "http://localhost:3001";

async function submitAll(){
try {
    const newBook = {
        id: Date.now(),
        author: author,
        title: book,
        category: category,
        publishYear: date,
        available: true
    }

    
    try {
        const response = await axios.post(BASE_URL + "/books", newBook);
        console.log(response.data);
    } catch (serverError) {
        console.warn("Backend bağlantısı başarısız, local storage'a kaydediliyor:", serverError.message);
    }
    
    
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    storedBooks.push(newBook);
    localStorage.setItem('books', JSON.stringify(storedBooks));
    
    addBook(newBook);
    
    setAuthor('');
    setBook('');
    setCategory('');
    setDate('');
} catch (error) {
    console.error("Error submitting book:", error);
    alert('Hata oluştu: ' + error.message);
}
};

    return (
        <>
   <div
  className="container d-flex flex-column justify-content-center bg-light mt-3 mb-3 rounded-5 p-4"
  style={{ minHeight: "50vh" }}
>
  <p className="text-center mb-4 fs-5 fw-semibold text-primary" style={{ maxWidth: "700px", margin: "0 auto" }}>
    Hoş geldiniz! Bu form aracılığıyla kitap ve yazar adı girerek ekleme yapabilir ve silme işlemlerini gerçekleştirebilirsiniz.
  </p>

  <div className="mb-3 col-md-6 col-lg-5 mx-auto">
    <label htmlFor="author" className="form-label">Yazar Adı:</label>
    <input type="text" id="author" className="form-control" onChange={(e)=>{setAuthor(e.target.value)}} value = {author} />
  </div>

  <div className="mb-3 col-md-6 col-lg-5 mx-auto">
    <label htmlFor="title" className="form-label">Kitap Adı:</label>
    <input type="text" id="title" className="form-control" onChange={(e)=>{setBook(e.target.value)}} value={book} />
  </div>

  <div className="mb-3 col-md-6 col-lg-5 mx-auto">
    <label htmlFor="category" className="form-label">Kategori:</label>
    <input type="text" id="category" className="form-control" onChange={(e)=>{setCategory(e.target.value)}} value={category}  />
  </div>

  <div className="mb-3 col-md-6 col-lg-5 mx-auto">
    <label htmlFor="date" className="form-label">Tarih:</label>
    <input type="text" id="date" className="form-control" onChange={(e)=>{setDate(e.target.value)}}  value={date} />
  </div>

  <div className="text-center mt-3">
    <button className="btn btn-primary rounded-0 me-2" onClick = {submitAll}>Kaydet</button>
    <button className="btn btn-secondary rounded-0">İptal</button>
  </div>
</div>

    </>
    )
}