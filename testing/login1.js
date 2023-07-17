const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");
const { waitForElementRender, SendKey, Click } = require("./function");


async function Login(driver, testemail){

  try{
    const FirstnameInput = await waitForElementRender(driver, "input.ng-tns-c170-1")

    await SendKey(driver, FirstnameInput, "Muhammad")
  }
  catch(erro){
    console.log(erro);
  }

  const LastnameInput = await driver.findElement(By.css("input.ng-tns-c170-2"));

  await SendKey(driver, LastnameInput, "Bilal")

  const Email = await driver.findElement(By.css("input.ng-tns-c170-3:nth-child(1)"));

  await SendKey(driver, Email, testemail)

  const Password = await driver.findElement(By.css("input.ng-tns-c170-4:nth-child(1)"));

  await SendKey(driver, Password, "Password123?")

  const ConfirmPassword = await driver.findElement(By.css("input.ng-tns-c170-5:nth-child(1)"));

  await SendKey(driver, ConfirmPassword, "Password123?")

  const ConfirmButton = await driver.findElement(By.css("button.signup-button:nth-child(4)"));

  await Click(driver, ConfirmButton);

  try{
    const CompanyName = await waitForElementRender(driver,  "span.ng-tns-c170-8");

    await SendKey(driver, CompanyName, "Quality Assurance")
  }
  catch(erro){
    console.log(erro);
  }

  const countryCodeDropdown = await driver.findElement(By.css("[formcontrolname='countryPhoneCode'] .select-text"));
  await Click(driver, countryCodeDropdown);
  
  const dropdownOption = await driver.findElement(By.css("peb-select-option:nth-of-type(98)"));
  await Click(driver, dropdownOption);
  
  const phone = await driver.findElement(By.css("input.ng-tns-c170-12"));

  await SendKey(driver, phone, "98965555353");

  const GetStarted = await driver.findElement(By.css(".signup-button"));
  
  await Click(driver, GetStarted);
  
  try{
    const Welcome = await waitForElementRender(driver, ".welcome-screen-content-button > pe-progress-button-content:nth-child(1) > div:nth-child(1)")

    await Click(driver, Welcome)
  }
  catch(erro){
    console.log(erro)
  }
}

exports.Login = Login;