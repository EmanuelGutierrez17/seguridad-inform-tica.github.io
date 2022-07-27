var hamburguer = document.getElementById('Hamburguer')
var menu = document.getElementById('Menu')

hamburguer.addEventListener("click", function(){
    menu.classList.toggle('open')
})


$(window).ready(function(){
    var heroHeight = $('#Hero').innerHeight();
    var top = heroHeight+'px';
    document.querySelector('#ShapeLeft').style.top = top;
});

$(window).resize(function(){
    var heroHeight = $('#Hero').innerHeight();
    var top = heroHeight+'px';
    document.querySelector('#ShapeLeft').style.top = top;
});


window.addEventListener("scroll", function(){
    if(window.scrollY>=10){
        document.querySelector('#Header').style.backgroundColor = 'rgba(0,0,0,0.7)';
        document.querySelector('#Header').style.backdropFilter = 'blur(10px)';
    }else{
        document.querySelector('#Header').style.backgroundColor = 'transparent';
        document.querySelector('#Header').style.backdropFilter = 'none';
    }
});




var header = document.getElementById('Header')

window.addEventListener("scroll", function(){
    var scroll = window.scrollY;
    if(scrollY>0){
        header.estilo.backgroundColor = '#121212';

    }
    else{
        header.estilo.backgroundColor = 'transparent';
    }

})