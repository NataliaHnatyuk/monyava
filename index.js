import express from 'express'
import { appendFile } from 'fs'
import path from 'path'
import serverRoutes from './routes/servers.js'

const app = express()
const host = '192.168.88.70'
const port = 80

app.set('view engine', 'ejs')
app.set('views', path.resolve('./ejs'))

app.use(express.static(path.resolve('./Static')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(serverRoutes);

app.get('/', function(req, res) {
    res.render('index', {title: 'Express Main', active: 'main'})
})

app.get('/faq', function(req, res) {
    res.render('faq', {title: 'Express faq', active: 'faq'})
})

app.listen(port, host, () => console.log(`Apricot ${host}:${port}`));