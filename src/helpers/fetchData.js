const fetchData = async () => {
  const options = {
    method: "GET",
    mode: "cors"
  };
  const sentences = await fetch(
    `http://localhost:5000/api/v1/sentences`,
    options
  ).then(res => res.json());
  const votes = await fetch(
    `http://localhost:5000/api/v1/votes`,
    options
  ).then(res => res.json());

  return { sentences, votes };
};

export default fetchData;
