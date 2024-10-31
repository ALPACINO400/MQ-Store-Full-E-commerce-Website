import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../services/productService";

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await getAllProducts();
      setProducts(data.data);
      console.log(data.message);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

   return <ProductContext.Provider value={{ products, isLoading, error }}>
       {children}
     </ProductContext.Provider>
}