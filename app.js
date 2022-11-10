const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const router = express.Router()
const reload = require('reload')

// Path: routes/index.js
router.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/view/index.html')))
router.get('/dashboard', (req, res) => res.sendFile(path.join(__dirname, './public/view/dashboard.html')))
router.get('/sale', (req, res) => res.sendFile(path.join(__dirname, './public/view/salePage.html')))

app.use(express.static(path.join(__dirname, '/public')))
app.use('/', router)
app.listen(port, () => console.log(`listening on port ${port}!`))
reload(app)
