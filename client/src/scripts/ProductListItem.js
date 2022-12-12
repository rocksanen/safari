

function ProductListItem({ product, isSelected, onClick }) {

  return (
    <div className={`product-list-item ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <img className="product-list-item-photo"
           src={product.photo}
           alt={`${product.name}`}/>
      <b>{product.name}</b>
    </div>
  )
}

export default ProductListItem;