import { toast } from "react-toastify";

const copyResultText = (text) => {
  const el = document.createElement("textarea");
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  toast("Desculpa copiada com sucesso!", {
    progressClassName: "SuccessProgressBar",
  });
};

export default copyResultText;
