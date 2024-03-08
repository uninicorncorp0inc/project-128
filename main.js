var video ;
song = "";
leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

scoreLeftWrist = 0;
scoreRightWrist = 0;

function preload(){
    song = loadSound("musix.mp3");
}

function setup(){
    canvas = createCanvas(500,500);
    canvas.position(499,200);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);   

}

function modelLoaded(){
    console.log("MODEL OK!");
}

function draw(){
    image(video , 0 , 0 , 600 ,500);
fill("blue");
circle(leftWristX, leftWristY, 20  );
circle(rightWristX,rightWristY, 20 );
if(leftWristY > 0 && leftWristY < 100){
    song.rate(0.5);
} else if (leftWristY > 100 && leftWristY < 200){
    song.rate(1);
}else if (leftWristY > 200 && leftWristY < 300){
    song.rate(1.5);
} else if (leftWristY > 300 && leftWristY < 400){
    song.rate(2);
}else if  (leftWristY > 400 && leftWristY < 500){
    song.rate(2.5);
}


}

function gotPoses(results){
if (results.length > 0 ) {      
console.log(results);

leftWristY = results[0].pose.leftWrist.y;
rightWristY = results[0].pose.rightWrist.y;

leftWristX  = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;

}



}


function play(){
    song.play();
}

function stop(){
    song.stop();
}