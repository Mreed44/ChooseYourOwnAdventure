// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You come across a dark cave",
            choices: [
                {
                    text: "Enter the cave",
                    nextLevel: "cave",
                },

                {
                    text: "Keep on moving",
                    nextLevel: "field",
                },
            ]
        },

        cave: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You come across a fire monster!",
            choices: [
                {
                    text: "Grab fire extinguisher",
                    nextLevel: "faceOff",
                },
                {
                    text: "Tip-toe out of the cave",
                    nextLevel: "field",
                },
            ]
        },

        field: {
            message: "You are now in a sunny field",
            choices: [
                {
                    text: "Take a nap in the grass",
                    nextLevel: "niceDay",
                },
                {
                    text: "Pick some flowers",
                    nextLevel: "niceDay",
                },
            ]
        },
        faceOff: {
            message: "EXTINGUISH!",
            choices: [
                {
                    text: "Spray fire monster!",
                    nextLevel: "end",
                },
                 {
                    text: "Have a chat and see if it's a friendly fire monster",
                    nextLevel: "teaTime",
                },
            ]
        },
        niceDay: {
            message: "Well, you've had quite a nice day...",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start",
                },
            ]
        },
        teaTime: {
            message: "Fire monster matches kindness with kindness and invites you to tea time. Enjoy your new friend.",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start",
                },
            ]
        },
        end: {
            message: "Fire monsters are pretty powerful. You're decision, however brave, was not advisable.",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start",
                },
            ]
        },
        
    }
};
