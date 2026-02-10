import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function BookTable({books, setBooks}){


const BASE_URL = "http://localhost:3001";

const deleteRow = async (id) => {
    const confirmed = window.confirm("Bu kitabı silmek istediğinizden emin misiniz?");
    if (!confirmed) return;
    
    try {
      // Backend'e silme isteği göndermeyi dene
      try {
        await axios.delete(`${BASE_URL}/books/${id}`);
      } catch (serverError) {
        console.warn("Backend bağlantısı başarısız, local storage'dan siliniyor:", serverError.message);
      }
      
      // LocalStorage'dan sil
      const updatedBooks = books.filter(book => book.id !== id);
      localStorage.setItem('books', JSON.stringify(updatedBooks));
      setBooks(updatedBooks);
    } catch (error) {
      console.error("Silme işlemi başarısız:", error);
    }
  };

    return(<>
     <table className="table table-bordered table-hover text-center align-middle shadow mt-4">
        <thead className="table-primary">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Kitap Adı</th>
            <th scope="col">Yazar</th>
            <th scope="col">Kategori</th>
            <th scope="col">Tarih</th>
          </tr>
        </thead>
        <tbody>
         {books.map((book, index) => (
            <tr key={book.id}>
              <th scope="row">{index + 1}</th>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.category}</td>
              <td>{book.publishYear}</td>
              <td>
                <button className="btn btn-danger btn-sm"  onClick={() => deleteRow(book.id)}>Sil</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    

    
    
    </>)
}
