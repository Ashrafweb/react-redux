import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import "./Products.css";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);

  const renderlist = products.map((product) => {
    const { id, title, image, category, price } = product;
    return (
      <div className="four wide column">
        <Link to={`product/${id}`} className="ui link cards">
          <div className="card">
            <div className="images">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">${price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderlist}</>;
}

export default ProductComponent;
