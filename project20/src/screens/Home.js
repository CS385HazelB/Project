import products from "../data";
import "./home.css";
import ProductCard from "../components/ProductCard";

const HomeScreen = () => {
  return (
    <div className="products__wrapper">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomeScreen;
