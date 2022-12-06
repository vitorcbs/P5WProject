function getData() {
  const url = "http://localhost:4005/data";
  fetch(url)
    .then((response) => response.json())  //transforma a response em json
    .then((data) => {    //acessa a data
      console.log(data);
      data.results.forEach((element) => {    //pra cada elemento dentro do results do data
        document
          .getElementById("cardsPersonagens")  //ele acessa o cardpersonagens 
          .appendChild(createCard(element));    //adiciona um filho ao cardspersonagens com a funcao de criar cards usando os elementos lidos
      });
    });
}

function createCard(element) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="cardInner">
      <div class="cardFront">
        <h1 class="normalName">${element.normalName}</h1>
        <img class="cardImage" src="/assets/images/personagensFrontCard/${element.cardImage}" alt="${element.normalName}" />
      </div>
      <div class="cardFlip">
        <h1 class="transformedName">${element.transformedName}</h1>
        <img class="cardFlipImage" src="/assets/images/personagensBackCard/${element.cardFlipImage}"
          alt="${element.transformedName}" />
      </div>
    </div>
  `;
  return card;
}

getData();
