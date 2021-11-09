const weatherForm = document.querySelector("form");
const input = document.querySelector("input");
const place = document.querySelector(".p-1");
const weather = document.querySelector(".p-2");

const search = async function (input) {
  const data = await fetch(`http://localhost:3000/weather?address=${input}`);
  if (data.error) {
  }
  const renderedData = await data.json();
  const parsedData = await renderedData;
  return parsedData;
};

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = input.value;
  place.textContent = "Loading....";
  //   search(location, (data) => {
  //     console.log(data);
  //   });
  search(location).then((res) => {
    if (res.error) {
      place.textContent = res.error;
      weather.textContent = "";
    }
    place.textContent = res.data.place;
    weather.textContent = res.weather;
  });
});
