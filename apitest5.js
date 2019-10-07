const fetch = require(`node-fetch`);
const fs = require(`fs`);
const sample = {

    id: 1,
    catalog_id: 38423,
    type_name: `city`,
    category_id: 2,
    contact_id: 1,
    type_name: "",
    pdf_catalog_page_id: "",
    pdf_annotation_id: "",
    product_id: 1,
    search_key: "",
    page_id: '',
    merchant_id: 1,
    category_name: "",
    member_id: 1,
    legacy_catalog_id: 1,
    group_id: 1,
    name: "",
}
const endpoints = [
    `/apps/${sample.name}/catalog/${sample.catalog_id}`,
    `/apps/states/${sample.catalog_id}`,
    `/apps/feed/processed/${sample.catalog_id}`
   
];



module.exports.test = function (api, filepath) {

    endpoint_count = 0;
    var arr = {};
    var promises = [];

    console.log(arr);
    var a;
    endpoints.forEach(async endpoint => {

        arr[endpoint] = "";
        var apicall = api + endpoint + '?limit=1';
        promises.push(fetch(apicall).then(function (data) {
            return data.json().catch(function (error) {
                console.log(apicall + ` has nothing`)
            });
        })
            .then(function (json) {
                arr[endpoint] = json;
            }));
    });

    Promise.all(promises).then(() => {

        console.log(arr)

        fs.writeFile(filepath, JSON.stringify(arr, null, 4), `utf8`, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log(`saved`)//Everything went OK!
            }
        });
    });
}