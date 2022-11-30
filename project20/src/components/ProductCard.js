import "./ProductCard.css";
import formatCurrency from "format-currency";
import CartContext from "../components/context/cart/CartContext";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "€" };
  return (
    <div className="productCard__wrapper">
      <div>
        <img className="productCard__img" src={product.picture} alt="" />
        <h4>{product.name}</h4>
        <h5>{product.description}</h5>
        <hr />
        <div className="ProductCard__cost">
          <h5>{formatCurrency(`${product.cost}`, opts)}</h5>

          <button
            className="ProductCard__button"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
