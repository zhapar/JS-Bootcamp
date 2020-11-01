const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "4d1ee79c",
      s: searchTerm,
    },
  });

  console.log(response.data);
};

const debounce = (func, delay = 1000) => {
  let timeoutId;

  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};
const onInput = (e) => {
  e.preventDefault();
  fetchData(e.target.value);
};

const input = document.querySelector("input");
input.addEventListener("input", debounce(onInput, 500));
