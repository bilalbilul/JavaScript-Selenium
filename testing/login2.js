const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");
const { waitForElementRender, SendKey, Click } = require("./function");


async function Login(driver, testemail){
// FIll information user
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


  // FIll Business Information
  try{
    const CompanyName = await waitForElementRender(driver,  "span.ng-tns-c170-8");

    await SendKey(driver, CompanyName, "Quality Assurance")
  }
  catch(erro){
    console.log(erro);
  }

  const industry = await driver.findElement(By.css(".mat-autocomplete-trigger"));
  await Click(driver, industry);

  const eletronics = await waitForElementRender(driver, "#mat-option-4 > span:nth-child(1) > div:nth-child(1) > span:nth-child(1)");
  await Click(driver, eletronics);

  const countryCodeDropdown = await driver.findElement(By.css("pe-select-phone-code"));
  await Click(driver, countryCodeDropdown);
  
  const dropdownOption = await driver.findElement(By.css("peb-select-option:nth-of-type(98)"));
  await Click(driver, dropdownOption);

  const phone = await driver.findElement(By.css("input.ng-star-inserted"));

  await SendKey(driver, phone, "98965555353");

  const vat = await driver.findElement(By.css("input.ng-tns-c170-14"));

  await SendKey(driver, vat, "0100009100000");

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