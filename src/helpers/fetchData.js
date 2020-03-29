const fetchData = async () => {
  const options = {
    method: "GET",
    mode: "cors"
  };

  const sentences = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/sentences`,
    options
  )
    .then(res => res.json())
    .catch(error => console.error(error));

  return { sentences };
};

export default fetchData;
