import {User} from './User';
import {Company} from "./Company";
import { Map, LatLng, TileLayer, MapOptions} from "leaflet";

const user = new User()
console.log(user)

const company = new Company()
console.log(company)

let map = new Map("map")
map.setView(new LatLng(51.505, -0.09), 13);
let layer = new TileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' })
layer.addTo(map)