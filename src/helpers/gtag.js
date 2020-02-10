function gtagInitialize() {
  if (!window.dataLayer) return null;
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
}

export default gtagInitialize;
