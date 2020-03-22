import { genderIcon, imageObj } from "./media";
import planetImg from "./images/planet.png";
const src = window.location.href;
const config = {
  setHeader: {
    "Access-Control-Allow-Origin": src
  }
};
const API_URL = "https://cors-anywhere.herokuapp.com/https://swapi.co/api/";
function getImage(url) {
  if (imageObj[url] == undefined) {
    return "./src/hw12-api/images/StarWarsLogo.png";
  } else {
    return imageObj[url];
  }
}
function getGenderIcon(gender) {
  if (genderIcon[gender] == undefined) {
    return naImg;
  } else {
    return genderIcon[gender];
  }
}
async function getCharacter(url) {
  let response = await fetch(url, config);
  return await response.json();
}
function hideLoader() {
  document.querySelector(".loader-container").classList.remove("active");
}
export async function getInf() {
  const container = document.querySelector(".information-container");
  const filmId = document.getElementById("planet-number").value;
  const url = API_URL + "films/" + filmId;
  document.querySelector(".loader-container").classList.add("active");
  fetch(url, config)
    .then(response => response.json())
    .then(data => {
      if ("detail" in data) {
        container.insertAdjacentHTML(
          "afterbegin",
          '<div id="not-found">No such film found</div>'
        );
      } else {
        const userToFetch = data.characters.map(url => getCharacter(url));
        Promise.all(userToFetch)
          .then(characterData => {
            container.innerHTML = "";
            characterData.forEach(character => {
              let characterDiv = document.createElement("div");
              characterDiv.classList.add("character");
              characterDiv.innerHTML = `
                  <div class="character-item">
                    <div class="image-wrapper">
                      <img src="${getImage(
                        character.url
                      )}" class="image" alt="${character.name}" />
                    </div>
                    <h2 class="name">${character.name}</h2>
                    <p class="birth-year">Birth year: ${
                      character.birth_year
                    }</p>
                    <img src="${getGenderIcon(
                      character.gender
                    )}" class="gender-image" alt="${character.gender}" />
                  </div>
                `;
              container.append(characterDiv);
            });
          })
          .finally(() => {
            document.querySelector(".planet-section").classList.add("hide");
            document
              .querySelector(".character-container")
              .classList.remove("hide");
            hideLoader();
          });
      }
    })
    .catch(err => {
      console.log(err);
    });
}
export async function getPlanet(page) {
  const url = API_URL + "planets/?page=" + page;
  document.querySelector(".loader-container").classList.add("active");
  fetch(url, config)
    .then(response => response.json())
    .then(data => {
      const container = document.querySelector(".planet-container");
      container.innerHTML = "";
      data.results.forEach(planet => {
        let planetDiv = document.createElement("div");
        planetDiv.classList.add("planet");
        planetDiv.innerHTML = `
          <img src="${planetImg}" alt="${planet.name}" class="planet-img" />
          <h2 class="planet-name">${planet.name}</h2>
        `;
        container.append(planetDiv);
      });
      let nextBtn = document.querySelector("#next");
      let prevBtn = document.querySelector("#prev");
      if (data.next !== null) {
        nextBtn.setAttribute("data-page", data.next[data.next.length - 1]);
        nextBtn.classList.remove("hide");
      } else {
        nextBtn.classList.add("hide");
      }
      if (data.previous !== null) {
        prevBtn.setAttribute("data-page", data.previous[data.next.length - 1]);
        prevBtn.classList.remove("hide");
      } else {
        prevBtn.classList.add("hide");
      }
    })
    .finally(() => {
      document.querySelector(".planet-section").classList.remove("hide");
      document.querySelector(".character-container").classList.add("hide");
      hideLoader();
    });
}
