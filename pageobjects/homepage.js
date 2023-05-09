const { Builder, By, Key, until } = require("selenium-webdriver");
let BasePage = require("./basepage");
let webdriver = require("selenium-webdriver");

class HomePage extends BasePage {
  enter_search(searchText) {
    driver.findElement(By.css("input[name=q]")).sendKeys(searchText);
    driver.findElement(By.css("input[name=q]")).sendKeys(Key.ENTER);
  }
}

module.exports = new HomePage();
