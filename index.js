const myKey = "EW4lifH1vXuPhrCl0btTict2OY_d9alCDfSpZzuzPZU";
// "https://api.unsplash.com/photos/?client_id=EW4lifH1vXuPhrCl0btTict2OY_d9alCDfSpZzuzPZU"

const imgplacement1 = document.getElementById("img1");

fetch(
  "https://api.unsplash.com/photos/?client_id=EW4lifH1vXuPhrCl0btTict2OY_d9alCDfSpZzuzPZU"
  //   "https://unsplash.com/s/photos/london&client_id=EW4lifH1vXuPhrCl0btTict2OY_d9alCDfSpZzuzPZU"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(data[0]);
    console.log(data[0].urls.raw);

    imgplacement1.src = data[0].urls.small;
  });
