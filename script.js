var randomImage = new Array();

randomImage[0] = new Image();
randomImage[0].src = 'images/1.jpg';

randomImage[1] = new Image();
randomImage[1].src = 'images/2.jpg';

randomImage[2] = new Image();
randomImage[2].src = 'images/3.jpg';

randomImage[3] = new Image();
randomImage[3].src = 'images/4.jpg';

randomImage[4] = new Image();
randomImage[4].src = 'images/5.jpg';

randomImage[5] = new Image();
randomImage[5].src = 'images/6.jpg';

randomImage[6] = new Image();
randomImage[6].src = 'images/7.jpg';


function imageGen(){

    var nextImg = Math.floor(Math.random() * randomImage.length);

    document.getElementById('Images').src = randomImage[nextImg].src;
}