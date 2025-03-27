const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container"); // Remover a classe 'yes'
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetHeight); // Alterei para a altura do container
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";  // Ocultar a pergunta
  heartLoader.style.display = "inherit";     // Exibir o loader de coração

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";      // Esconder o loader
    resultContainer.style.display = "inherit"; // Exibir o resultado (gif e texto)
    gifResult.play();                       // Reproduzir o gif
  }, 3000);  // Atraso de 3 segundos antes de mostrar o resultado
});
