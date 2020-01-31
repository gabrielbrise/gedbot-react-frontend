const fetchData = async () => {
  const options = {
    method: "GET",
    mode: "cors"
  };
  const sentences = await fetch(
    `${process.env.API_URL}/api/v1/sentences`,
    options
  ).then(res => res.json());
  const votes = await fetch(
    `${process.env.API_URL}/api/v1/votes`,
    options
  ).then(res => res.json());

  return { sentences, votes };
};

export default fetchData;
