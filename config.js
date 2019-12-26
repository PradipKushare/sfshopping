var SITEURL      = 'https://localshouts.com/';
var ApiPath = 'https://localshouts.com/api/';
var axios = require('axios');
var Api = axios.create({
  baseURL: ApiPath,
  timeout: 100000,
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
});



// var SITEURL      = 'http://192.168.1.5:3000/';
// var ApiPath = 'http://192.168.1.8/hippa-equip/api/';
// var PHPURL = 'http://192.168.1.8/hippa-equip/';
// //var DOMAINURL = 'http://192.168.1.8/hippa-equip/';
// var DOMAINURL = '/';
// var imgPathBanner = 'https://localshouts.com/assets/user_data/localshouts/photos/';
// var imgPath = 'https://s3.ap-south-1.amazonaws.com/media.netpebecho.com/localshouts/photos/';


// var axios = require('axios');
// var Api = axios.create({
//   baseURL: ApiPath,
//   timeout: 100000,
//   headers: {'Content-Type': 'application/x-www-form-urlencoded'},
// });


module.exports={
	 SITEURL,ApiPath,Api
}

