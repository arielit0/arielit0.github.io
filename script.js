const main_img = document.querySelector('.main_img')
const thumbnails = document.querySelectorAll('.thumbnail')


thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function(){
        const active = document.querySelector('.active')
        active.classList.remove('active')
        this.classList.add('active')
        main_img.src = this.src
    })
  })

  
const main_img1 = document.querySelector('.main_img1')
const thumbnails1 = document.querySelectorAll('.thumbnail1')


thumbnails1.forEach(thumb => {
    thumb.addEventListener('click', function(){
        const active1 = document.querySelector('.active1')
        active1.classList.remove('active1')
        this.classList.add('active1')
        main_img1.src = this.src
    })
  })

  const main_img2 = document.querySelector('.main_img2')
  const thumbnails2 = document.querySelectorAll('.thumbnail2')
  
  
  thumbnails2.forEach(thumb => {
      thumb.addEventListener('click', function(){
          const active2 = document.querySelector('.active2')
          active2.classList.remove('active2')
          this.classList.add('active2')
          main_img2.src = this.src
      })
    })
  
    const main_img3 = document.querySelector('.main_img3')
    const thumbnails3 = document.querySelectorAll('.thumbnail3')
    
    
    thumbnails3.forEach(thumb => {
        thumb.addEventListener('click', function(){
            const active3 = document.querySelector('.active3')
            active3.classList.remove('active3')
            this.classList.add('active3')
            main_img3.src = this.src
        })
      })
    
      const main_img4 = document.querySelector('.main_img4')
    const thumbnails4 = document.querySelectorAll('.thumbnail4')
    
    
    thumbnails4.forEach(thumb => {
        thumb.addEventListener('click', function(){
            const active4 = document.querySelector('.active4')
            active4.classList.remove('active4')
            this.classList.add('active4')
            main_img4.src = this.src
        })
      })
    
      const main_img5 = document.querySelector('.main_img5')
      const thumbnails5 = document.querySelectorAll('.thumbnail5')
      
      
      thumbnails5.forEach(thumb => {
          thumb.addEventListener('click', function(){
              const active5 = document.querySelector('.active5')
              active5.classList.remove('active5')
              this.classList.add('active5')
              main_img5.src = this.src
          })
        })

        const main_img6 = document.querySelector('.main_img6')
    const thumbnails6 = document.querySelectorAll('.thumbnail6')
    
    
    thumbnails6.forEach(thumb => {
        thumb.addEventListener('click', function(){
            const active6 = document.querySelector('.active6')
            active6.classList.remove('active6')
            this.classList.add('active6')
            main_img6.src = this.src
        })
      })

      const main_img7 = document.querySelector('.main_img7')
      const thumbnails7 = document.querySelectorAll('.thumbnail7')
      
      
      thumbnails7.forEach(thumb => {
          thumb.addEventListener('click', function(){
              const active7 = document.querySelector('.active7')
              active7.classList.remove('active7')
              this.classList.add('active7')
              main_img7.src = this.src
          })
        })

        const main_img8 = document.querySelector('.main_img8')
        const thumbnails8 = document.querySelectorAll('.thumbnail8')
        
        
        thumbnails8.forEach(thumb => {
            thumb.addEventListener('click', function(){
                const active8 = document.querySelector('.active8')
                active8.classList.remove('active8')
                this.classList.add('active8')
                main_img8.src = this.src
            })
          })
        
          const main_img9 = document.querySelector('.main_img9')
          const thumbnails9 = document.querySelectorAll('.thumbnail9')
          
          
          thumbnails9.forEach(thumb => {
              thumb.addEventListener('click', function(){
                  const active9 = document.querySelector('.active9')
                  active9.classList.remove('active9')
                  this.classList.add('active9')
                  main_img9.src = this.src
              })
            })
          
            const main_img10 = document.querySelector('.main_img10')
    const thumbnails10 = document.querySelectorAll('.thumbnail10')
    
    
    thumbnails10.forEach(thumb => {
        thumb.addEventListener('click', function(){
            const active10 = document.querySelector('.active10')
            active10.classList.remove('active10')
            this.classList.add('active10')
            main_img10.src = this.src
        })
      })
    
      const main_img11 = document.querySelector('.main_img11')
      const thumbnails11 = document.querySelectorAll('.thumbnail11')
      
      
      thumbnails11.forEach(thumb => {
          thumb.addEventListener('click', function(){
              const active11 = document.querySelector('.active11')
              active11.classList.remove('active11')
              this.classList.add('active11')
              main_img11.src = this.src
          })
        })
      
        const main_img12 = document.querySelector('.main_img12')
    const thumbnails12 = document.querySelectorAll('.thumbnail12')
    
    
    thumbnails12.forEach(thumb => {
        thumb.addEventListener('click', function(){
            const active12 = document.querySelector('.active12')
            active12.classList.remove('active12')
            this.classList.add('active12')
            main_img12.src = this.src
        })
      })


const imagen = document.getElementById("imagen");
imagen.addEventListener("click", function() {
  const enlace = this.parentNode.href;
  window.open("https://wa.me/5493329543968", "_blank");
})

const imagen1 = document.getElementById("imagen1");
imagen1.addEventListener("click", function() {
  const enlace = this.parentNode.href;
  window.open("https://www.facebook.com/CarraroLioiAutomotores", "_blank");
})

const imagen2 = document.getElementById("imagen2");
imagen2.addEventListener("click", function() {
  const enlace = this.parentNode.href;
  window.open("https://www.instagram.com/", "_blank");
})