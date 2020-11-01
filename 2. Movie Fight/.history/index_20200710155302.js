const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "4d1ee79c",
      s: searchTerm,
    },
  });

  console.log(response.data);
};

const input = document.querySelector("input");
input.addEventListener("input", onInput);

let timeoutId;
const onInput = (e) => {
  e.preventDefault();

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  setTimeout(() => {
    fetchData(e.target.value);
  }, 500);
};
