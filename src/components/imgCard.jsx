import ProductCardBtn from "./productBtn";

//burada sadece prop belirlendi. henüz products dizisi tanınmıyor. prop ataması yapıldı. prop yerine gelecek veri ile onun name ve thumnail bilgisi kullanıldığı yerde alınacak
function ImgCard({products,handleClickBtn}) {
  
  return (
    <article>
        <header>{products.name}</header>
        <img src={products.imgThumbnail} alt="" />
        <footer><ProductCardBtn handleClickBtn={handleClickBtn} proId={products.id}/></footer>
    </article>
    
  );
}

export default ImgCard