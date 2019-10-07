var tester = require('./apitest5.js')
var api1=`http://api.catalogs.com/v1`;
var api2=`http://api-qa.catalogs.com/v1`;
tester.test(api2, './api1.json');
tester.test(api1, './api2.json');