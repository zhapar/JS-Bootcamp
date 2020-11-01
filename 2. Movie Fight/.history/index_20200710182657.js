const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "4d1ee79c",
      s: searchTerm,
    },
  });

  console.log(response.data);
};

const onInput = (e) => {
  e.preventDefault();
  fetchData(e.target.value);
};

const input = document.querySelector("input");
input.addEventListener("input", debounce(onInput, 500));
