const puppeteer = require("puppeteer");
var shell = require('shelljs');
const schedule = require('node-schedule');

// const job is the message to be done 

const runner1 = schedule.scheduleJob({hour: 4,minute: 5}, async function(){
  var a="Ad"; //name of the group
  var b= 1; // no. of repeat
  var c=`GOOD Evening 🌨️☃️☃️ Have a great day 🤗💐 ⚠️ Please have your wake up drink and breakfast on time🥗🍵`; //message to send
    await runBot(a,b,c);
    await console.log(`${a} Done`);
  });

// Since we are sending to two groups at two different times, copy/paste the jobs for more

const runner2 = schedule.scheduleJob({hour: 5,minute: 5}, async function(){
var a="Grp2"; //name of the group
var b= 1; // no. of repeat
var c=`GOOD Night🌨️☃️☃️ Have a great sleep 🤗💐 ⚠️ Poi kedann orangada`; //message to send
  await runBot(a,b,c);
  await console.log(`${a} Done`);
});

//Enter the runner till here

async function runBot(a,b,c){

     // puppeteer ingane aan declare cheyya

    const browser = await puppeteer.launch({
    userDataDir: 'C:\Users\Alsha\AppData\Local\Google\Chrome\User Data','headless':false,});
      
    const page = await browser.newPage();
    await page.setUserAgent("Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36");
    
    //ith aa browseril whatsapp pageilott pokum
    await page.goto("https://web.whatsapp.com/");
    await delay(5000);
    
    // whatsap webil complete message sectionn wait aakum load aakan
    await page.waitForSelector("._ccCW ");
    await delay(5000);

    //mukalthe load aay 5 sec kaynal <name of group> enna peril ulle term il click cheyyum
    const contactName = a;
    await page.click(`span[title='${contactName}']`);
    await page.waitForSelector("._13NKt");
    await delay(5000);
    //ith wap webil message input cheyne sathalth click cheyyum and wait for typing
    const inp = await page.$(
      "#main > footer > div._2BU3P.tm2tP.copyable-area > div._1SEwr > div > div.p3_M1 > div > div._13NKt.copyable-text.selectable-text"
    );

    //Ethra message venm athrem repeat aakum
    const amountOfMessages = b;
  
    //based on the top thaza repeat adikum 1 iital normal aay work aakum
  
    for (let i = 0; i < amountOfMessages; i++)
    {
         await inp.type(c);
         await page.keyboard.press("Enter");
    }
  
    // thaze kodtha delay function prakaaram 3 sec kayn aduthe execute cheyyum
  
        await delay(3000);
  
    // 3 sec kaynal aa browser execute cheyyum    
  
        await  browser.close();
}

function delay(time) {
  return new Promise(function (resolve) {
  setTimeout(resolve, time);
  });
}
