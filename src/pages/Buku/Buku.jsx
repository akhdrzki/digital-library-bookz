import React from 'react'
import { useState, useEffect } from 'react';
import restUrl from '../utils/axiosBase.js';
import axios from 'axios';


const Buku = () => {
  
  const[book, setBook] = useState([])
  
  const fetchBuku = async() => {
    try {
      const res = await axios.get(`${restUrl}/buku`)
      setBook(res.data)
    } catch (error) {
      console.log(error)
    }
  } 

  useEffect(() => {
    fetchBuku()
  }, [])

  return (
    <div className="books">
      {book.map((book) => {
        <div className="book">
          {book.gambar && <img src={book.gambar} alt="" />}
        </div>
      })}
    </div>
  )
}

export default Buku
