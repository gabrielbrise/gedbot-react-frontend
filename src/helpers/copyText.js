const copyResultText = text => {
  console.log("Copiando texto");
  const el = document.createElement("textarea");
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

export default copyResultText;
