const puppeteer = require("puppeteer");
var shell = require('shelljs');
const schedule = require('node-schedule');





const job2 = schedule.scheduleJob('45 *  * * * *', async function(){
  await second();
  await console.log('sec Human');
});


async function first(){

  (
    async function main(){

    // puppeteer ingane aan declare cheyya

    const browser = await puppeteer.launch({
      userDataDir: 'C:\Users\Alsha\AppData\Local\Google\Chrome\User Data','headless':false,});
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36"
    );
    
 

    //ith aa browseril whatsapp pageilott pokum
    await page.goto("https://web.whatsapp.com/");
   
    function
    
    // whatsap webil complete message sectionn wait aakum load aakan
    await page.waitForSelector("._ccCW ");
    await delay(5000);

    //mukalthe load aay 5 sec kaynal <name of group> enna peril ulle term il click cheyyum
    const contactName = "Ad";
    await page.click(`span[title='${contactName}']`);
    await page.waitForSelector("._13NKt");
    await delay(5000);
    //ith wap webil message input cheyne sathalth click cheyyum and wait for typing
 const inp = await page.$(
    "#main > footer > div._2BU3P.tm2tP.copyable-area > div._1SEwr > div > div.p3_M1 > div > div._13NKt.copyable-text.selectable-text"
  );

    //Ethra message venm athrem repeat aakum
    const amountOfMessages = 1;

    //based on the top thaza repeat adikum 1 iital normal aay work aakum


  for (let i = 0; i < amountOfMessages; i++) {
    await inp.type("ith first group...njn bot");
    await page.keyboard.press("Enter");
  }
  // thaze kodtha delay function prakaaram 3 sec kayn aduthe execute cheyyum
      await delay(3000);
  // 3 sec kaynal aa browser execute cheyyum    
  await  browser.close();
})();

}






function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}



