import { getSchemesFromPath } from './lib'

void (async () => {
  const schemes = await getSchemesFromPath('./schemes/base16')

  console.log(JSON.stringify(schemes))
})()
