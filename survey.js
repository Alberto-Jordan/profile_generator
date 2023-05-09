const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (meal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (food) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              console.log(`\nHi ${name}! So, you like ${activity} and listen to ${music} while doing that. Your favourite meal is ${meal} and your favourite thing to eat for that meal is ${food}. Your favourite sport is ${sport} and your superpower is ${superpower}. Thank you for sharing!`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
