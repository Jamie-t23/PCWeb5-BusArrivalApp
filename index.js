 
 
const { default: axios } = require("axios")

const busStop = "18141"
const api = `http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=${busStop}`


const config = {
  headers: {
    'AccountKey': 'xHrBZD3HTbqeGcgRVnd/1A=='
  }
}

async function loadBusData() {
  console.log("start")
  const res = await axios.get(api,config)
   // .then((res) => console.log(res.status))
  //.catch((err) => {
  //  console.log(err)
  //})
  // console.log("end")

  console.log(res.data.Services)
  console.log("end")
}

loadBusData()
