function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} Horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.webp';
        document.body.style.background = '#e8bd5f';
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.webp';
        document.body.style.background = '#e16606';
    } else {
        img.src = 'noite.webp';
        document.body.style.background = '#55321c';
    }
}
