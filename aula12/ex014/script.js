function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora > 0 && hora < 12) {
        img.src = 'imagens/amanhecer.jpg'
        document.body.style.background = '#e8d49d'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#fd885c'
    } else {
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#1a1f3d'
    }
}