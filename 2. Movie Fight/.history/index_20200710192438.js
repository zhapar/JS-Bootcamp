const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "4d1ee79c",
      s: searchTerm,
    },
  });

  if (response.data.Error) {
    return [];
  }

  return response.data.Search;
};

const root = document.querySelector(".autocomplete");
root.innerHTML = `
  <label><b>Search For a Movie</b></label>
  <input type="text" class="input" />
  <div class="dropdown" >
    <div class="dropdown-menu">
      <div class="dropdown-content results"></div>
    </div>
  </div>
`;

const input = document.querySelector("input");
const dropdown = document.querySelector(".dropdown");
const resultsWrapper = document.querySelector(".results");

const onInput = async (e) => {
  e.preventDefault();
  const movies = await fetchData(e.target.value);

  for (movie of movies) {
    const div = document.createElement("div");
    div.innerHTML = `
      <img src="${movie.Poster}" />
      <h1>${movie.Title}</h1>
    `;

    document.querySelector("#target").appendChild(div);
  }
};
input.addEventListener("input", debounce(onInput, 500));
