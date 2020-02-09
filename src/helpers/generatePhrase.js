const generatePhrase = sentences => {
  const greetingArray = sentences.filter(
    ({ position, isApproved }) => position === 1 && isApproved === true
  );
  const reasonArray = sentences.filter(
    ({ position, isApproved }) => position === 2 && isApproved === true
  );
  const goodbyeArray = sentences.filter(
    ({ position, isApproved }) => position === 3 && isApproved === true
  );

  const random = array => array[Math.floor(Math.random() * array.length)];

  const greeting = random(greetingArray).text;
  const reason = random(reasonArray).text;
  const goodbye = random(goodbyeArray).text;

  return `${greeting}, ${reason}, ${goodbye}`;
};

export default generatePhrase;
