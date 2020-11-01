const fetchData = async () => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "4d1ee79c",
      s: "avengers",
    },
  });

  console.log(response.data);
};

fetchData();
