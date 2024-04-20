function changeImage() {
  const image = document.getElementById("animatronicImage");
  const pathName = image.src.substring(0, image.src.lastIndexOf("/"));
  const imageName = image.src.substring(image.src.lastIndexOf("/") + 1);
  if (imageName.includes("withered")) {
    image.src = `${pathName}/${imageName.slice(8)}`;
  } else {
    image.src = `${pathName}/withered${imageName}`;
  }
}
