'use strict'

const Fs = require('fs')  
const Path = require('path')  
const Axios = require('axios')

async function downloadImage (url,fn) {

  // const url = url
  const path = Path.resolve(__dirname, 'images', fn)

  // axios image download with response type "stream"
  const response = await Axios({
    method: 'GET',
    url: url,
    responseType: 'stream'
  })
// axios.post('/yt/resources/tree',  {query: this.query, status: this.status}) 

  // pipe the result stream into a file on disc
  response.data.pipe(Fs.createWriteStream(path))

  // return a promise and resolve when download finishes
  return new Promise((resolve, reject) => {
    response.data.on('end', () => {
      resolve()
    })

    response.data.on('error', () => {
      reject()
    })
  })

}
var url = []
var fn = []
url[0] = 'https://unsplash.com/photos/AaEQmoufHLk/download?force=true'
fn[0] = 'code.jpg'
url[1] = 'https://theysaidso.com/img/bgs/hang_on_building_top.jpg'
fn[1] = "hang_on_building_top.jpg"
downloadImage(url[1],fn[1])
