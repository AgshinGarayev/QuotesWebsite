import React from 'react';
import './QuoteCard.css'; // You can create a CSS file for styling the card

function QuoteCard({ author, quote }) {
  return (
    <div className="quote-card">
      <h3>{author}</h3>
      <p>{quote}</p>
    </div>
  );
}

export default QuoteCard;
