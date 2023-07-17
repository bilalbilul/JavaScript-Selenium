const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");
const { waitForElementRender, SendKey, Click, Validate } = require("./function");
const { Login } = require("./login2");


async function test2(){
  
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://commerceos.staging.devpayever.com/registration/santander");

  //Login
  await Login(driver, "mawar123@gmail.com");

  let names = await Validate(driver);

  if(names.includes("Transactions") == true){
    console.log("The Transactions field are present on the dashboard")
  }else{
    console.log("The Transactions field are not present on the dashboard")
  }

  if(names.includes("Checkout") == true){
    console.log("The Checkout field are present on the dashboard")
  }else{
    console.log("The Checkout field are not present on the dashboard")
  }

  if(names.includes("Connect") == true){
    console.log("The Connect field are present on the dashboard")
  }else{
    console.log("The Connect field are not present on the dashboard")
  }

  if(names.includes("Point of Sale") == true){
    console.log("The Point of Sale field are present on the dashboard")
  }else{
    console.log("The Point of Sale field are not present on the dashboard")
  }

  if(names.includes("Settings") == true){
    console.log("The Settings field are present on the dashboard")
  }else{
    console.log("The Settings field are not present on the dashboard")
  }

  setInterval(function(){
    driver.quit();
  }, 10000);
}

test2();