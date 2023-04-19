const gifs = [
    "./assets/cat1.gif",
    "./assets/cat2.gif",
    "./assets/cat3.gif",
    "./assets/cat4.gif",
    "./assets/cat5.gif",
    "./assets/cat6.gif",
    "./assets/cat7.gif",
    "./assets/cat8.gif",
    "./assets/cat9.gif",
  ];
  
  //   console.log(images)
  const images = document.getElementsByTagName("img");
  
  window.onload = (event) => {
    // console.log("page is fully loaded");
    for (let i = 0; i < images.length; i++) {
        images[i].src = chrome.runtime.getURL(
            gifs[Math.floor(Math.random() * gifs.length)]
            );
        }
};