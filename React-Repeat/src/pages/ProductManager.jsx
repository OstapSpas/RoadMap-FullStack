import { useEffect, useState } from "react";

import AddModalWindow from "../components/AddModalWindow";
import EditModalWindow from "../components/EditModalWindow";
import ProductCard from "../components/ProductCard";

const initialProducts = [
  {
    id: 1,
    title: "MacBook",
    brand: "Apple",
    price: 1200,
    inStock: true,
  },
  {
    id: 2,
    title: "iPhone",
    brand: "Apple",
    price: 900,
    inStock: false,
  },
  {
    id: 3,
    title: "Laptop",
    brand: "Acer",
    price: 2200,
    inStock: true,
  },
];

export default function ProductManager() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");

    if (savedProducts) {
      return JSON.parse(savedProducts);
    }
    return initialProducts;
  });

  const [search, setSearch] = useState("");
  const [stockFilter, setStockFilter] = useState("all");

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const filteredProducts = products.filter((product) => {
    const titleSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const brandSearch = product.brand
      .toLowerCase()
      .includes(search.toLowerCase());

    const searchMatch = titleSearch || brandSearch;

    const stockMatch =
      stockFilter === "all" ||
      (stockFilter === "in-stock" && product.inStock === true) ||
      (stockFilter === "out-of-stock" && product.inStock === false);
     

    return searchMatch && stockMatch;


    
  });


  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low-high") {
      return a.price - b.price;
    }

    if (sortBy === "price-high-low") {
      return b.price - a.price;
    }

    if (sortBy === "title-a-z") {
      return a.title.localeCompare(b.title);
    }

    if (sortBy === "title-z-a") {
      return b.title.localeCompare(a.title);
    }

    return 0;
  });

  function handleAddProduct(newProduct) {
    const productWithId = {
      id: Date.now(),
      ...newProduct,
    };

    setProducts([...products, productWithId]);
  }

  function handleDeleteProduct(id) {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this product ?",
    );

    if (!isConfirmed) {
      return;
    }

    const updateProducts = products.filter((product) => {
      return product.id !== id;
    });

    setProducts(updateProducts);
  }

  function handleToggleStock(id) {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          inStock: !product.inStock,
        };
      }

      return product;
    });

    setProducts(updatedProducts);
  }

  function handlePrice(id) {
    const editPrice = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          price: product.price * 0.9,
        };
      }
      return product;
    });

    setProducts(editPrice);
  }

  function handleEditProduct(updatedProduct) {
    const updatedProducts = products.map((product) => {
      if (product.id === updatedProduct.id) {
        return updatedProduct;
      }

      return product;
    });

    setProducts(updatedProducts);
  }
  function openEditModal(product) {
    console.log("Editing product: ", product);

    setEditingProduct(product);
    setIsEditModalOpen(true);
  }

  function closeEditModal() {
    setIsEditModalOpen(false);
    setEditingProduct(null);
  }

  function handleResetProduct() {
    const isConfirmed = window.confirm(
      "Are you sure you want to reset all products ?",
    );

    if (!isConfirmed) {
      return;
    }

    setProducts(initialProducts);
    setIsEditModalOpen(false);
    setEditingProduct(null);
  }

  return (
    <div>
      <h1>Product Manager</h1>

      <button onClick={() => setIsAddModalOpen(true)}>Add Product</button>
      <button onClick={handleResetProduct}>Reset products</button>

      {isAddModalOpen && (
        <AddModalWindow
          onAddProduct={handleAddProduct}
          onClose={() => setIsAddModalOpen(false)}
        />
      )}

      <br />

      <input
        type="text"
        value={search}
        placeholder="Search"
        onChange={(event) => setSearch(event.target.value)}
      />
      <br />

      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="default">Default</option>
        <option value="price-low-high">Price: low to high</option>
        <option value="price-high-low">Price: high to low</option>
        <option value="title-a-z">Title: A to Z</option>
        <option value="title-z-a">Title: Z to A</option>
      </select>

      <br />

      <select
        value={stockFilter}
        onChange={(e) => setStockFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="in-stock">In Stock</option>
        <option value="out-of-stock">Out of stock</option>
      </select>

      <p>Found products: {sortedProducts.length}</p>

      {sortedProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={handleDeleteProduct}
            onDiscount={handlePrice}
            onEdit={openEditModal}
            onToggleStock={handleToggleStock}
          />
        ))
      )}
      {isEditModalOpen && <p>Modal should be open now</p>}

      {isEditModalOpen && editingProduct && (
        <EditModalWindow
          product={editingProduct}
          onEditProduct={handleEditProduct}
          onClose={closeEditModal}
        />
      )}
    </div>
  );
}
