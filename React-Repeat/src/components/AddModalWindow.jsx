import { useState } from "react";
import Modal from "./Modal";

export default function AddModalWindow({ onAddProduct, onClose }) {
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState(true);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim() === "") {
      setError("Product title is required");
      return;
    }

    if (brand.trim() === "") {
      setError("Brand is required");
      return;
    }

    if (price === "" || Number(price) <= 0) {
      setError("Price must be greater than 0");
      return;
    }

    const newProduct = {
      title: title,
      brand: brand,
      price: Number(price),
      inStock: inStock,
    };

    onAddProduct(newProduct);

    setTitle("");
    setBrand("");
    setPrice("");
    setInStock(true);
    setError("");

    onClose();
  }

  return (
    <Modal onClose={onClose}>
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name Product"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Name Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label>
          <input
            type="checkbox"
            checked={inStock}
            onChange={(e) => setInStock(e.target.checked)}
          />
          In stock
        </label>

        {error && <p>{error}</p>}

        <button type="submit">Add Product</button>
      </form>
    </Modal>
  );
}