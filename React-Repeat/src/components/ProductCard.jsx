export default function ProductCard({
    product,
    onDelete, 
    onToggleStock,
    onDiscount, 
    onEdit,


}) {
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Brand: {product.brand}</p>
            <p>Price: {product.price}</p>
            <p>{product.inStock ? "Є в наявності" : "Немає в наявності"}</p>
            
            <button onClick={() => onDelete(product.id)}>Delete</button>
            <button onClick={() => onToggleStock(product.id)}>Toggle Stock</button>
            <button onClick={() => onDiscount(product.id)}>Discount</button>
            <button onClick={() => onEdit(product)}>Edit Product</button>
            <hr />
        </div>


    );
}