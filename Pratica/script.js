

const apiKey = 'VIRiqvmkzs1DdcX1JHfqpeWqRJe0Q5UGTApFgA6403zY6iw5bFG4SevU'; 
const loadImagesButton = document.getElementById('load-images-button');


loadImagesButton.addEventListener('click', () => {
const query = 'Nature'; 
fetch(`https://api.pexels.com/v1/search?query=${query}`, {
headers: {
  Authorization: apiKey
}
})
.then(response => response.json())
.then(data => {

  data.photos.forEach((photo) => {
    const col = document.creatElement("div")
    col.className = "col"
    col.innerHTML = `





    `
  });
})

});

