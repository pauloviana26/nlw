// Dados
const proffys = [
    {
        name: "Paulo Viana",
        avatar: "https://avatars3.githubusercontent.com/u/45289241?s=460&u=a11468cbd6bddf6cbc812553ab4bde85647fe685&v=4",
        whatsapp: "34992008999",
        bio: "Apaixonado por programação, trabalho atualmente com desenvolvimento web e nas horas vagas ajudo pessoas com dificuldade em iniciar na programação.",
        subject: "Programação",
        cost: "50",
        weekday: [1],
        time_from: [720] ,
        time_to: [1220]
    },
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "98888888",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720] ,
        time_to: [1220]
    },
    {
        name: "Maik Brito",
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp: "3499652500",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Matemática",
        cost: "20",
        weekday: [0],
        time_from: [720] ,
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

// Funcionalidades

function getSubject(subjectNumber) {
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
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

    // [name, avatar, bio, whatsapp] or []
    const isNotEmpty = Object.keys(data).length > 0
    // se tiver dados adicionar
    if (isNotEmpty) {
        data.subject = getSubject(data.subject)
        // adicionar dados a lista proffys
        proffys.push(data)

        return res.redirect("/study")
    }

    // se não, não adicionar
    return res.render("give-classes.html", { subjects, weekdays })
}

// Servidor
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

// configurar nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// Início e configuração do servidor
server
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)