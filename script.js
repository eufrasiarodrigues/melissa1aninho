const imagens = [
    "images/3O7A6363.jpg",
    "images/3O7A6379.jpg",
    "images/3O7A6389.jpg",
    "images/3O7A6537.jpg",
    "images/3O7A6557.jpg",
    "images/3O7A6576.jpg",
    "images/3O7A6584.jpg",
    "images/3O7A6599.jpg",
    "images/3O7A6629-.jpg",
    "images/3O7A6639.jpg",
    "images/3O7A6660.jpg",
    "images/3O7A6669.jpg",
    "images/3O7A6689.jpg",
    "images/3O7A6691.jpg",
    "images/3O7A6699.jpg",
    "images/3O7A6702.jpg",
    "images/3O7A6706.jpg",
    "images/3O7A6708.jpg",
    "images/3O7A6715.jpg",
    "images/3O7A6725.jpg",
    "images/3O7A6729.jpg",
    "images/3O7A6734.jpg",
    "images/3O7A6743.jpg",
    "images/3O7A6750.jpg",
    "images/3O7A6756.jpg",
    "images/3O7A6765.jpg",
    "images/3O7A6769.jpg",
    "images/3O7A6775.jpg",
    "images/3O7A6783.jpg",
    "images/3O7A6787.jpg",
    "images/3O7A6792.jpg",
    "images/3O7A6804.jpg",
    "images/3O7A6807.jpg",
    "images/3O7A6812.jpg",
    "images/3O7A6818.jpg",
    "images/3O7A6822.jpg",
    "images/3O7A6827.jpg",
    "images/3O7A6830.jpg",
    "images/3O7A6843.jpg",
    "images/3O7A6884.jpg",
    "images/3O7A6961.jpg",
    "images/3O7A6965.jpg",
    "images/3O7A7018.jpg",
    "images/3O7A7049.jpg",
    "images/3O7A7089.jpg",
    "images/3O7A7099.jpg",
    "images/3O7A7121.jpg",
    "images/3O7A7140.jpg",
    "images/3O7A7144.jpg",
    "images/3O7A7151.jpg",
    "images/3O7A7157.jpg",
    "images/3O7A7180.jpg",
    "images/3O7A7188.jpg",
    "images/3O7A7192.jpg",
    "images/3O7A7202.jpg",
    "images/3O7A7233.jpg",
    "images/3O7A7283.jpg",
    "images/3O7A7333.jpg",
    "images/3O7A7339.jpg",
    "images/3O7A7397.jpg"
  ];
  
  let imagemAtual = 0;
  
  function abrirModal(index) {
    imagemAtual = index;
    document.getElementById('imagemModal').src = imagens[imagemAtual];
    document.getElementById('modal').style.display = "block";
  }
  
  function fecharModal() {
    document.getElementById('modal').style.display = "none";
  }
  
  function imagemAnterior() {
    imagemAtual = (imagemAtual - 1 + imagens.length) % imagens.length;
    document.getElementById('imagemModal').src = imagens[imagemAtual];
  }
  
  function imagemProxima() {
    imagemAtual = (imagemAtual + 1) % imagens.length;
    document.getElementById('imagemModal').src = imagens[imagemAtual];
  }
  
  // Inicializar Swiper
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 4, // Exibe 4 slides por vez
    spaceBetween: 10, // Espaço entre os slides
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: false, // Garante que os slides não sejam embaralhados ou repetidos
    initialSlide: 0, // Começa sempre no primeiro slide
  });

  function preCarregarImagens() {
    imagens.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }

  // Chame a função ao carregar a página
  window.onload = preCarregarImagens;
