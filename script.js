const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector("#cari");
const cardContainer = document.querySelector(".card");

searchBtn.addEventListener("click", async () => {
  try {
    await getImage(searchInput.value);
  } catch (err) {
    alert(err);
  }
});

// update card

const updateCard = (data) => {
  let card = "";
  data.hits.forEach((item) => {
    card += showUpdatedCard(item);
  });
  cardContainer.innerHTML = card;
};

// get images from search bar

const getImage = (key) => {
  fetch(`https://pixabay.com/api/?key=10431648-fc50139658889e31e440e1957&q=${key}&image_type=photo`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      updateCard(data);
    });
};

// show all images
const Image = () => {
  fetch("https://pixabay.com/api/?key=10431648-fc50139658889e31e440e1957&image_type=photo")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let cards = "";
      data.hits.forEach((img) => {
        cards += showElement(img);
      });

      cardContainer.innerHTML = cards;
    });
};

// scroll top event
const arrowUp = document.querySelector(".topBtn");
arrowUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const showElement = (img) => {
  return `<div class="cardImg">
  <a href="${img.largeImageURL}" target="_blank">
  <img src="${img.largeImageURL}" alt="" />
  </a>
  <div class="about">
    <p class="info"><i class="fa-solid fa-user"></i>${img.user}</p>
    <p class="info"><i class="fa-solid fa-heart"></i>${img.likes}</p>
  </div>
</div>`;
};

const showUpdatedCard = (img) => {
  return `<div class="cardImg">
  <a href="${img.largeImageURL}" target="_blank">
  <img src="${img.largeImageURL}" alt="" />
  </a>
  <div class="about">
    <p class="info"><i class="fa-solid fa-user"></i>${img.user}</p>
    <p class="info"><i class="fa-solid fa-heart"></i>${img.likes}</p>
  </div>
</div>`;
};

Image();
