import { useState } from "react";
// import Modal from "./Modal";
export default function AddProductForm({ onProductAdded, onClose }) {


    const [title, setTitle] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");
    const [inStock, setInStock] = useState(false);
    const [error, setError] = useState("");





    async function handleAddProduct() {

        try {


            const newProduct = {
                title: title,
                brand: brand,
                price: Number(price),
                inStock: inStock,
            }


            const response = await fetch("http://localhost:3001/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProduct),

            })

            if (!response.ok) {
                throw new Error("Failed to add product");
            }

            const createProduct = await response.json();
            onProductAdded(createProduct);




        } catch (error) {
            console.log(error);
        }

    }

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
        handleAddProduct();
        onClose();
    }





    return (
        <div>
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
        </div>
    );


}