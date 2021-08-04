const cameraBtn = document.querySelector('.snap');


let img;

function preload() {
    img = loadImage("./Images/frame3.png");
    bulb = loadImage("./Images/Light.png");
    plants = loadImage("./Images/Plants.png");
    Shelf = loadImage("./Images/Shelf.png")
}

function setup() {
    createCanvas(950, 715); 
    video = createCapture(VIDEO);
    video.hide();

}

function draw() {
    image(img, 250, 170, 450, 420);
    image(video, 355, 330, 225, 170);
    image(bulb, 700, 0, 150, 250);
    image(Shelf, 150, 620, 690);
    image(plants, 200, 530);
}

function take_snapshot() {
    // cameraBtn.innerHTML = '<img src="./Images/camera-with-flash.svg">';
    cameraBtn.src = "./Images/camera-with-flash.svg";

    save('Snaped-Picture.png');

    setTimeout(() => {
        // cameraBtn.innerHTML = '<img src="./Images/camera.png">'
        cameraBtn.src = "./Images/camera.png";
    }, 4000);
}


