music_1 = "";
music_2 = "";

leftWristX = 0;
leftWristY = 0;
leftWrist_score = 0;

rightWristX = 0;
rightWristY = 0;
rightWrist_score = 0;
rightWrist_play = "";

function preload()
{
    music_1 = loadSound("Music_1.mp3");
    music_2 = loadSound("Music_2.mp3");

}

function setup()
{
    canvas = createCanvas(400,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    image(video,0,0,400,300);

    fill('red');
    stroke('red');

    music_1_song = music_1.isPlaying();
    console.log(music_1_song);

    if(leftWrist_score > 0.2)
    {
        circle(leftWristX,leftWristY,20);

        music_2.stop();
        if(music_1 == false)
        {
            music_1.play()
            music_1.setVolume(1);
        }
        else{
            document.getElementById("song_name").innerHTML = "Song name = Beleiver";
        }
    }

    if(rightWrist_score > 0.2)
    {
        circle(rightWristX,rightWristY,20);

        music_1.stop();
        if(music_2 == false)
        {
            music_2.play()
            document.getElementById("song_name").innerHTML = " Song name = Daspasito";
        }
    }
}

function modelLoaded()
{
    console.log('PoseNet is initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        leftWrist_score = results[0].pose.keypoints[9].score;
        console.log("Left Wrist Score = " + leftWrist_score);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        rightWrist_score = results[0].pose.keypoints[10].score;
        console.log("Right Wrist Score = " + rightWrist_score);
    }
}