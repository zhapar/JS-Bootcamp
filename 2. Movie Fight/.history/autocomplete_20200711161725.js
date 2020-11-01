const createAutoComplete = ({ root }) => {
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

  const input = document.querySelector(".input");
  const dropdown = document.querySelector(".dropdown");
  const resultsWrapper = document.querySelector(".results");

  const onInput = async (e) => {
    e.preventDefault();
    const movies = await fetchData(e.target.value);

    if (!movies.length) {
      dropdown.classList.remove("is-active");
      return;
    }

    resultsWrapper.innerHTML = "";
    dropdown.classList.add("is-active");
    for (let movie of movies) {
      const option = document.createElement("a");
      const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;

      option.classList.add("dropdown-item");
      option.innerHTML = `
      <img src="${imgSrc}"/>
      ${movie.Title}
    `;

      option.addEventListener("click", () => {
        dropdown.classList.remove("is-active");
        input.value = movie.Title;
        onMovieSelect(movie);
      });

      resultsWrapper.appendChild(option);
    }
  };

  input.addEventListener("input", debounce(onInput, 500));

  document.addEventListener("click", (e) => {
    if (!root.contains(e.target)) {
      dropdown.classList.remove("is-active");
    }
  });
};
