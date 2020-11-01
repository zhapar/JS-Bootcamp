const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "4d1ee79c",
      s: searchTerm,
    },
  });

  return response.data.Search;
};

const onInput = async (e) => {
  e.preventDefault();
  const movies = await fetchData(e.target.value);
  console.log(movies);
};

const input = document.querySelector("input");
input.addEventListener("input", debounce(onInput, 500));
