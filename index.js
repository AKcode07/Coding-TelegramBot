const axios = require('axios');
const { Telegraf } = require('telegraf');
const bot = new Telegraf(Token);

let binarysearch = `
  let recursiveFunction = function (arr, x, start, end) {
  
      // Base Condition
      if (start > end) return false;
  
      // Find the middle index
      let mid = Math.floor((start + end) / 2);
  
      // Compare mid with given key x
      if (arr[mid] === x) return true;
  
      // If element at mid is greater than x,
      // search in the left half of mid
      if (arr[mid] > x)
          return recursiveFunction(arr, x, start, mid - 1);
      else
  
          // If element at mid is smaller than x,
          // search in the right half of mid
          return recursiveFunction(arr, x, mid + 1, end);
  }
  
  // Driver code
  let arr = [1, 3, 5, 7, 8, 9];
  let x = 5;
  
  if (recursiveFunction(arr, x, 0, arr.length - 1)) {
      console.log("Element found!");
  }
  else { console.log("Element not found!"); }
  
  x = 6;
  
  if (recursiveFunction(arr, x, 0, arr.length - 1)) {
      console.log("Element found!");
  }
  else { console.log("Element not found!"); }
`;


bot.start((ctx) => ctx.reply('Welcome to Coding World By AK'));
bot.command('thankyou', (ctx) => ctx.reply("Welcome And Thank You for Your Time :)"));
bot.command('binarysearchjs', (ctx) => ctx.reply(binarysearch));
bot.command('whomadethis', (ctx) => ctx.reply("Ashwin Kumavat"));
bot.command('binarytreejs', async function (ctx) {
    const response = await axios.get('https://raw.githubusercontent.com/singhsanket143/FrontendDSA/master/Aug_29/trees.js');
    return ctx.reply(response.data);
});
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.launch();
