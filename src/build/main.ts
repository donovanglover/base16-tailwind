import { getSchemesFromPath } from "./lib"

const schemes = await getSchemesFromPath('./schemes/base16')

console.log(JSON.stringify(schemes))
