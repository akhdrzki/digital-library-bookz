import { useState, useEffect } from 'react';
import axios from 'axios';

const Card = () => {
  
  useEffect(() => {
    fetchBuku();
  }, []);

  const createBuku = async() => {
    const response = await axios.post('http://localhost:8000/buku')
    console.log(response.data)
  }

  return (
    <div></div> 
  )
}

export default Card;
