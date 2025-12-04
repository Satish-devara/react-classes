import React from 'react'

const ProductsComparison = ({items}) => {
    const minPrice = Math.min(...items.map(x => x.price));
  const maxRating = Math.max(...items.map(x => x.rating));
  return (
   <div className="grid md:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          className={`p-5 rounded-xl shadow-lg bg-white dark:bg-gray-800
          border-2 ${
            item.price === minPrice
              ? "border-green-500"
              : "border-gray-300 dark:border-gray-700"
          }`}
        >
          <h2 className="text-xl font-semibold mb-2 text-white">{item.name}</h2>
          <p
            className={`text-lg font-medium ${
              item.price === minPrice ? "text-green-500" : "text-gray-300"
            }`}
          >
            ₹{item.price}
          </p>
          <p
            className={`mt-1 ${
              item.rating === maxRating ? "text-yellow-500 font-semibold" : "text-yellow-100"
            }`}
          >
            Rating: {item.rating}
          </p>
          <p
            className={`mt-1 font-medium ${
              item.stock ? "text-green-600" : "text-red-500"
            }`}
          >
            {item.stock ? "In Stock" : "Out of Stock"}
          </p>
        </div>
      ))}
    </div>
  )
}

export default ProductsComparison