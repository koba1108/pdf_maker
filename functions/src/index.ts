import * as functions from 'firebase-functions'

const {onRequest} = functions.https

const handlers = {
  helloWorld(req: functions.https.Request, res: functions.Response) {
    res.send("Hello from Firebase!")
  },
  makePdf(req: functions.https.Request, res: functions.Response) {
    res.send("Hello from Firebase!")
  }
}

export const helloWorld = onRequest(handlers.helloWorld)
export const makePdf = onRequest(handlers.makePdf)
