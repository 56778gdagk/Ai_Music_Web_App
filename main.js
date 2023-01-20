music_1 = "";
music_2 = "";

function preload()
{
    music_1 = loadSound("Music_1");
    music_2 = loadSound("Music_2");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,0,0,600,500);
}