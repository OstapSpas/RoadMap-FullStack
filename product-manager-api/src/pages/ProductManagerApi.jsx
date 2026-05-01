import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import AddProductForm from "../components/AddProductForm";



export default function ProductManagerApi() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);



  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("http://localhost:3001/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError("Something went wrong while loading products");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);


  async function handleDeleteProduct(id){
    const deleteConfrim = window.confirm(`You want delete this product ${id}`);


    if(!deleteConfrim){
        return;
    }

    try{
        const response = await fetch(`http://localhost:3001/products/${id}`, {
            method: "DELETE",
        })

        if(!response.ok){
            throw new Error("Failed fetch product delete");
            
        }


        setProducts((prevProducts) => 
            prevProducts.filter((product) => product.id !== id)
        );


    }catch(error){
        setError(`Something went wrong while delete products: ${id}`);
    }

  }

  function handleProductAdded(newProduct) {
    setProducts((prevProducts) => [...prevProducts,newProduct]);
    setIsModalOpen(false);
  }

  

  return (
    <div>
      <h1>Product Manager API</h1>

      {loading && <p>Loading products...</p>}

      {error && <p>Product error: {error}</p>}
        <button onClick={() => setIsModalOpen(true)}>Add Product</button>

        {isModalOpen && (
            <Modal onClose={() => setIsModalOpen(false)}>
                <AddProductForm onProductAdded={handleProductAdded} />
            </Modal>
        )}


      {products.length === 0  ? (
          <p>No found products! </p>
        ):(
            
           !loading && !error && products.map((product) => (
            <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.brand}</p>
            <p>{product.price}</p>
            <p>{product.inStock ? "Є в наявності" : "Немає в наявності"}</p>
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
        </div>
      ))
    )}

    </div>
  );
}