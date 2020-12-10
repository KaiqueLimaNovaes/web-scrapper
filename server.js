const express = require('express');
const puppeteer = require('puppeteer');

const server =express();

server.get('/', async (request, response)=>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.alura.com.br/formacao-front-end');
    //await page.screenshot({path: 'example.png'});

    // Get the "viewport" of the page, as reported by the page.
    const dimensions = await page.evaluate(() => {
        return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        deviceScaleFactor: window.devicePixelRatio
        };
    });

    console.log('Dimensions:', dimensions);

    await browser.close();
    
    //pegar dados da pagina e imprimir
    response.send({
        "id": 33082,
        "code": "front-end",
        "kind": "DEGREE",
        "kindDisplayName": "Formação",
        "kindSlugDisplayName": "formacao",
        "situation": "PUBLISHED",
        "title": "Front End",
        "subtitle": "Do zero a uma carreira de sucesso no mercado web, com HTML, CSS, JavaScript!",
    });
});

const port = 3000;
server.listen(port, () => {
    console.log(`
        Server sucess !!!
        Access in http://localhost:${port}
    `);
});

/*
(async () => {
  
})();
*/