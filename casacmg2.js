const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');

yesButton.addEventListener('click', () => {
  const image = new Image();
  image.src = 'https://i.pinimg.com/originals/8a/d9/dd/8ad9dd67fa3499b50f5b9642ad4d59ce.webp'; // Substitua pelo link da imagem desejada
  image.style.maxWidth = '100%';
  document.body.innerHTML = ''; // Limpar o conteúdo da página
  document.body.appendChild(image);
});

noButton.style.pointerEvents = 'none'; // Impede interações com o botão

noButton.addEventListener('mouseover', () => {
  // Mantenha esta parte vazia para evitar movimentos aleatórios
});
