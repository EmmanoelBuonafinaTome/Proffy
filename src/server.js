const proffys = [
    { 
        name: "Emmanoel", 
        avatar: "https://avatars3.githubusercontent.com/u/54191653?s=460&v=4", 
        whatsapp: "11974657785", 
        bio: "Hi justin",
        subject: "Quimica",
        cost: "20", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    },
    { 
        name: "alooooooo", 
        avatar: "https://avatars3.githubusercontent.com/u/54191653?s=460&v=4", 
        whatsapp: "11974657785", 
        bio: "Hi justin",
        subject: "Quimica",
        cost: "20", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    }
]

const subjects = [
   
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografica",
    "Historia",
    "Matemática",
    "Português",
    "Química"

]

const weekdays = [
   
    "Domigo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"

]

function getSubject(subjectNumber) {
    const position = +subjectNumber -1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {
        data.subject = getSubject(data.subject)
        proffys.push(data)
        return res.redirect("/study")

    }
    return res.render("give-classes.html", { subjects, weekdays })
}

const express = require('express')
const server = express()

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

server.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)