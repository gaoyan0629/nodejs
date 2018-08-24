const axios = require('axios')
const chalk = require('chalk');

const url = "https://theysaidso.com/img/bgs/hang_on_building_top.jpg"
var g_res = {}

// make a get request to the url
axios({
  method: 'get',
  url: url,
  headers: { 'Accept': 'application/json' }, // this api needs this header set for the request
  params: { category: 'management' }, 
}).then(res => {
  console.dir(res);
  g_res = res
  const quote = res.data.contents.quotes[0].quote
  const author = res.data.contents.quotes[0].author
  const log = chalk.green(`${quote} - ${author}`) // we use chalk to set the color green on successful response
  console.log(log)
}).catch(err => {
  const log = chalk.red(err) // we set the color red here for errors.
  console.log(log)
})
