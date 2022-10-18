const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

// afterAll(async () => {
//     await driver.quit()
// })

test('I can search Movies', async () => {
  let search = await driver.findElement(By.xpath('//input'))
    
  await search.sendKeys('Wanted\n')
  
  await driver.sleep(2000)
})

test('I can cross Movies', async () => {

    let search = await driver.findElement(By.xpath('//span')).click()
    
    await driver.sleep(2000)

})

test('I can delete Movies', async () => {

    let search = await driver.findElement(By.xpath('//li/button')).click()
    
    await driver.sleep(2000)

})  