const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "4d1ee79c",
      s: searchTerm,
    },
  });

  console.log(response.data);
};

const debounce = (func, delay = 1000) {
  let timeoutId;

  return (...args) => {
    if(timeoutId) {
      clearTimeout(timeoutId);
    }

    setTimeout(() => {
      funct.apply(null, args);
    }, delay)
  }
}
const onInput = (e) => {
  e.preventDefault();

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(() => {
    fetchData(e.target.value);
  }, 1000);
};

const input = document.querySelector("input");
input.addEventListener("input", onInput);
