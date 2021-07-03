import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  RemoveselectedProduct,
  fetchProduct,
} from "../redux/actions/productActions";

function ProductDetail() {
  const { productId } = useParams();
  console.log(productId);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    if (productId && productId !== "") {
      dispatch(fetchProduct(productId));
      return () => {
        dispatch(RemoveselectedProduct());
      };
    }
  }, [productId]);

  const { title, image, category, price, description } = product;

  return (
    <>
      <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div classname="card">Loading...</div>
        ) : (
          <div class="ui placeholder segment">
            <div class="ui two column stackable center aligned grid">
              <div class="ui vertical divider">AND</div>
              <div class="middle aligned row">
                <div class="column lp">
                  <img class="ui fluid image" src={image} alt={title} />
                </div>
                <div class="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a class="ui teal tag label">{price}</a>
                  </h2>
                  <h3 class="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  <div class="ui vertical animated button" tabindex="0">
                    <div class="hidden content">
                      <i class="shop icon"></i>
                    </div>
                    <div class="visible content">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductDetail;
