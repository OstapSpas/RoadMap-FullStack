import { useState } from "react";
import Modal from "./Modal";


export default function EditModalWindow({ product, onEditProduct, onClose }) {
    const [title, setTitle] = useState(product.title);
    const [brand, setBrand] = useState(product.brand);
    const [price, setPrice] = useState(product.price);
    const [inStock, setInStock] = useState(product.inStock);
    const [error, setError] = useState("");

    function handleEdit(e) {
        e.preventDefault();

        if (title.trim() === "") {
            setError("Title is required");
            return;
        }

        if (brand.trim() === "") {
            setError("Brand is required");
            return;
        }

        if (price.trim() === "" || Number(price) <= 0) {
            setError("Price must be > 0");
            return;
        }

        const updateProduct = {
            ...product,
            title: title.trim(),
            brand: brand.trim(),
            price: Number(price),
            inStock: inStock,
        };



        onEditProduct(updateProduct);
        onClose();


    }


    return (

        <Modal onClose={onClose}>

            <h2>Edit Product</h2>
            <form onClose={handleEdit}>
                <input 
                type="text" 
                placeholder="Edit Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />

                <input 
                type="text" 
                placeholder="Edit Brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                
                />


                <input 
                type="number" 
                placeholder="Edit Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                />

                <label>
                    <input 
                    type="checkbox" 
                    checked= {inStock}
                    onChange={(e) => setInStock(e.target.checked)}
                    />
                    In Stock
                </label>


                {error && <p>{error}</p>}


                <button type="submit">Save changes</button>
            </form>
        </Modal>
    );


}
