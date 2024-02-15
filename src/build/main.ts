import { getSchemesFromPath } from "./lib"

(async () => {
  const schemes = await getSchemesFromPath('./schemes/base16')

  console.log(JSON.stringify(schemes))
})()
