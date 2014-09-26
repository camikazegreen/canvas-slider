document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    var paintImage = document.getElementById("paint");
    // paintImage.src = 'paint.jpg';console.log(paintImage);
    var imgW = paintImage.width*1; console.log(imgW);
    var imgH = paintImage.height*1; console.log(imgH);

    canvas.setAttribute("width", imgW);
    canvas.setAttribute("height", imgH);
    paintImage.onload = function() {
        // Draw this paintImage with offset 0x0
        context.drawImage(this, 0, 0);

    }
    var photoshopImage = document.getElementById("photoshop");
    var woodImage = document.getElementById("wood");
    //var width = img.clientWidth;
    //var height = img.clientHeight;

window.addEventListener("scroll",function(){
var scroll= window.pageYOffset*1;
//console.log(scroll);
    if(scroll<100){
        var change = imgH-scroll;
        context.clearRect(0,0,imgW,imgH);
        context.drawImage(paintImage,0,0,imgW,imgH,0,0,imgW,imgH);
    };
    if(imgH<scroll && scroll<imgH*2){
//        console.log("second leg");
        change=imgH*2-scroll;
        context.clearRect(0,0,imgW,imgH);
        context.drawImage(paintImage,0,0,imgW,change,0,0,imgW,change);
        context.drawImage(photoshopImage,0,change,imgW,imgH-change,0,change,imgW,imgH-change);
    };
    if(imgH*2<scroll && scroll<imgH*2+imgW){
//        console.log("third leg");
        change=imgW-(scroll-imgH*2);
        context.clearRect(0,0,imgW,imgH);
        context.drawImage(photoshopImage,0,0,change,imgH,0,0,change,imgH);
        context.drawImage(woodImage,change,0,imgW-change,imgH,change,0,imgW-change,imgH);
    };
})

});
