let nome = window.document.getElementById('nome')
let email = document.getElementById('email')
let assunto = document.querySelector('assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false


function validaNome(){
    let txt = document.getElementById('txtNome')
    if(nome.value.length < 3){
        txt.innerHTML = "Nome invalido"
        txt.style.color = 'red'
    } else{
        txt.innerHTML ="Nome válido"
        txt.style.color = 'green'
        nomeOk  = true
    }
}

function validaEmail(){
    let txtemail = document.getElementById('txtemail')
    if(email.value.indexOf ('@') == -1  || email.value.indexOf ('.') == -1){
        txtemail.innerHTML = "Email invalido"
        txtemail.style.color = "red"

    } else{
        txtemail.innerHTML = "Email Válido!"
        txtemail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.getElementById('txtAssunto')

    if(txtAssunto.value.length >= 2){
        txtAssunto.innerHTML ='texto muito grande. Digite no minimo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }

}

function enviar(){
        if(nomeOk == true && emailOk == true && assuntoOk == true){
            alert('Formulario enviado com sucesso')
        } else{
            alert('Preencha o formulario corretamente')
        }
}