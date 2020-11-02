const functions = require('firebase-functions')
const ical = require('node-ical')
const ics = require('ics')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors({ origin: true }))

app.post('/parseICS', (req, res) => {
  const body = req.body.toString()
  const ics = ical.sync.parseICS(body)
  const mapped = Object.values(ics).map(
    (item) =>
      (item = {
        summary: item.summary,
        description: item.description,
        start: item.start,
      })
  )
  res.json(mapped)
})

app.post('/downloadIcal', (req, res) => {
  const body = req.body
  const now = new Date()
  const events = body.map((item) => {
    const day = parseInt(item.date.split('/')[0])
    const month = parseInt(item.date.split('/')[1])
    return (item = { title: item.summary, recurrenceRule: 'FREQ=YEARLY', startOutputType: 'local', duration: {hours: 24}, description: item.description, start: [now.getFullYear(), month, day, 0, 0]})
  })
  const { error, value } = ics.createEvents(events)
  if (error) console.log(error);
  res.send(value)
})

exports.api = functions.https.onRequest(app)