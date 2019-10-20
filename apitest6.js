const fetch = require('node-fetch');
const fs = require('fs');

const sample = {
    catalog_id: 1,
    type_name: `city`,
    category_id: 2,
}
const endpoints = [
    // `/catalogs/${sample.catalog_id}`,
    // `/catalogs/${sample.catalog_id}`,
    // `/catalogs/${sample.catalog_id}/active`,
    // `/catalogs/${sample.catalog_id}/active`,
    // `/catalogs/${sample.catalog_id}/products`
    `http://api.l0g.be/`,
    `http://api.l0g.be/v1/`,
    'http://api.l0g.be/v1/catalogs'
];
(async()=>{

    for (let index = 0; index < endpoints.length; index++) {
        const endpoint = endpoints[index];
    
        
        var apicall = endpoint;
        //'http://api.catalogs.com/v1' + 
        try{
    
            const response = await fetch(apicall);
            const text = await response.text()
            fs.writeFileSync(`./json/${endpoint.replace('/', '_')}.json`, JSON.stringify(text, null, 4))
            console.log(text)
            const json = await response.json()
            fs.writeFileSync(`./json/${endpoint.replace('/', '_')}.json`, JSON.stringify(json, null, 4))
        }catch(error){
            fs.appendFileSync(
                'error.log', error.message
            )
        }
    
         
    };
})();
   
   
   
   
    // .then(json => console.log(`Success!! Incoming json`))
    // const content = JSON.stringify(apicall)
    // fs.writeFile('file2.json', content, (err) => {

    //     if (err) throw err;
    //     console.log('The file has been saved!');
    // });


    //comparing JSON
