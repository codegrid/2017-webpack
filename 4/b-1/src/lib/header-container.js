const headerContainer = () => {
  const container = document.createElement("header");
  const message = 'This is header.';
  container.innerHTML = `<div>${message}</div>`;
  return container;
};

export default headerContainer;
