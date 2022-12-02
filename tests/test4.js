// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Test 4: Filtering search results', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Filter Price', async function() {
    // Test name: Filter Price
    // Step # | name | target | value
    // 1 | open | / | 
    await driver.get("http://localhost:3000/")
    // 2 | setWindowSize | 1630x1320 | 
    await driver.manage().window().setRect({ width: 1630, height: 1320 })
    // 3 | click | xpath=//div[@id='root']/div/span/header/div/div/a | 
    await driver.findElement(By.xpath("//div[@id=\'root\']/div/span/header/div/div/a")).click()
    // 4 | click | id=search-zip | 
    await driver.findElement(By.id("search-zip")).click()
    // 5 | type | id=search-zip | 95819
    await driver.findElement(By.id("search-zip")).sendKeys("95819")
    // 6 | click | css=.MuiButton-root | 
    await driver.findElement(By.css(".MuiButton-root")).click()
    // 7 | click | id=max-price | 
    await driver.findElement(By.id("max-price")).click()
    // 8 | type | id=max-price | 10
    await driver.findElement(By.id("max-price")).sendKeys("10")
  })
  it('Filter Equipment', async function() {
    // Test name: Filter Equipment
    // Step # | name | target | value
    // 1 | open | / | 
    await driver.get("http://localhost:3000/")
    // 2 | setWindowSize | 1648x1341 | 
    await driver.manage().window().setRect({ width: 1648, height: 1341 })
    // 3 | click | linkText=Find a Gym | 
    await driver.findElement(By.linkText("Find a Gym")).click()
    // 4 | mouseOver | linkText=Find a Gym | 
    {
      const element = await driver.findElement(By.linkText("Find a Gym"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 5 | mouseOut | linkText=Find a Gym | 
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    // 6 | click | id=search-zip | 
    await driver.findElement(By.id("search-zip")).click()
    // 7 | type | id=search-zip | 95819
    await driver.findElement(By.id("search-zip")).sendKeys("95819")
    // 8 | mouseDown | id=filter-equip | 
    {
      const element = await driver.findElement(By.id("filter-equip"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    // 9 | mouseUp | css=#menu- > .MuiBackdrop-root | 
    {
      const element = await driver.findElement(By.css("#menu- > .MuiBackdrop-root"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    // 10 | click | css=body | 
    await driver.findElement(By.css("body")).click()
    // 11 | click | css=#menu- .MuiButtonBase-root:nth-child(2) | 
    await driver.findElement(By.css("#menu- .MuiButtonBase-root:nth-child(2)")).click()
    // 12 | mouseOver | css=.MuiButton-root | 
    {
      const element = await driver.findElement(By.css(".MuiButton-root"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 13 | click | css=.MuiButton-root | 
    await driver.findElement(By.css(".MuiButton-root")).click()
    // 14 | mouseOut | css=.MuiButton-root | 
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
  })
})
