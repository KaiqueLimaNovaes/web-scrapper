const express = require('express');
const puppeteer = require('puppeteer');

const server =express();

server.get('/', async (request, response)=>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // A linha a seguir indica a pagina que deve ser acessada
    await page.goto('https://www.globo.com/');
    //await page.screenshot({path: 'example.png'});

    // Get the "viewport" of the page, as reported by the page.
    const pageContent = await page.evaluate(() => {
        return {
            // A linha a seguir indica qual elemento eu estou pegando
            info: document.querySelector('.hui-premium__title').innerText
        };
    });

    console.log('pageContent:', pageContent);

    await browser.close();
    
    //pegar dados da pagina e imprimir
    response.send({
        info: pageContent.info,
    });
});

const port = 3001;
server.listen(port, () => {
    console.log(`
        Server sucess !!!
        Access in http://localhost:${port}
    `);
});