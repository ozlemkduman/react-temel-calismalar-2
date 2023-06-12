const ProductCardBtn = ({ proId, handleClickBtn }) => (
  <button className="outline" onClick={() => handleClickBtn(proId)}>
    Seç
  </button>
);

export default ProductCardBtn;
