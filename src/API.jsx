import { Fetch } from "./Utils"
import { api_base } from "./Config"

async function getHotels(filter) {
  var url = api_base + '/hotel/?'
  Object.keys(filter).forEach(x => {
    url = url + x + '=' + filter[x] + '&'
  })
  const r = await Fetch(url)
  const j = await r.json()
  return j
}

async function getCities(filter) {
  const url = api_base + '/city?country_name=ban'
  const r = await Fetch(url)
  const j = await r.json()
  var tmp = []
  for (var i = 0; i < j.length; i++) {
    tmp.push({
      label: j[i].name,
      value: j[i].city_id
    })
  }
  return tmp
}

export {
  getHotels,
  getCities
}