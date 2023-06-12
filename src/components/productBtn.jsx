const ProductCardBtn = ({proId, handleClickBtn}) => <button 
  className="outline"
  onClick={() => handleClickBtn(proId)}
  >Sec.. {proId}
</button>

export default ProductCardBtn