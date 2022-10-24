const menuImages = document.getElementsByClassName("menuImage");
const mainImage = document.getElementById("mainImage");

[...menuImages].forEach((menuImage) => {
    menuImage.onclick = () => {
        mainImage.src = menuImage.src;
    
    };  
});