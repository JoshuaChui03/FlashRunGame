"use strict";
/* 
 * Copyright (c) 2012, 2016 Carson Cheng.
 * Licensed under the MIT-License (http://opensource.org/licenses/MIT)
 * which can be found in the file MIT-LICENSE.txt in the LICENSE directory
 * at the root of this project distribution.
 */
// There are a bunch of special variables and functions.
// Here are some notable ones, but there are many more:
// setup, draw, PLAYGROUND_WIDTH, PLAYGROUND_HEIGHT
var GameInfo = {
    "StartingScreenENTER": false,
    "StartMoving": false,
    "StartGame": false,
    "First4Car": 0,
    "AbilityTimer": 0,
    "AbilityUseTimer": 100,
    "Running": false,
    "Phasing": false,
    "Dead": false,
    "321": 100 * 3,
    "Health": 3,
    "InvincibleTimer": 51,
    "HittingCar": false,
    "ResetInvincibleTimer": false,
    "CarHit": false,
    "Hurt": false,
    "AbilityMax": false,
    "Ability": 49,
    "StopMakingAbility": false,
    "ENTERBlink": 10,
    "Score": 0,
    "DeathScreenTimer": 50,
    "ScoreShowDelay": 10,
    "ScoreShow": false
};

var FlashInfo = {
    "id": "Flash",
    "width": 100,
    "height": 100,
    "xpos": 270,
    "ypos": 1000,
    "xspd": 0,
    "yspd": 10,
    "anim": newGQAnimation("img/flash.png"),
    "movingAnim": newGQAnimation("img/flashRunning.png"),
    "running": false,
    "position": 2,
    "pressed": false,
    "phasingAnim": newGQAnimation("img/flashPhasing.png")

};

var BlackFlashInfo = {
    "id": "BlackFlash",
    "width": 100,
    "height": 100,
    "xpos": 270,
    "ypos": 1000,
    "xspd": 0,
    "yspd": 10,
    "anim": newGQAnimation("img/blackflash.png"),
    "movingAnim": newGQAnimation("img/blackflashRunning.png"),
    "running": false

};

var FlashStreakInfo = {
    "id": "FlashStreak",
    "width": 100,
    "height": 118,
    "xpos": 1000,
    "ypos": 1000,
    "xspd": 0,
    "yspd": 0,
    "anim": newGQAnimation("img/lightningTrail.png", 4, 118, 100, $.gQ.ANIMATION_VERTICAL),
    "phaseAnim": newGQAnimation("img/lightningTrailPhase.png", 4, 118, 100, $.gQ.ANIMATION_VERTICAL),
    "running": false
};

var BlackFlashStreakInfo = {
    "id": "BlackFlashStreak",
    "width": 100,
    "height": 118,
    "xpos": 1000,
    "ypos": 1000,
    "xspd": 0,
    "yspd": 0,
    "anim": newGQAnimation("img/RedLightningTrail.png", 4, 118, 100, $.gQ.ANIMATION_VERTICAL),
    "running": false
};

var StartingScreenInfo = {
    "id": "StartingScreen",
    "width": 640,
    "height": 480,
    "xpos": 0,
    "ypos": 0,
    "xspd": 0,
    "yspd": 0,
    "StartAnim": newGQAnimation("img/startAnim.png", 6, 640, 50, $.gQ.ANIMATION_HORIZONTAL),
    "StartAnimLightning": newGQAnimation("img/startAnimLightning.png", 4, 640, 50, $.gQ.ANIMATION_HORIZONTAL),
    "Timer": 10
};

var RoadInfo = {
    "id": "Road",
    "width": 640,
    "height": 480,
    "xpos": 0,
    "ypos": 0,
    "xspd": 0,
    "yspd": 0,
    "Anim": newGQAnimation("img/Road.png"),
    "MovingAnim": newGQAnimation("img/RoadSprite.png", 2, 640, 50, $.gQ.ANIMATION_HORIZONTAL)
};

var DeathScreenInfo = {
    "id": "DeathScreen",
    "width": 640,
    "height": 480,
    "xpos": 0,
    "ypos": 0,
    "xspd": 0,
    "yspd": 0,
    "Anim": newGQAnimation("img/DeathScreen.png"),
    "Anim2": newGQAnimation("img/DeathScreen2.png")
};

var Heart1Info = {
    "id": "Heart1",
    "width": 60,
    "height": 56,
    "xpos": 580,
    "ypos": 0,
    "xspd": 0,
    "yspd": 0,
    "Anim": newGQAnimation("img/Heart1.png")
};

var Heart2Info = {
    "id": "Heart2",
    "width": 60,
    "height": 56,
    "xpos": 580,
    "ypos": 60,
    "xspd": 0,
    "yspd": 0,
    "Anim": newGQAnimation("img/Heart2.png")
};

var Heart3Info = {
    "id": "Heart3",
    "width": 60,
    "height": 56,
    "xpos": 580,
    "ypos": 120,
    "xspd": 0,
    "yspd": 0,
    "Anim": newGQAnimation("img/Heart3.png")
};

var HurtInfo = {
    "id": "Hurt",
    "width": 640,
    "height": 480,
    "xpos": 1000,
    "ypos": 0,
    "xspd": 0,
    "yspd": 0,
    "Anim": newGQAnimation("img/Hurt.png")
};

var DangerInfo = {
    "id": "Danger",
    "width": 60,
    "height": 57,
    "xpos": 1000,
    "ypos": 423,
    "xspd": 0,
    "yspd": 0,
    "Anim": newGQAnimation("img/Danger.png")
};

var AbilityBarAnimInfo = {
    "id": "AbilityBarAnim",
    "width": 224,
    "height": 72,
    "xpos": 1000,
    "ypos": 0,
    "xspd": 0,
    "yspd": 0,
    "Anim": newGQAnimation("img/AbilityBar.png", 50, 224, 50, $.gQ.ANIMATION_HORIZONTAL),
    "ReverseAnim": newGQAnimation("img/AbilityBarReverse.png", 50, 224, 50, $.gQ.ANIMATION_HORIZONTAL)
};

var AbilityBarInfo = {
    "id": "AbilityBar",
    "width": 72,
    "height": 224,
    "xpos": 0,
    "ypos": 0,
    "xspd": 0,
    "yspd": 0,
    "Anim00": newGQAnimation("img/tile00.png"),
    "Anim01": newGQAnimation("img/tile01.png"),
    "Anim02": newGQAnimation("img/tile02.png"),
    "Anim03": newGQAnimation("img/tile03.png"),
    "Anim04": newGQAnimation("img/tile04.png"),
    "Anim05": newGQAnimation("img/tile05.png"),
    "Anim06": newGQAnimation("img/tile06.png"),
    "Anim07": newGQAnimation("img/tile07.png"),
    "Anim08": newGQAnimation("img/tile08.png"),
    "Anim09": newGQAnimation("img/tile09.png"),
    "Anim010": newGQAnimation("img/tile010.png"),
    "Anim011": newGQAnimation("img/tile011.png"),
    "Anim012": newGQAnimation("img/tile012.png"),
    "Anim013": newGQAnimation("img/tile013.png"),
    "Anim014": newGQAnimation("img/tile014.png"),
    "Anim015": newGQAnimation("img/tile015.png"),
    "Anim016": newGQAnimation("img/tile016.png"),
    "Anim017": newGQAnimation("img/tile017.png"),
    "Anim018": newGQAnimation("img/tile018.png"),
    "Anim019": newGQAnimation("img/tile019.png"),
    "Anim020": newGQAnimation("img/tile020.png"),
    "Anim021": newGQAnimation("img/tile021.png"),
    "Anim022": newGQAnimation("img/tile022.png"),
    "Anim023": newGQAnimation("img/tile023.png"),
    "Anim024": newGQAnimation("img/tile024.png"),
    "Anim025": newGQAnimation("img/tile025.png"),
    "Anim026": newGQAnimation("img/tile026.png"),
    "Anim027": newGQAnimation("img/tile027.png"),
    "Anim028": newGQAnimation("img/tile028.png"),
    "Anim029": newGQAnimation("img/tile029.png"),
    "Anim030": newGQAnimation("img/tile030.png"),
    "Anim031": newGQAnimation("img/tile031.png"),
    "Anim032": newGQAnimation("img/tile032.png"),
    "Anim033": newGQAnimation("img/tile033.png"),
    "Anim034": newGQAnimation("img/tile034.png"),
    "Anim035": newGQAnimation("img/tile035.png"),
    "Anim036": newGQAnimation("img/tile036.png"),
    "Anim037": newGQAnimation("img/tile037.png"),
    "Anim038": newGQAnimation("img/tile038.png"),
    "Anim039": newGQAnimation("img/tile039.png"),
    "Anim040": newGQAnimation("img/tile040.png"),
    "Anim041": newGQAnimation("img/tile041.png"),
    "Anim042": newGQAnimation("img/tile042.png"),
    "Anim043": newGQAnimation("img/tile043.png"),
    "Anim044": newGQAnimation("img/tile044.png"),
    "Anim045": newGQAnimation("img/tile045.png"),
    "Anim046": newGQAnimation("img/tile046.png"),
    "Anim047": newGQAnimation("img/tile047.png"),
    "Anim048": newGQAnimation("img/tile048.png"),
    "Anim049": newGQAnimation("img/tile049.png")

};

var PressENTERToStartInfo = {
    "id": "PressENTERToStart",
    "width": 500,
    "height": 27,
    "xpos": 70,
    "ypos": 450,
    "xspd": 0,
    "yspd": 0,
    "Anim": newGQAnimation("img/PressENTERToStart.png")
};




var CarId = [];
var Car = [];
var ObstacleTimer = 24 * 4;
var ObstacleTimerInt = 24 * 4;
var SpeedUpTimer = 24 * 3;
var CarSpeed = 6;
var RandomObstacle = function () {
    var nextIndex;
    var nextIndexPlus;
    var nextCar;
//    var numberOfCars = Math.random() * 2;
//    var numberOfCarsInt = parseInt(numberOfCars);
    var nextCarPosFloat;
    nextCarPosFloat = Math.random() * 3;
    var nextCarPosInt = parseInt(nextCarPosFloat);
    var nextCarPos;
    if (nextCarPosInt == 0) {
        nextCarPos = 110;
    }
    if (nextCarPosInt == 1) {
        nextCarPos = 250;
    }
    if (nextCarPosInt == 2) {
        nextCarPos = 400;
    }

    nextCar = Math.random() * 4;
    var nextCarInt = parseInt(nextCar);
    var nextCarString;

    if (nextCarInt == 0) {
        nextCarString = "0";
    }
    if (nextCarInt == 1) {
        nextCarString = "1";
    }
    if (nextCarInt == 2) {
        nextCarString = "2";
    }
    if (nextCarInt == 3) {
        nextCarString = "3";
    }

    if (SpeedUpTimer == 0) {
        CarSpeed = CarSpeed + 1;
        ObstacleTimerInt = ObstacleTimerInt - 1;
        SpeedUpTimer = 24 * 8;
        if (CarSpeed >= 60) {
            CarSpeed = 60;
        }
        if (ObstacleTimerInt <= 20) {
            ObstacleTimerInt = 20;
        }
    }

    nextIndex = Car.length;
    nextIndexPlus = nextIndex - 1;
    var CarInfo = {
        "id": "Car" + nextIndex,
        "width": 120,
        "height": 208,
        "xpos": nextCarPos,
        "ypos": -208,
        "xspd": 0,
        "yspd": CarSpeed,
        "anim": newGQAnimation("img/Car" + nextCarString + ".png")
    };
    Car[nextIndex] = CarInfo;

    if (ObstacleTimer < 0 && GameInfo["Running"] == true) {
        createSpriteInGroup(CarGroupName, CarInfo["id"], CarInfo["anim"], CarInfo["width"], CarInfo["height"], CarInfo["xpos"], CarInfo["ypos"]);
        CarId.splice(0, 0, nextIndex);
        GameInfo["StartMoving"] = true;
        ObstacleTimer = ObstacleTimerInt;
        GameInfo["First4Car"] = GameInfo["First4Car"] + 1;

    }

    SpeedUpTimer = SpeedUpTimer - 1;
    ObstacleTimer = ObstacleTimer - 1;
};

var WhichCarPickString;
var WhichCarPick;



var backgroundGroupName = "backgroundGroup";
createGroupInPlayground(backgroundGroupName);

var CarGroupName = "CarGroup";
createGroupInPlayground(CarGroupName);

var playerGroupName = "playerGroupName";
createGroupInPlayground(playerGroupName);


var setup = function () {
    createSpriteInGroup(backgroundGroupName, RoadInfo["id"], RoadInfo["MovingAnim"], RoadInfo["width"], RoadInfo["height"], RoadInfo["xpos"], RoadInfo["ypos"]);
    createSpriteInGroup(backgroundGroupName, Heart1Info["id"], Heart1Info["Anim"], Heart1Info["width"], Heart1Info["height"], Heart1Info["xpos"], Heart1Info["ypos"]);
    createSpriteInGroup(backgroundGroupName, Heart2Info["id"], Heart2Info["Anim"], Heart2Info["width"], Heart2Info["height"], Heart2Info["xpos"], Heart2Info["ypos"]);
    createSpriteInGroup(backgroundGroupName, Heart3Info["id"], Heart3Info["Anim"], Heart3Info["width"], Heart3Info["height"], Heart3Info["xpos"], Heart3Info["ypos"]);
    createSpriteInGroup(backgroundGroupName, HurtInfo["id"], HurtInfo["Anim"], HurtInfo["width"], HurtInfo["height"], HurtInfo["xpos"], HurtInfo["ypos"]);
    createSpriteInGroup(backgroundGroupName, DangerInfo["id"], DangerInfo["Anim"], DangerInfo["width"], DangerInfo["height"], DangerInfo["xpos"], DangerInfo["ypos"]);
    createSpriteInGroup(backgroundGroupName, AbilityBarInfo["id"], AbilityBarInfo["Anim00"], AbilityBarInfo["width"], AbilityBarInfo["height"], AbilityBarInfo["xpos"], AbilityBarInfo["ypos"]);
    //createSpriteInGroup(backgroundGroupName, AbilityBarAnimInfo["id"], AbilityBarAnimInfo["Anim"], AbilityBarAnimInfo["width"], AbilityBarAnimInfo["height"], AbilityBarAnimInfo["xpos"], AbilityBarAnimInfo["ypos"]);
    createSpriteInGroup(backgroundGroupName, StartingScreenInfo["id"], StartingScreenInfo["StartAnim"], StartingScreenInfo["width"], StartingScreenInfo["height"], StartingScreenInfo["xpos"], StartingScreenInfo["ypos"]);
    createSpriteInGroup(backgroundGroupName, PressENTERToStartInfo["id"], PressENTERToStartInfo["Anim"], PressENTERToStartInfo["width"], PressENTERToStartInfo["height"], PressENTERToStartInfo["xpos"], PressENTERToStartInfo["ypos"]);
    createSpriteInGroup(playerGroupName, FlashInfo["id"], FlashInfo["anim"], FlashInfo["width"], FlashInfo["height"], FlashInfo["xpos"], FlashInfo["ypos"]);
    createSpriteInGroup(playerGroupName, BlackFlashInfo["id"], BlackFlashInfo["anim"], BlackFlashInfo["width"], BlackFlashInfo["height"], BlackFlashInfo["xpos"], BlackFlashInfo["ypos"]);
    createSpriteInGroup(playerGroupName, FlashStreakInfo["id"], FlashStreakInfo["anim"], FlashStreakInfo["width"], FlashStreakInfo["height"], FlashStreakInfo["xpos"], FlashStreakInfo["ypos"]);
    createSpriteInGroup(playerGroupName, BlackFlashStreakInfo["id"], BlackFlashStreakInfo["anim"], BlackFlashStreakInfo["width"], BlackFlashStreakInfo["height"], BlackFlashStreakInfo["xpos"], BlackFlashStreakInfo["ypos"]);
    createSpriteInGroup(playerGroupName, DeathScreenInfo["id"], DeathScreenInfo["Anim"], DeathScreenInfo["width"], DeathScreenInfo["height"], DeathScreenInfo["xpos"], DeathScreenInfo["ypos"]);
}; // end of setup() function. Notice the braces match!
// there should only ever be ONE setup() function!!!

var FlashRun = function () {

    if (GameInfo["StartingScreenENTER"] == true && GameInfo["StartGame"] == false && GameInfo["Running"] == false) {
        FlashInfo["ypos"] = 250;
        spriteSetY(FlashInfo["id"], FlashInfo["ypos"]);
        GameInfo["StartGame"] = false;
    }

    if (getKeyState(38)) {
        GameInfo["Running"] = true;
    }

    if (GameInfo["Running"] == false) {
        spriteSetAnimation(FlashInfo["id"], FlashInfo["anim"]);
    }
    if (GameInfo["Running"] == true) {
        spriteSetAnimation(FlashInfo["id"], FlashInfo["movingAnim"]);
        FlashInfo["ypos"] = FlashInfo["ypos"] + 1;
        spriteSetY(FlashInfo["id"], FlashInfo["ypos"]);
        if (FlashInfo["ypos"] > 300) {
            FlashInfo["ypos"] = 300;
        }
    }

    if (getKeyState(37) && FlashInfo["position"] == 2 && FlashInfo["pressed"] == false) {
        spriteSetX(FlashInfo["id"], 120);
        FlashInfo["position"] = 1;
        FlashInfo["pressed"] = true;
    }
    if (getKeyState(37) && FlashInfo["position"] == 3 && FlashInfo["pressed"] == false) {
        spriteSetX(FlashInfo["id"], 270);
        FlashInfo["position"] = 2;
        FlashInfo["pressed"] = true;
    }
    if (getKeyState(39) && FlashInfo["position"] == 2 && FlashInfo["pressed"] == false) {
        spriteSetX(FlashInfo["id"], 410);
        FlashInfo["position"] = 3;
        FlashInfo["pressed"] = true;
    }
    if (getKeyState(39) && FlashInfo["position"] == 1 && FlashInfo["pressed"] == false) {
        spriteSetX(FlashInfo["id"], 270);
        FlashInfo["position"] = 2;
        FlashInfo["pressed"] = true;
    }
};

var BlackFlashRun = function () {
    if (GameInfo["StartingScreenENTER"] == true && GameInfo["Running"] == false) {
        BlackFlashInfo["ypos"] = 400;
        spriteSetY(BlackFlashInfo["id"], BlackFlashInfo["ypos"]);
    }

    if (GameInfo["Running"] == false) {
        spriteSetAnimation(BlackFlashInfo["id"], BlackFlashInfo["anim"]);
    }
    if (GameInfo["Running"] == true) {
        spriteSetAnimation(BlackFlashInfo["id"], BlackFlashInfo["movingAnim"]);
        BlackFlashInfo["ypos"] = BlackFlashInfo["ypos"] + 1;
        spriteSetY(BlackFlashInfo["id"], BlackFlashInfo["ypos"]);
    }
};

var Streak = function () {
    var FlashStreakXpos = spriteGetX(FlashInfo["id"]);
    var FlashStreakYpos = spriteGetY(FlashInfo["id"]);

    if (GameInfo["Running"] == false) {
        FlashStreakInfo["xpos"] = 1000;
        FlashStreakInfo["ypos"] = 1000;
        spriteSetXY(FlashStreakInfo["id"], FlashStreakInfo["xpos"], FlashStreakInfo["ypos"]);
        FlashStreakInfo["running"] = false;
    }
    if (GameInfo["Running"] == false) {
        BlackFlashStreakInfo["xpos"] = 1000;
        BlackFlashStreakInfo["ypos"] = 1000;
        spriteSetXY(BlackFlashStreakInfo["id"], BlackFlashStreakInfo["xpos"], BlackFlashStreakInfo["ypos"]);
        BlackFlashStreakInfo["running"] = false;
    }


    if (GameInfo["Running"] == true) {
        FlashStreakInfo["xpos"] = FlashStreakXpos;
        FlashStreakInfo["ypos"] = FlashStreakYpos + 25;
        spriteSetXY(FlashStreakInfo["id"], FlashStreakInfo["xpos"], FlashStreakInfo["ypos"]);
        GameInfo["Running"] = true;
    }
    if (GameInfo["Running"] == true) {
        BlackFlashStreakInfo["xpos"] = BlackFlashInfo["xpos"];
        BlackFlashStreakInfo["ypos"] = BlackFlashInfo["ypos"] + 25;
        spriteSetXY(BlackFlashStreakInfo["id"], BlackFlashStreakInfo["xpos"], BlackFlashStreakInfo["ypos"]);
        GameInfo["Running"] = true;
    }
};

var whenFlashIsRunning = function () {
    if (GameInfo["StartMoving"] == true) {
        if (GameInfo["First4Car"] >= 1) {
            Car[CarId[0]]["ypos"] = Car[CarId[0]]["ypos"] + Car[CarId[0]]["yspd"];
            spriteSetY(Car[CarId[0]]["id"], Car[CarId[0]]["ypos"]);
        }

        if (GameInfo["First4Car"] >= 2) {
            Car[CarId[1]]["ypos"] = Car[CarId[1]]["ypos"] + Car[CarId[1]]["yspd"];
            spriteSetY(Car[CarId[1]]["id"], Car[CarId[1]]["ypos"]);
        }

        if (GameInfo["First4Car"] >= 3) {
            Car[CarId[2]]["ypos"] = Car[CarId[2]]["ypos"] + Car[CarId[2]]["yspd"];
            spriteSetY(Car[CarId[2]]["id"], Car[CarId[2]]["ypos"]);
        }

        if (GameInfo["First4Car"] >= 4) {
            Car[CarId[3]]["ypos"] = Car[CarId[3]]["ypos"] + Car[CarId[3]]["yspd"];
            spriteSetY(Car[CarId[3]]["id"], Car[CarId[3]]["ypos"]);
        }

        if (GameInfo["First4Car"] >= 5) {
            Car[CarId[4]]["ypos"] = Car[CarId[4]]["ypos"] + Car[CarId[4]]["yspd"];
            spriteSetY(Car[CarId[4]]["id"], Car[CarId[4]]["ypos"]);
        }
    }

};

var AfterStartAnim = function () {
    GameInfo["ENTERBlink"] = GameInfo["ENTERBlink"] - 1;
    if (GameInfo["ENTERBlink"] <= 0) {
        GameInfo["ENTERBlink"] = 10;
    }
    if (StartingScreenInfo["Timer"] == 0) {
        spriteSetAnimation(StartingScreenInfo["id"], StartingScreenInfo["StartAnimLightning"]);
    }
    if (GameInfo["StartingScreenENTER"] == false) {
        if (GameInfo["ENTERBlink"] == 10) {
            spriteSetX(PressENTERToStartInfo["id"], 1000);
        }
        if (GameInfo["ENTERBlink"] == 8) {
            spriteSetX(PressENTERToStartInfo["id"], 70);
        }
    }


    StartingScreenInfo["Timer"] = StartingScreenInfo["Timer"] - 1;
};

var GoInGame = function () {

    if (getKeyState(13)) {
        if (GameInfo["StartingScreenENTER"] == false) {
            StartingScreenInfo["xpos"] = 1000;
            spriteSetX(StartingScreenInfo["id"], StartingScreenInfo["xpos"]);
            GameInfo["StartingScreenENTER"] = true;
            spriteSetX(PressENTERToStartInfo["id"], 1000);
        }
    }
};

var OnlyMoveFlashOnce = function () {
    if (!getKeyState(37) && FlashInfo["pressed"] == true) {
        FlashInfo["pressed"] = false;
    }
    if (!getKeyState(39) && FlashInfo["pressed"] == true) {
        FlashInfo["pressed"] = false;
    }
};

var WhenCarHitsFlash = function () {
    if (GameInfo["Phasing"] == false && GameInfo["InvincibleTimer"] == 51) {
        GameInfo["Health"] = GameInfo["Health"] - 1;

        if (GameInfo["Health"] == 2 && GameInfo["InvincibleTimer"] == 51) {
            spriteSetX(Heart3Info["id"], PLAYGROUND_WIDTH);
            GameInfo["Hurt"] = true;
        }
        if (GameInfo["Health"] == 1 && GameInfo["InvincibleTimer"] == 51) {
            spriteSetX(Heart2Info["id"], PLAYGROUND_WIDTH);
            GameInfo["Hurt"] = true;
        }
        if (GameInfo["Health"] == 0 && GameInfo["InvincibleTimer"] == 51) {
            spriteSetX(Heart1Info["id"], PLAYGROUND_WIDTH);
            GameInfo["Dead"] = true;

        }
    }

    GameInfo["HittingCar"] = true;
};

var ResetHitTimer = function () {
    if (GameInfo["HittingCar"] == true && GameInfo["Phasing"] == false) {
        GameInfo["InvincibleTimer"] = GameInfo["InvincibleTimer"] - 1;
    }

    if (GameInfo["InvincibleTimer"] <= -1) {
        GameInfo["HittingCar"] = false;
        GameInfo["InvincibleTimer"] = 51;
        GameInfo["Hurt"] = false;
    }
};

var ResetHealth = function () {
    if (GameInfo["Health"] == 3) {
        spriteSetX(Heart3Info["id"], 580);
        spriteSetX(Heart2Info["id"], 580);
        spriteSetX(Heart1Info["id"], 580);
    }
};

var HurtScreen = function () {

    if (GameInfo["Hurt"] == true && GameInfo["InvincibleTimer"] > 0) {
        GameInfo["HurtBlink"] = GameInfo["HurtBlink"] - 1
        spriteSetX(HurtInfo["id"], 0);
        spriteSetX(DangerInfo["id"], 580);
    }
    if (GameInfo["Hurt"] == false) {
        spriteSetX(HurtInfo["id"], 1000);
        spriteSetX(DangerInfo["id"], 1000);
    }
};

var DeathScreen = function () {
    if (GameInfo["Dead"] == false) {
        spriteSetX(DeathScreenInfo["id"], 1000);
    }
    if (GameInfo["Dead"] == true) {
        spriteSetX(DeathScreenInfo["id"], 0);
        GameInfo["StartingScreenENTER"] = false;
        consolePrint(GameInfo["Score"]);
        GameInfo["DeathScreenTimer"] = GameInfo["DeathScreenTimer"] - 1;
        if (GameInfo["DeathScreenTimer"] <= 0) {
            spriteSetAnimation(DeathScreenInfo["id"], DeathScreenInfo["Anim2"]);
            GameInfo["ScoreShowDelay"] = GameInfo["ScoreShowDelay"] - 1;
            if(GameInfo["ScoreShowDelay"]<= 0){
                GameInfo["ScoreShowDelay"] = 10;
                GameInfo["ScoreShow"] = true;
            }
        }
        if (getKeyState(13)) {
            GameInfo["Dead"] = false;
            GameInfo["StartingScreenENTER"] = true;
            GameInfo["Health"] = 3;
            GameInfo["AbilityTimer"] = 0;
            CarSpeed = 6;
            GameInfo["Score"] = 0;
            ObstacleTimerInt = 24 * 4;
            spriteSetAnimation(DeathScreenInfo["id"], DeathScreenInfo["Anim2"]);
            GameInfo["DeathScreenTimer"] = 50;
        }
    }
};

var ScoreCounter = function () {
//    if (GameInfo["ScoreShowDelay"] <= 0){
//        GameInfo["ScoreShow"] = true;
//    }
    if(GameInfo["ScoreShow"] == true){
        sprite("Score").text(GameInfo["Score"]);
        createTextSpriteInGroup(backgroundGroupName, "Score", 100, 100);
        sprite("Score").css("background-color", "rgba(0, 0, 0, 0)");
        sprite("Score").css("font-weight", "bold");
        consolePrint("hi");
    }
};

var Phase = function () {
    if (getKeyState(32) && GameInfo["AbilityTimer"] > 1) {
        spriteSetAnimation(FlashInfo["id"], FlashInfo["phasingAnim"]);
        GameInfo["AbilityTimer"] = GameInfo["AbilityTimer"] - 1.2;
        GameInfo["Phasing"] = true;
    }

    if (!getKeyState(32)) {
        GameInfo["Phasing"] = false;
    }
    if (getKeyState(32) && GameInfo["AbilityTimer"] < 1) {
        GameInfo["Phasing"] = false;
    }

};


var PrintAbility = function () {
    if (GameInfo["Running"] == true && GameInfo["Phasing"] == false && GameInfo["AbilityMax"] == false) {
        GameInfo["AbilityTimer"] = GameInfo["AbilityTimer"] + 0.1;
        if (GameInfo["AbilityTimer"] >= 50) {
            GameInfo["AbilityTimer"] = 50;
        }
    }
    var AbilityPercentFloat = GameInfo["AbilityTimer"] * 2;
    var AbilityPercent = parseInt(AbilityPercentFloat);
    sprite("AbilityPercent").text(AbilityPercent + "%");
    createTextSpriteInGroup(backgroundGroupName, "AbilityPercent", 40, 20)
    sprite("AbilityPercent").css("background-color", "rgba(0, 0, 0, 0)");
    sprite("AbilityPercent").css("font-weight", "bold");
    spriteSetY("AbilityPercent", 224);
    spriteSetX("AbilityPercent", 15);
};

var Invincible = function () {
    GameInfo["Invincible"] = GameInfo["Invincible"] - 1;
    if (GameInfo["Invincible"] <= 0) {
        GameInfo["Invincibility"] = false;
    }
};
var AbilityNum;
var AbilityNumInt;
var AbilityBar = function () {
    if (GameInfo["Running"] == true) {
        AbilityNum = GameInfo["AbilityTimer"] - 1;
        AbilityNumInt = parseInt(AbilityNum);
        spriteSetAnimation(AbilityBarInfo["id"], AbilityBarInfo["Anim0" + AbilityNumInt]);
    }

};

var draw = function () {


    if (GameInfo["AbilityTimer"] >= 100) {
        GameInfo["AbilityTimer"] = 100;
        GameInfo["AbilityMax"] = true;
    }
    if (GameInfo["StartingScreenENTER"] == true) {
        RandomObstacle();
        Streak();
        PrintAbility();
    }
    if (GameInfo["Running"] == true) {
        whenFlashIsRunning();
    }
    if (GameInfo["Dead"] == false && GameInfo["Running"] == true) {
        GameInfo["Score"] = GameInfo["Score"] + 1;
    }
    FlashRun(FlashInfo);
    BlackFlashRun(BlackFlashInfo);
    AfterStartAnim();
    GoInGame();
    if (!getKeyState(37) && !getKeyState(39)) {
        OnlyMoveFlashOnce();
    }
    Phase();
    DeathScreen();
    forEachSpriteGroupCollisionDo(FlashInfo["id"], CarGroupName, WhenCarHitsFlash);
    ResetHitTimer();
    ResetHealth();
    HurtScreen();
    AbilityBar();
    consolePrint(GameInfo["Score"]);
    consolePrint(GameInfo["ScoreShowDelay"]);
    consolePrint(GameInfo["ScoreShow"]);
    ScoreCounter();

}; // end of draw() function. Notice the braces match!
// there should only ever be ONE draw() function!!!
