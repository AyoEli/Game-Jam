/* VARIABLES */
let startButton;
let startButton1;
let startButton2;
let startButton3;
let startButton4;
let startButton5;
let nextButton;
let nextButton2;
let nextButton3;
let nextButton4;
let nextButton5;
let c1;
let c2;
let c3;
let c4;
let c5;
let c6;
let c7;
let c8;
let c9;
let c10;
let correct1;
let wrong1;
let correct2;
let wrong2;
let correct3;
let wrong3;
let moonstoneArtifact;
let doveArtifact;
let eggArtifact;
let seedArtifact;
let dragonflyArtifact;
let rock;
let avatar;
let collector;
let score = 0;
let elysiumBg;
let elysiumBg2;
let elysiumBg3;
let elysiumFallBg;
let elysiumFallBg2;
let elysiumFallBg3;
let narrator;
let evilTycoon;
let bg;
let screen = 0;
let agdasima;
let navigate;
let reward;
let oldLady;
let ofCourse;
let never;
let runner;
let follow;
let finish;
let collect;

/* PRELOAD LOADS FILES */
function preload(){
  elysiumBg = loadImage('elysium.jpg');
  elysiumBg2 = loadImage('elysium-2.jpg');
  elysiumBg3 = loadImage('elysium-3.jpg');
  elysiumBg4 = loadImage('elysium-4.jpg');
  elysiumFallBg = loadImage('elysiumfall.jpg');
  elysiumFallBg2 = loadImage('elysiumfall1.jpg');
  elysiumFallBg3 = loadImage('elysiumfall2.jpg');
  agdasima = loadFont('Agdasima-Regular.ttf');
  collectorImg = loadImage('collector.png');
  rockImg = loadImage('rock.png');
  snakeImg = loadImage('snake.png');
  tigerImg = loadImage('tiger.png');
  navigatorImg = loadImage('navigator.png');
  rewardImg = loadImage('reward.png');
  oldLadyImg = loadImage('oldlady.png');
  runnerImg = loadImage('runner.png');
  homeImg = loadImage('home.jpg');
  
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,400);
  background(elysiumFallBg);
  rectMode(CENTER);
  textAlign(CENTER);
  textFont(agdasima);
  textSize(20);
  text("Welcome to Elysium's Fall", 200, 110, 300, 50);
  textSize(16);
  text("Click START to begin", 200, 150);

  gameAssets();

  continueButtons();
}

/* DRAW LOOP REPEATS */
function draw() {
  conversation();

  riddleLevel();

  if(screen == 15) {
    if(startButton2.mouse.presses()) {
      collectionLevelAssets();
      screen = 16;
    }
  }

  if(screen == 16) {
    collectorLevel();
  }

  if(nextButton2.mouse.presses()) {
    level3Welcome();
    screen = 17;
  }

  if(screen == 17){
    if(startButton3.mouse.presses()) {
      mazeLevelAssets();
      screen = 18;
    }
  }

  if(screen == 18) {
    mazeLevel();
  }

  if(nextButton3.mouse.presses()) {
    level4Welcome();
    screen = 20;
  }

  if(screen == 20) {
    if(startButton4.mouse.presses()) {
      oldLadyAssets();
      screen = 21;
    }
  }

  if(screen == 21) {
    oldLadyLevel();
  }

  if(c9.mouse.presses()) {
    screen = 24;
    level4Congrats();
  }

  if(nextButton4.mouse.presses()) {
    level5Welcome();
    screen = 25;
  }

  if(screen == 25) {
    if(startButton5.mouse.presses()) {
      finalLevelAssets();
      screen = 26;
    }
  }

  if(screen == 26) {
    finalLevel();
  }

  if(collect.mouse.presses()) {
    screen = 28;
    level5Congrats();
  }

  if(nextButton5.mouse.presses()) {
    background(elysiumBg4);
    doveArtifact.pos = {x: -200, y: -200};
    nextButton5.pos = {x: -200, y: -200};
    screen = 29;
    fill('rgba(0, 0, 0, 0.5)');
    rect(200, 360, width, height / 5);
    avatar.pos = {x: -30, y: -320};
    c10.pos = {x: 350, y: 380};
    narrator.pos = {x: 30, y: 330};
    avatar.scale 
    fill(255, 255, 255);
    textSize(14);
    text("We are eternally grateful to you. The doors of Elysium wlecome you whenever you need it. This should take you back home.", 190, 390, 275, height / 5);
  }

  if(c10.mouse.presses()) {
    background(homeImg);
    textSize(40);
    fill(0);
    text("THE END", 200, 200);
    narrator.pos = {x: -200, y: -200};
    c10.pos = {x: -200, y: -200};
    screen = 30;
  }
}

/* FUNCTIONS */

/*LEVELS*/
function conversation() {
  if(startButton.mouse.presses()) {
    print("start button has been pressed");
    showScreen1();
    c1.pos = {x: 350, y: 380};
    screen = 1;
  } //screen one

  if(c1.mouse.presses()) {
    print(screen);
    whereAmI();
    screen = 2;
  } //where am i 

  if(c2.mouse.presses()) {
    greetings();
    screen = 3;
  }  //greetings traveler. 

  if(c3.mouse.presses()) {
    whatHappened();
    screen = 4;
  } //what happened here?

  if(c4.mouse.presses()) {
    expo1();
    screen = 5;
  }//expo1

  if(c5.mouse.presses()) {
    expo2();
    screen = 6;
  }//expo2

  if(c6.mouse.presses()) {
    expo3();
    screen = 7;
  }//expo3

  if(c7.mouse.presses()) {
    saveUsPlease();
    screen = 8;
  }//please help us
}

function riddleLevel() {
  if(c8.mouse.presses()) {
    level1Welcome();
    screen = 9;
  }//start level one

  if(startButton1.mouse.presses()) {
    riddle1();
    screen = 10;
  }//level one

  if(correct1.mouse.presses()){
    riddle2();
    screen = 11;
  } else if(wrong1.mouse.presses()) {
    badAnswer();
    screen = 12;
  } //global warming

  if(correct2.mouse.presses()){
    riddle3();
    screen = 13;
  } else if(wrong2.mouse.presses()) {
    badAnswer();
    screen = 12;
  }//deforestation

  if(correct3.mouse.presses()){
    level1Congrats();
    screen = 14;
  } else if(wrong3.mouse.presses()) {
    badAnswer();
    screen = 12;
  }//carbondioxide

  if(nextButton.mouse.presses()) {
    level2Welcome();
    screen = 15;
  }
}

function collectorLevel() {
  background("slategray");
    //If fallingObject reaches bottom, move back to random position at top
  if (rock.y >= height) {
    rock.y = 0;
    rock.x = random(width);
    rock.vel.y = random(1,5);
    score = score - 1;
  }

  //Move catcher
  if (kb.pressing("left")) {
    collector.vel.x = -3;
  } else if (kb.pressing("right")) {
    collector.vel.x = 3;
  } else {
    collector.vel.x = 0;
  }

  //Stop catcher at edges of screen
  if (collector.x < 50) {
    collector.x = 50;
  } else if (collector.x > 350) {
    collector.x = 350;
  }

  // If rock collides with collector, move back to random position at top
  if(rock.collides(collector)) {
    print("collision!");
    rock.y = 0;
    rock.x = random(width);
    rock.vel.y = random(1,5);
    rock.direction = "down";
    score = score + 1;
  }

  // Draw the score to screen
  fill(0, 128, 128);
  textSize(20);
  text("Score = " + score, 10, 30);

  if (score < 0) {
    background("black");
    
    //Draw sprites off of screen
    collector.pos = { x: 600, y: -300 };
    rock.pos = { x: -100, y: 0 };
    
    //Draw end of game text
    textSize(20);
    fill(255);
    text("GAME OVER\n Click to start again.\n The land of Elysium depends on you!", width/2 - 50, height/2 - 30);

    if(mouseIsPressed) {
      print("pressed")
      //Reset score
  score = 0;

  //Reset sprites
  collector.pos = { x: 200, y: 380 };
  rock.y = 0;
  rock.x = random(width);
  rock.velocity.y = random(1,5);
  rock.direction = "down";
    }
  }  

  //win time
  if(score == 10) {
    level2Congrats();
    }
  }

function mazeLevel() {
  background("pink");

    // Draw start and end 
    fill(0);
    textSize(20);
    textAlign(LEFT);
    text("Start", 330, 20);
    text("End", 22, 395);
    
    //Move the player
    if (kb.pressing("left")) {
      navigate.vel.x = -3;
    } else if (kb.pressing("right")) {
      navigate.vel.x = 3;
    } else if (kb.pressing("up")) {
      navigate.vel.y = -3;
    } else if (kb.pressing("down")) {
      navigate.vel.y = 3;
    } else {
      navigate.vel.x = 0;
      navigate.vel.y = 0;
    }
   //Move the obstacle
    if (snake.y > 150){
      print("lesser")
      snake.vel.y = -1;
    } else if(snake.y < 50){
      snake.vel.y = 1;
    }
  
    //If player touches obstacle, start again
    if (navigate.collides(snake)) {
      navigate.x = 350;
      navigate.y = 50;
    }

  if (navigate.collides(tiger)) {
      navigate.x = 350;
      navigate.y = 50;
      reward.pos = {x: 120, y: 20}
    }

  //collects the egg
  if (navigate.collides(reward)) {
      reward.x = -500;
    }
  
    //Cannot go above the maze
    if(navigate.y < 20){
      navigate.y = 20;
    }
    
    // You win
    if(navigate.y > 375){
      level3Congrats();
      screen = 19;
    }
}

function oldLadyLevel() {
  if(ofCourse.mouse.presses()) {
    screen = 22;
    background("pink");
    text("Thank you young fellow, as a token of my gratitude, take this.", 200, 200, 300, 200);
    c9.pos = {x: 200, y: 275};
    //remove sprites
    ofCourse.pos = {x: -200, y: -200};
    never.pos = {x: -200, y: -200};
  } else if(never.mouse.presses()) {
    screen = 23;
    background("black");
    textAlign(CENTER);
    fill("white");
    text("You have committed the worst crime a hero can do.\n You must always help a person in need.\n Sorry, but you have to restart your journey.\n Refresh the page", 200, 200);
    oldLady.pos = {x: -200, y: -200}
    ofCourse.pos = {x: -200, y: -200};
    never.pos = {x: -200, y: -200};
  }
}

function finalLevel() {
  background("wheat");
  if(runner.x >390) {
    text("Chase that bird!");
    follow.pos = {x: 200, y: 200};
  }

  if(follow.mouse.presses()) {
    follow.pos = {x: -200, y: -200};
    screen = 27;
    runner.pos = {x: 200, y: 200};
    runner.vel.x = 0;
    textAlign(CENTER);
    text("Do you see that?\n It stopped.\n Huh. It must like you.", 200, 325);
    collect.pos = {x: 200, y: 275};
    
  }
  
  }
  


/*OTHER STUFF*/
function continueButtons() {
  //continue button
  c1 = new Sprite();
  c1.pos = {x: -350, y: -370}
  c1.w = 60;
  c1.h = 25;
  c1.collider = "k";
  c1.color = "darkslategray";
  c1.text = "Continue";
  //
  c2 = new Sprite();
  c2.pos = {x: -350, y: -370}
  c2.w = 60;
  c2.h = 25;
  c2.collider = "k";
  c2.color = "darkslategray";
  c2.text = "Continue";
  //
  c3 = new Sprite();
  c3.pos = {x: -350, y: -370}
  c3.w = 60;
  c3.h = 25;
  c3.collider = "k";
  c3.color = "darkslategray";
  c3.text = "Continue";
  //
  c4 = new Sprite();
  c4.pos = {x: -350, y: -370}
  c4.w = 60;
  c4.h = 25;
  c4.collider = "k";
  c4.color = "darkslategray";
  c4.text = "Continue";
  //
  c5 = new Sprite();
  c5.pos = {x: -350, y: -370}
  c5.w = 60;
  c5.h = 25;
  c5.collider = "k";
  c5.color = "darkslategray";
  c5.text = "Continue";
  //
  c6 = new Sprite();
  c6.pos = {x: -350, y: -370}
  c6.w = 60;
  c6.h = 25;
  c6.collider = "k";
  c6.color = "darkslategray";
  c6.text = "Continue";
  //
  c7 = new Sprite();
  c7.pos = {x: -350, y: -370}
  c7.w = 60;
  c7.h = 25;
  c7.collider = "k";
  c7.color = "darkslategray";
  c7.text = "Continue";
  //
  c8 = new Sprite();
  c8.pos = {x: -350, y: -370}
  c8.w = 60;
  c8.h = 25;
  c8.collider = "k";
  c8.color = "darkslategray";
  c8.text = "Continue";
  //
  c9 = new Sprite(-100, -300, 100, 35, "kinematic");
  c9.text = "Continue"
   //
  c10 = new Sprite();
  c10.pos = {x: -350, y: -370}
  c10.w = 60;
  c10.h = 25;
  c10.collider = "k";
  c10.color = "darkslategray";
  c10.text = "Continue";
}
function gameAssets() {
  //enter button
  startButton = new Sprite(200, 275, 100, 35, "k");
  startButton.color = "darkslategray";
  startButton.text = "START"

  //restart old lady
  restart = new Sprite(-200, -275, 100, 35, "k");
  restart.color = "darkslategray";
  restart.text = "RESTART"

  //start level 1
  startButton1 = new Sprite(-200, -275, 100, 35, "k");
  startButton1.color = "darkslategray";
  startButton1.text = "START"

  //next 
  nextButton = new Sprite(-200, -275, 100, 35, "k");
  nextButton.color = "darkslategray";
  nextButton.text = "Next Level"

  //next 2
  nextButton2 = new Sprite(-200, -275, 100, 35, "k");
  nextButton2.color = "darkslategray";
  nextButton2.text = "Next Level"

  //next 3
  nextButton3 = new Sprite(-200, -275, 100, 35, "k");
  nextButton3.color = "darkslategray";
  nextButton3.text = "Next Level"
  
  //next 4
  nextButton4 = new Sprite(-200, -275, 100, 35, "k");
  nextButton4.color = "darkslategray";
  nextButton4.text = "Next Level"

  //next 5
  nextButton5 = new Sprite(-200, -275, 100, 35, "k");
  nextButton5.color = "darkslategray";
  nextButton5.text = "Go"

  //start level 2
  startButton2 = new Sprite(-200, -275, 100, 35, "k");
  startButton2.color = "darkslategray";
  startButton2.text = "START"

  //start level 3
  startButton3 = new Sprite(-200, -275, 100, 35, "k");
  startButton3.color = "darkslategray";
  startButton3.text = "START"

  //start level 4
  startButton4 = new Sprite(-200, -275, 100, 35, "k");
  startButton4.color = "darkslategray";
  startButton4.text = "START"

  //start level 5
  startButton5 = new Sprite(-200, -275, 100, 35, "k");
  startButton5.color = "darkslategray";
  startButton5.text = "START"

  //choices
  correct1 = new Sprite(-200, -275, 120, 40, "k");
  correct1.color = "darkslategray";
  correct1.text = "Global Warming";
  wrong1 = new Sprite(-200, -275, 120, 40, "k");
  wrong1.color = "darkslategray";
  wrong1.text = "Sunny Skies";
  //
  correct2 = new Sprite(-200, -275, 120, 40, "k");
  correct2.color = "darkslategray";
  correct2.text = "Deforestation";
  wrong2 = new Sprite(-200, -275, 120, 40, "k");
  wrong2.color = "darkslategray";
  wrong2.text = "Tree Crawlers";
  //
  correct3 = new Sprite(-200, -275, 120, 40, "k");
  correct3.color = "darkslategray";
  correct3.text = "Carbondioxide";
  wrong3 = new Sprite(-200, -275, 120, 40, "k");
  wrong3.color = "darkslategray";
  wrong3.text = "Poison Gas";

  //player avatar
  avatar = new Sprite();
  avatar.img = 'avatar.png';
  avatar.scale = 0.1;
  avatar.x = -200;
  avatar.y = -200;
  avatar.rotationLock = "true";

  //narrator
  narrator = new Sprite();
  narrator.img = 'narrator.png';
  narrator.scale = 0.15;
  narrator.x = -200;
  narrator.y = -200;
  narrator.rotationLock = "true";

  //moonstone
  moonstoneArtifact = new Sprite();
  moonstoneArtifact.img = 'moonstone.png';
  moonstoneArtifact.scale = 0.05;
  moonstoneArtifact.x = -200;
  moonstoneArtifact.y = -200;
  
  //seed
  seedArtifact = new Sprite();
  seedArtifact.img = 'seed.png';
  seedArtifact.scale = 0.05;
  seedArtifact.x = -200;
  seedArtifact.y = -200;
  
  //dragonfly
  dragonflyArtifact = new Sprite();
  dragonflyArtifact.img = 'dragonfly.png';
  dragonflyArtifact.scale = 0.05;
  dragonflyArtifact.x = -200;
  dragonflyArtifact.y = -200;
  
  //egg
  eggArtifact = new Sprite();
  eggArtifact.img = 'egg.png';
  eggArtifact.scale = 0.05;
  eggArtifact.x = -200;
  eggArtifact.y = -200;

  //dove
  doveArtifact = new Sprite();
  doveArtifact.img = 'dove.png';
  doveArtifact.scale = 0.05;
  doveArtifact.x = -200;
  doveArtifact.y = -200;

  //collect
  collect = new Sprite(-200, -200, 100, 35, "kinematic");
  collect.text = "Collect";
}
function collectionLevelAssets(){
  background("palegreen");
  collectorImg.resize(60, 70);
  rockImg.resize(40, 20);

  startButton2.pos = {x: -200, y: -200}
  //Create catcher 
  collector = new Sprite(200,380,100,20);
  collector.img = collectorImg;
  collector.color = color(95,158,160);
  collector.collider = "k";
  
  //Create falling object
  rock = new Sprite(100,0,10);
  rock.img = rockImg;
  rock.color = color(0,128,128);
  rock.vel.y = 2;
  rock.rotationLock = "true";
}
function mazeLevelAssets() {
  background("pink");
  navigatorImg.resize(60, 70);
  snakeImg.resize(40, 40);
  tigerImg.resize(40, 40);
  rewardImg.resize(40, 40);

  //move start button away
  startButton3.pos = {x: -200, y: -200}
  
  reward = new Sprite(120, 20, 40, 40, "k");
  reward.rotationLock = true;
  reward.img = rewardImg;
  //create obstacles and stuff
    //Create player
  navigate = new Sprite(navigatorImg,350,50,40,40);
  navigate.rotationLock = true;

  
   //Create obstacle
  snake = new Sprite(120,40,40,40, "k");
  snake.rotationLock = true;
  snake.img = snakeImg;

    //Create obstacle
  tiger = new Sprite(105,300,40,40, "k");
  tiger.rotationLock = true;
  tiger.img = tigerImg;

  
  
  //draw the maze
  drawMaze();

}
function oldLadyAssets() {
  background("olive");
  startButton4.pos = {x: -200, y: -200};
  oldLadyImg.resize(60, 70);
  oldLady = new Sprite(oldLadyImg, 200, 200, 20, 20);
  text("Hello there young fellow, I think I need help carrying my load back to my cabin in the woods. Will you be a dear and help me out?", 200, 200, 300, 200);
  ofCourse = new Sprite(100, 300, 100, 35, "kinematic");
  ofCourse.text = "Of course!"
  never = new Sprite(300, 300, 100, 35, "kinematic")
  never.text = "Never!" 
}
function finalLevelAssets() {
  background("wheat");
  runnerImg.resize(60, 60);
  startButton5.pos = {x: -200, y: -200};
  runner = new Sprite(runnerImg, 200, 20, 20, 20);
  runner.vel.x = 3;
  follow = new Sprite(-100, -100, 100, 50, "kinematic");
  follow.text = "Follow!";
 
}
 function drawMaze() {
     //draw maze
    //Create the maze
  walls = new Group();
  walls.color = color(0);
  walls.collider = "s";
  
  new walls.Sprite(160, 10, 300, 5,);
  new walls.Sprite(10, height/2, 5, height - 15);  
  new walls.Sprite(150, 60, 5, 100);
  new walls.Sprite(width/2 + 35, 390, 325, 5);
  new walls.Sprite(50, 300, 75, 5); 
  new walls.Sprite(340, 146, 110, 5);
  new walls.Sprite(340, 250, 110, 5);
  new walls.Sprite(285, 198, 5, 109);
  new walls.Sprite(185, 332, 5, 109);
  new walls.Sprite(190, 197, 185, 5);
  new walls.Sprite(395, 200, 5, 380);
 }
/*SCREENS*/
function showScreen1() {
  background(elysiumFallBg2);
  startButton.pos = {x: -200, y: -200};
  fill('rgba(0, 0, 0, 0.5)');
  rect(200, 360, width, height / 5);
  
} //screen one

function whereAmI(){
  showScreen1();
  c1.pos = {x: -350, y: -380};
  c2.pos = {x: 350, y: 380};
  avatar.pos = {x: 30, y: 320};
  
  fill(255, 255, 255);
  text("W- Where am I?", 100, 360);
}

function greetings() {
  showScreen1();
  c2.pos = {x: -350, y: -380};
  c3.pos = {x: 350, y: 380};
  avatar.pos = {x: -30, y: -320};
  narrator.pos = {x: 30, y: 330};
  avatar.scale 
  fill(255, 255, 255);
  text("Greetings traveler, you are at Elysium. Well, it used to be Elysium. Now we call it Elysium's fall", 175, 390, 200, height / 5);
}

function whatHappened() {
  showScreen1();
  c3.pos = {x: -350, y: -380};
  c4.pos = {x: 350, y: 380};
  avatar.pos = {x: 30, y: 320};
  narrator.pos = {x: -30, y: -320};
  
  fill(255, 255, 255);
  text("What happened here?", 120, 360);
}

function expo1() {
  background(elysiumBg);
  startButton.pos = {x: -200, y: -200};
  fill('rgba(0, 0, 0, 0.5)');
  rect(200, 360, width, height / 5);
  c4.pos = {x: -350, y: -380};
  c5.pos = {x: 350, y: 380};
  avatar.pos = {x: -30, y: -320};
  narrator.pos = {x: 30, y: 330};
  avatar.scale 
  fill(255, 255, 255);
  text("A long time ago we had lush forests and boundless rivers. We lived in harmony with nature.", 175, 390, 200, height / 5);
}

function expo2() {
  background(elysiumBg2);
  startButton.pos = {x: -200, y: -200};
  fill('rgba(0, 0, 0, 0.5)');
  rect(200, 360, width, height / 5);
  c5.pos = {x: -350, y: -380};
  c6.pos = {x: 350, y: 380};
  avatar.pos = {x: -30, y: -320};
  narrator.pos = {x: 30, y: 330};
  avatar.scale 
  fill(255, 255, 255);
  text("We only ever took what we needed, and we gave to mother nature as much as we could", 175, 390, 200, height / 5);
}

function expo3() {
  background(elysiumBg3);
  startButton.pos = {x: -200, y: -200};
  fill('rgba(0, 0, 0, 0.5)');
  rect(200, 360, width, height / 5);
  c6.pos = {x: -350, y: -380};
  c7.pos = {x: 350, y: 380};
  avatar.pos = {x: -30, y: -320};
  narrator.pos = {x: 30, y: 330};
  avatar.scale 
  fill(255, 255, 255);
  text("We were happy. our children were healthy. Until the factories came and ruined everything. As you can see.", 175, 390, 200, height / 5);
}

function saveUsPlease() {
  background("darkkhaki");
  startButton.pos = {x: -200, y: -200};
  fill('rgba(0, 0, 0, 0.5)');
  rect(200, 360, width, height / 5);
  c7.pos = {x: -350, y: -380};
  c8.pos = {x: 350, y: 380};
  avatar.pos = {x: -30, y: -320};
  narrator.pos = {x: 30, y: 330};
  fill(255, 255, 255);
  text("We need your help. Please gather these artifacts", 175, 390, 200, height / 5);
  moonstoneArtifact.pos = {x: 200, y: 200};
  dragonflyArtifact.pos = {x: 100, y: 200};
  eggArtifact.pos = {x: 300, y: 200};
  seedArtifact.pos = {x: 150, y: 100};
  doveArtifact.pos = {x: 250, y: 100};
}

function level1Welcome() {
  background("darkseagreen");
  c8.pos = {x: -350, y: -380};
  moonstoneArtifact.pos = {x: -200, y: -200};
  dragonflyArtifact.pos = {x: -100, y: -200};
  eggArtifact.pos = {x: -300, y: -200};
  seedArtifact.pos = {x: -150, y: -100};
  doveArtifact.pos = {x: -250, y: -100};
  narrator.pos = {x: -30, y: -330};
  startButton1.pos = {x: 200, y: 275};
  text("You are about to begin the first level. In this level, you are expected to answer three riddles correctly in a row. Good luck.", 200, 250, 300, height / 5);
}

function riddle1() {
  background("darkgoldenrod");
  startButton1.pos = {x: -200, y: -275};
  text("I'm a natural phenomenon, both feared and adored,\n In my absence, we freeze; with my excess, we're floored.\n But beware my new face, brought by humankind's hand,\n Melting glaciers, rising seas—can you guess who I am?", 200, 200, 370, height / 2);
  correct1.pos = {x: 100, y: 200};
  wrong1.pos = {x: 300, y: 200}; 
}

function riddle2() {
  background("olivedrab");
  text("I'm vital for life, colors to behold,\n Yet my presence now brings a story untold.\n Once a lush paradise, now barren and bare,\n Human actions have left me gasping for air.", 200, 200, 370, height / 2);
  correct1.pos = {x: -100, y: -200};
  wrong1.pos = {x: -300, y: -200};
  correct2.pos = {x: 100, y: 200};
  wrong2.pos = {x: 300, y: 200}; 
}

function riddle3() {
  background("wheat");
  fill(0);
  text("I'm a gas that's unseen, yet my effects are grand,\n Trapping heat in the atmosphere, changing the land.\n Produced by our progress, our modern-day pace,\n Guess the name of the gas causing this space.", 200, 200, 370, height / 2);
  correct2.pos = {x: -100, y: -200};
  wrong2.pos = {x: -300, y: -200};
  correct3.pos = {x: 100, y: 200};
  wrong3.pos = {x: 300, y: 200}; 
}

function badAnswer() {
  background("black");
  correct1.pos = {x: -100, y: -200};
  wrong1.pos = {x: -300, y: -200};
  correct2.pos = {x: -100, y: -200};
  wrong2.pos = {x: -300, y: -200};
  correct3.pos = {x: -100, y: -200};
  wrong3.pos = {x: -300, y: -200}; 
  text("Sorry, start again", 200, 200);
  startButton1.pos = {x: 200, y: 275};
  
}

function level1Congrats() {
  background("plum");
  correct3.pos = {x: -100, y: -200};
  wrong3.pos = {x: -300, y: -200};
  text("Congratulations! You got everything right, as was expected from a wise traveller like you. As a reward, the spirits offer you their dragonfly to mark your wisdom", 200, 100, 300, height / 3);
  dragonflyArtifact.pos = {x: 200, y: 200};
  dragonflyArtifact.scale = 0.2;
  nextButton.pos = {x: 200, y: 350};
}

function level2Welcome() {
  background("darkseagreen");
  dragonflyArtifact.pos = {x: -100, y: -200};
  nextButton.pos = {x: -200, y: -350};
  startButton2.pos = {x: 200, y: 275};
  text("You are about to begin the second level. Collect ten rock pieces for the miners in the hills", 200, 250, 300, height / 5);
}

function level2Congrats() {
  background("plum");
  rock.pos = {x: -200, y: -200};
  collector.pos = {x: -200, y: -200};
  text("Congratulations! We knew you could pull it off! The rock combine and compress to form a beatiful moonstone. The miners want you to have it!", 200, 100, 300, height / 3);
  moonstoneArtifact.pos = {x: 200, y: 200};
  moonstoneArtifact.scale = 0.2;
  nextButton2.pos = {x: 200, y: 350};
}

function level3Welcome() {
  background("darkseagreen");
  moonstoneArtifact.pos = {x: -100, y: -200};
  nextButton2.pos = {x: -200, y: -350};
  startButton3.pos = {x: 200, y: 275};
  text("You are about to begin the third level. You found an egg on the forest floor, but the predators want to eat it. And YOU. Get the egg and run!", 200, 200, 300, height / 5);
}

function level3Congrats() {
  background("plum");
  navigate.pos = {x: -200, y: -200};
  snake.pos = {x: -200, y: -200};
  tiger.pos = {x: -200, y: -200};
  walls.x = -1000;
  text("Congratulations! You managed to get the egg and protect it from the predators. Since you took such good care of it, you can have it!", 200, 100, 300, height / 3);
  eggArtifact.pos = {x: 200, y: 200};
  eggArtifact.scale = 0.2;
  nextButton3.pos = {x: 200, y: 350};
}

function level4Welcome() {
  background("darkseagreen");
  eggArtifact.pos = {x: -100, y: -200};
  nextButton3.pos = {x: -200, y: -350};
  startButton4.pos = {x: 200, y: 275};
  text("There's a strange sound coming from the riverside. Let's go investigate", 200, 250, 300, height / 5);
}

function level4Congrats() {
  background("plum");
  oldLady.pos = {x: -200, y: -200};
  c9.pos = {x: -200, y: -200};
  text("Congratulations! You made the right choice! You open your hand to find a seed, already starting to sprout.", 200, 100, 300, height / 3);
  seedArtifact.pos = {x: 200, y: 200};
  seedArtifact.scale = 0.2;
  nextButton4.pos = {x: 200, y: 350};
}

function level5Welcome() {
  background("darkseagreen");
  seedArtifact.pos = {x: -100, y: -200};
  nextButton4.pos = {x: -200, y: -350};
  startButton5.pos = {x: 200, y: 275};
  text("Do you see that? I think something just ran past us", 200, 250, 300, height / 5);
}

function level5Congrats() {
  background("plum");
  runner.pos = {x: -200, y: -200};
  collect.pos = {x: -200, y: -200};
  text("Congratulations! You have collected the last artifact! Now return to the village and watch it bloom!", 200, 100, 300, height / 3);
  doveArtifact.pos = {x: 200, y: 200};
  doveArtifact.scale = 0.2;
  nextButton5.pos = {x: 200, y: 350};
}