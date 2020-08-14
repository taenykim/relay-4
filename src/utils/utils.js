const drawImage = (canvas, data) => {
  const ctx = canvas.getContext("2d");
  const imageSrc = "https://image.chosun.com/sitedata/image/201609/11/2016091100822_0.jpg";
  const image = new Image();
  image.src = imageSrc;
  image.onload = () => {
    console.log("image정보", image.width, image.height);
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "green";
    ctx.lineWidth = 4;
    data.forEach((item) => {
      ctx.strokeRect(item.x, item.y, item.width, item.height);
    });
  };
};

// const drawData = (canvas) => {
//   const ctx = canvas.getContext("2d");
//   console.log(dummy);
// };

module.exports = { drawImage };
