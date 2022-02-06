// function falaDepois(segundos, frase){
//     return new Promise((resolve, reject) => {
        
//         setInterval(() => {
//             resolve(frase)
//         }, segundos * 1000)
//     })
// }

// falaDepois(3, "Tou aqui!!")
//     .then(frase => frase + " Sou de Jesus!")
//     .then(fim => console.log(fim))


// sem promise...

// const http = require('http')

// const getTurma = (letra, callback) => {
//     const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
//     http.get(url, res => {
//         let resultado = ''

//         res.on('data', dados => {
//             resultado += dados
//         })

//         res.on('end', () => {
//             callback(JSON.parse(resultado))
//         })
//     })
// }

// let nomes = []

// getTurma('A', alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma('B', alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//         getTurma('C', alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })

// exemplo anterior agora com Promise...
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    return new Promise((resolve, reject) => {

        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {

                try{
                    resolve(JSON.parse(resultado))

                }catch(e) {

                    reject(console.log('deu merda!'))
                }

            })
        })
    })
}

let nomes = []

// getTurma('A').then(alunos => {
// nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(x => console.log(x))