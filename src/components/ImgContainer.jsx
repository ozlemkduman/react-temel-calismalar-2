import ImgCard from "./imgCard";

function ImgContainer({ products, handleClickBtn }) {
  return (
    <>
      <div className="grid">
        {products
          .filter((item) => item.isAvailable)
          .map((item) => (
            <ImgCard
              key={item.id}
              products={item}
              handleClickBtn={handleClickBtn}
            />
          ))}
      </div>
    </>
  );
}
export default ImgContainer;
