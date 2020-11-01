const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "4d1ee79c",
      s: searchTerm,
    },
  });

  console.log(response.data);
};

let timeoutId;
const onInput = (e) => {
  e.preventDefault();

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(() => {
    fetchData(e.target.value);
  }, 500);
};

const input = document.querySelector("input");
input.addEventListener("input", onInput);
