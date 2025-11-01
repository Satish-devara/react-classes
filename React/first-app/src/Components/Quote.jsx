import React, { useState } from 'react'

const Quote = () => {

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const quotes = [
  {
    author: "Socrates",
    quote: "The only true wisdom is in knowing you know nothing."
  },
  {
    author: "Chinese Proverb",
    quote: "The best time to plant a tree was 20 years ago. The second best time is now."
  },
  {
    author: "Ralph Waldo Emerson",
    quote: "Our greatest glory is not in never failing, but in rising up every time we fail."
  },
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken."
  },
  {
    author: "John Lennon",
    quote: "Life is what happens when you’re busy making other plans."
  },
  {
    author: "Thomas A. Edison",
    quote: "I have not failed. I've just found 10,000 ways that won't work."
  },
  {
    author: "Mahatma Gandhi",
    quote: "Where there is love there is life."
  },
  {
    author: "Lao Tzu",
    quote: "The journey of a thousand miles begins with a single step."
  },
  {
    author: "Oprah Winfrey",
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."
  },
  {
    author: "Abraham Lincoln",
    quote: "In the end, it's not the years in your life that count. It's the life in your years."
  }
];


    function showQuote(){
        let number = Math.floor((Math.random() * 10))
        setQuote(quotes[number].quote);
        setAuthor(quotes[number].author)
    }
        
    
  return (
    <div>
        <button className="bg-blue-500 rounded-2xl w-25 h-10 mb-2" onClick={showQuote}>
            show quote
        </button>
        <p className='font-bold font-serif text-2xl mt-1 mb-2'>{`${quote}`}</p>
        <p className='font-bold font-serif text-2xl'> {author}</p>
    </div>
  )
}

export default Quote