function ImgNotSelected() {
  return (
    <article
      data-theme="dark"
      style={{
        width: "1130px",
        height: "300",
        color: "white",
        textAlign: "center",
      }}
    >
      <header>Gösterilecek Fotoğraf Yok</header>
      Lütfen bir fotoğraf seçin
      <footer>...</footer>
    </article>
  );
}
export default ImgNotSelected;
