document.addEventListener('DOMContentLoaded', function (){
    let imagenes = [
        {img: '/img/1.jpeg'},
        {img: '/img/2.jpeg'},
        {img: '/img/3.jpeg'},
        {img: '/img/4.jpeg'},
        {img: '/img/5.jpeg'},
        {img: '/img/6.jpeg'},
        {img: '/img/7.jpeg'},
        {img: '/img/8.jpeg'},
        {img: '/img/9.jpeg'},
        {img: '/img/10.jpeg'},
        {img: '/img/11.jpeg'},
        {img: '/img/12.jpeg'},
        {img: '/img/13.jpeg'},
        {img: '/img/14.jpeg'},
        {img: '/img/15.jpeg'},
        {img: '/img/16.jpeg'},
        {img: '/img/17.jpeg'},
        {img: '/img/18.jpeg'},
        {img: '/img/19.jpeg'},
        {img: '/img/20.jpeg'},
        {img: '/img/21.jpeg'},
        {img: '/img/22.jpeg'},
        {img: '/img/23.jpeg'},
        {img: '/img/24.jpeg'},
        {img: '/img/25.jpeg'},
        {img: '/img/26.jpeg'},
        {img: '/img/27.jpeg'},
        {img: '/img/28.jpeg'},
        {img: '/img/29.jpeg'},
        {img: '/img/30.jpeg'},
        {img: '/img/31.jpeg'},
        {img: '/img/32.jpeg'},
        {img: '/img/33.jpeg'}
    ]

    let contador = 0
    const contenedor = document.querySelector('.slideshow')
    const overlay = document.querySelector('.overlay')
    const galeria_imagenes = document.querySelectorAll('.galeria img')
    const img_slideshow = document.querySelector('.slideshow img')

    contenedor.addEventListener('click', function (event) {
        let atras = contenedor.querySelector('.atras'),
        adelante = contenedor.querySelector('.adelante'),
        img = contenedor.querySelector('img'),
        tgt = event.target
        if (tgt == atras) {
            if (contador > 0) {
                img.src = imagenes[contador - 1].img
                contador-- 
            } else{
                img.src = imagenes[imagenes.length -1].img
                contador = imagenes.length -1
            } 
        } else if (tgt == adelante) {
            if (contador < imagenes.length - 1) {
                img.src = imagenes[contador + 1].img
                contador++
            } else{
                img.src = imagenes[0].img
                contador = 0
            }
        }
            
                
            })

            Array.from(galeria_imagenes).forEach(img => {
                img.addEventListener('click', event => {
                    const imagen_seleccionada = +(event.target.dataset.imgMostrar)
                    img_slideshows.src = imagenes[imagen_seleccionada].img
                    contador = imagen_seleccionada
                    overlay.style.opacity = 1
                    overlay.style.visibility = 'visible'
                })
            })
        
            var span = document.getElementsByClassName("btn_cerrar")[0];
            span.onclick = function() {
                overlay.style.visibility = "hidden";
            }
            
        
})