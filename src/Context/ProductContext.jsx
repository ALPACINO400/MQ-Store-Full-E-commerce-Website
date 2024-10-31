import { createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchingData = async () => {
    try {
      setIsLoading(true);
      const data = await getAllProducts();
      setProducts(data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

   return (
     <ProductContext.Provider value={{ products, isLoading, error }}>
       {children}
     </ProductContext.Provider>
   );

};
