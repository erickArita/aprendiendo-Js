//que es una promesa en javascript
//es un objeto que representa la terminación o el fracaso de una operación asíncrona

// const getName = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Eduardo");
//     }, 2000);
//   });
// };

// console.log("Hola");
// getName().then((name) => console.log(name));
// console.log("adios");
//que es asincronia en javascript
//la asincronia es la capacidad de ejecutar una tarea sin esperar a que se complete

//fetch es una funcion que nos permite hacer peticiones http desde javascript

// const responsePromise = fetch("https://jsonplaceholder.typicode.com/users");
// const jsonPromise = responsePromise.then((res) => res.json());
// jsonPromise.then(console.log);

const API_KEY =
  "live_E7cziandupYJx9peRZifIvpEPGRuRDuGOC9vk4vFUXgbDlr9h4E4fGn4FXggwFpD";

//que es async await en javascript
//es una forma de trabajar con promesas de una manera mas sencilla

const $dogsContainer = document.querySelector("#dogs_container");

const getDogs = async () => {
  try {
    const res = await fetch(
      `https://api.thedogapi.com/v1/images/search?limit=10&api_key=${API_KEY}`
    );
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

const createDogCard = ({ url }) => `
  <div
  class="relative max-w-[280px] bg-white    rounded-lg  dark:bg-gray-800
    hover:inset-0
   hover:rounded-lg hover:opacity-70
    hover:content-['']   hover:bg-inherit hover:backdrop-blur-lg hover:backdrop-contrast-200 hover:transition-all	"
  >
    <a href="#">
      <img class="rounded-t-lg" src="${url}" alt="" />
    </a>
    <div class="p-5">
      <a href="#">
        <h5
          class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Noteworthy technology acquisitions 2021
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so
        far, in reverse chronological order.
      </p>
    </div>
  </div>
`;

getDogs().then((dogs) => {
  const dogsCards = dogs.map((dog) => createDogCard(dog)).join("");

  $dogsContainer.innerHTML = dogsCards;
});
