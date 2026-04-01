import React, { useState } from "react";

const Product = ({ product, carts, setCarts}) => {

    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscription = () => {
        setIsSubscribed(true);
        setCarts([...carts, product]);
    }

  return (
    <div className="card w-96 shadow-sm">
      <div className="card-body">
        <div className="flex justify-between mb-4">
          <img src={product.icon} className="w-6" alt="" />
          <span className="badge badge-xs badge-warning">{product.tag}</span>
        </div>
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="mb-2">{product.description}</p>
        <span className="text-xl">
          <span className="text-2xl font-bold">${product.price}</span>/
          {product.period}
        </span>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          {product.features.map((feature, index) => (
            <li key={index} className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <button onClick={handleSubscription} className="btn btn-primary btn-block rounded-full">
            {isSubscribed ? 'Added to cart' : 'Buy Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
