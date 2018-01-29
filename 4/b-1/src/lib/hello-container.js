import helloMessage from './hello';

const helloContainer = () => {
  const container = document.createElement("div");
  container.innerHTML = "<p>" + helloMessage + "</p>";
  return container;
};

export default helloContainer;
