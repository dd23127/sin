const items = document.querySelectorAll('.gallery-collection li')
const popup = document.querySelector('.popup')
const close = document.querySelector('button')

items.forEach((el, index)=>{
    el.addEventListener('mouseenter',function(){
        el.querySelector('video').play()
    })
    el.addEventListener('mouseleave',function(){
        el.querySelector('video').pause()
        el.querySelector('video').currentTime = 0
    })
    el.addEventListener('click',function(){
        let title = el.querySelector('h3').innerText
        let text = el.querySelector('p').innerText
        let videosrc = el.querySelector('video').getAttribute('src')
        
        popup.querySelector('.txt h2').innerText=title
        popup.querySelector('.txt p').innerText=text
        popup.querySelector('video').setAttribute('src',videosrc)
        popup.classList.add('on')
        popup.querySelector('video').play()


    })
})

close.addEventListener('click',function(){
    popup.classList.remove('on')
    popup.querySelector('video').pause()
})
