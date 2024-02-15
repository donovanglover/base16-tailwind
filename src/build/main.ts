import { getSchemesFromPath } from "./lib"

const schemes = getSchemesFromPath('./schemes/base16')

console.log(JSON.stringify(schemes))
