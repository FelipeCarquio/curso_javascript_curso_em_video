function verificador() {
    var data = new Date()
    var ano = data.getFullYear()
    var resano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (resano.value.length <= 3 || resano.value > ano) {
        alert('[ERRO] preeencha os dados e tente novamente!')
    } else {
        var rsex = document.getElementsByName('radsex')
        var idade = ano - resano.value
        var genero = ''
        if (rsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 11) {
                res.innerHTML = `Você é um(a) menino de ${idade} anos.`
                document.getElementById('rosto').style.width = '300px'
                document.getElementById('rosto').style.height = '300px'
                document.getElementById('rosto').style.background = 'url(imagens/menino.jpg) center center no-repeat'
                document.getElementById('rosto').style.backgroundSize = 'cover'
                document.getElementById('rosto').style.borderRadius = '50%'
                document.getElementById('rosto').style.margin = 'auto'
            } else if (idade < 21) {
                document.getElementById('rosto').style.width = '300px'
                document.getElementById('rosto').style.height = '300px'
                document.getElementById('rosto').style.background = 'url(imagens/jovem_h.jpg) center center no-repeat'
                document.getElementById('rosto').style.backgroundSize = 'cover'
                document.getElementById('rosto').style.borderRadius = '50%'
                document.getElementById('rosto').style.margin = 'auto'
            }
        } else {
            genero = 'Mulher'
        }
        // res.innerHTML = `Você é um(a) ${genero} de ${idade} anos.`
    }


}