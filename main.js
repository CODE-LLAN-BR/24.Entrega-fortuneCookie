let fortunePhrases = ['A felicidade é uma jornada, não um destino.','Grandes oportunidades virão na sua direção.','A sorte favorece os ousados.','O sucesso está no horizonte, continue caminhando.','A sabedoria é o que nos ajuda a encontrar a sorte.','Seu sorriso é um ímã de boas energias.','As dificuldades são oportunidades disfarçadas.','Acredite nos seus sonhos e eles se tornarão realidade.','Uma nova aventura está prestes a começar.','O melhor ainda está por vir.','Você está prestes a embarcar em uma jornada de autoconhecimento.']


const screen1 = document.querySelector('.screenOne')
const screen2 = document.querySelector('.screenTwo')

const fortuneClick = document.querySelector('#fortuneClick')

const btnReload = document.querySelector('#btn-reload')

const randomNumber = Math.round(Math.random() * 10)


fortuneClick.addEventListener('click',function(){
    screen1.classList.add('hide')
    screen2.classList.remove('hide')

    document
    .querySelector('#textCard')
    .innerText = fortunePhrases[randomNumber]

})

btnReload.addEventListener('click',function(){
    location.reload()
})
 