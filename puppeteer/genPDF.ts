import { launch } from 'puppeteer'
/**
 * genPDF
 * url  ex: http://localhost:3000/
 * path ex: './myfile.pdf'
 */
async function genPDF(url: string, path: string) {
  console.log('url', url)
  console.log('path', path)
  try {
    const browser = await launch({ args: ['--no-sandbox'] })
    const page = await browser.newPage()

    await page.setViewport({ width: 794, height: 1122, deviceScaleFactor: 2 })

    await page.goto(url, {
      waitUntil: 'networkidle2',
    })

    await delay(2000) //字型載入比較久，多等一下。

    await page.emulateMediaType('screen')

    // remove header
    await page.evaluate(`
      document.querySelector("header").remove()
    `)

    await page.evaluate(`
      document.querySelector("footer").remove()
    `)

    await page.evaluate(`
      document.querySelector("#pageloader").remove()
    `)

    await page.pdf({
      path: path,
      format: 'A4',
      printBackground: true,
      displayHeaderFooter: true,
      margin: {},
    })

    console.log('done')
    await browser.close()
    // process.exit()
    return
  } catch (e) {
    throw e
  }
}

function delay(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, ms)
  })
}

export default genPDF
