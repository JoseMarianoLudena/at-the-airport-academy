import React from 'react';
import './BookAds.css';
import book1 from '../../assets/images/book1.jpg';
import book2 from '../../assets/images/book2.jpg';


const BookAds = () => {
  const books = [
    {
      id: 1,
      title: "English for Aviation",
      description: "Domina el inglés aeronáutico profesional",
      image: book1, // ✅ AGREGAR IMÁGENES
      amazonUrl: "https://www.amazon.es/dp/B0F8VX85NN",
      price: "€28.00"
    },
    {
      id: 2,
      title: "Aviation Communication",
      description: "Comunicación efectiva en aviación",
      image: book2, // ✅ AGREGAR IMÁGENES
      amazonUrl: "https://www.amazon.es/dp/B0F7LNR759",
      price: "€9.36"
    }
  ];

  return (
    <div className="book-ads-container">
      {books.map(book => (
        <div key={book.id} className="book-ad">
          <div className="book-image">
            <img src={book.image} alt={book.title} />
          </div>
          <div className="book-info">
            <h5>{book.title}</h5>
            <p>{book.description}</p>
            <span className="book-price">{book.price}</span>
            <button 
              onClick={() => window.open(book.amazonUrl, '_blank')}
              className="buy-btn"
            >
              Ver en Amazon
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookAds;