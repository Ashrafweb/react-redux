import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {Link } from "react-router-dom";
import "./Products.css";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);

  const renderlist = products.map((product,index) => {
    const { id, title, image, category, price } = product;
    return (
      <div className="four wide column" key={index}>
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
