const nombre = document.getElementById("name")
const email = document.getElementById("email")
const mensaje = document.getElementById("mensaje")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let ChekEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length < 4){
        warnings += 'El campo nombre esta vacio o es muy corto. <br>'
        entrar = true
    }

    if (!ChekEmail.test(email.value)) {
        warnings += 'El email no es valido. <br>'
        entrar = true
    }

    if (mensaje.value.length < 4) {
        warnings += 'El campo mensaje esta vacio o es muy corto <br>'
        entrar = true
    }

    if (entrar) {
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "El formulario se envio correctamente, gracias por contactar Naturgy Food."
    }

})