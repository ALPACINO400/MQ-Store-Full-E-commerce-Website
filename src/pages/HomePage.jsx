import { useContext } from "react";

import Products from "../components/products/Products";
import SearchInput from "../components/SearchInput";
import PaginationComponent from "../components/PaginationComponent";
import SortProduct from "../components/SortProduct";
import { ProductContext } from "../Context/ProductContext";

export default function HomePage() {
  const { isLoading, error } = useContext(ProductContext);

  if (isLoading) {
    return <p>Loading products....</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <div className="homepage-container">
        <div className="homepage-grid">
          <div className="search-input-container">
            <SearchInput />
          </div>

          <div className="sort-product-container">
            <SortProduct />
          </div>
        </div>
        <h1 className="homepage-title">List of products</h1>

        <div className="products-container">
          <Products />
        </div>

        <div className="pagination-container">
          <PaginationComponent />
        </div>
      </div>
    </div>
  );
}
