const sr = ScrollReveal({
    distance: '30px',
    duration: 1500,
    delay:400
    // reset:
});

sr.reveal(`.animeter-1` , {delay:300 , origin:'left'});
sr.reveal(`.animeter-2` , {delay:300 , origin:'right'});







document.getElementById('bindu-1').addEventListener('click' , function(){
    const obj = document.getElementById('bindu-1');
    obj.classList.add('bg-green-100');
    obj.classList.remove('bg-base-100');

});

document.addEventListener('click', function(event){
    const obj = document.getElementById('bindu-1');
    if (!obj.contains(event.target)){
        obj.classList.add('bg-base-100');
        obj.classList.remove('bg-green-100');
    }

    
});

document.getElementById('bindu-2').addEventListener('click' , function(){
    const obj = document.getElementById('bindu-2');
    obj.classList.add('bg-yellow-100');
    obj.classList.remove('bg-base-100');

});

document.addEventListener('click', function(event){
    const obj = document.getElementById('bindu-2');
    if (!obj.contains(event.target)){
        obj.classList.add('bg-base-100');
        obj.classList.remove('bg-yellow-100');
    }

    
});

document.getElementById('bindu-3').addEventListener('click' , function(){
    const obj = document.getElementById('bindu-3');
    obj.classList.add('bg-pink-100');
    obj.classList.remove('bg-base-100');

});

document.addEventListener('click', function(event){
    const obj = document.getElementById('bindu-3');
    if (!obj.contains(event.target)){
        obj.classList.add('bg-base-100');
        obj.classList.remove('bg-pink-100');
    }

    
});
document.getElementById('bindu-4').addEventListener('click' , function(){
    const obj = document.getElementById('bindu-4');
    obj.classList.add('bg-blue-100');
    obj.classList.remove('bg-base-100');

});

document.addEventListener('click', function(event){
    const obj = document.getElementById('bindu-4');
    if (!obj.contains(event.target)){
        obj.classList.add('bg-base-100');
        obj.classList.remove('bg-blue-100');
    }

    
});

document.getElementById('bindu-5').addEventListener('click' , function(){
    const obj = document.getElementById('bindu-5');
    obj.classList.add('bg-purple-100');
    obj.classList.remove('bg-base-100');

});

document.addEventListener('click', function(event){
    const obj = document.getElementById('bindu-5');
    if (!obj.contains(event.target)){
        obj.classList.add('bg-base-100');
        obj.classList.remove('bg-purple-100');
    }

    
});
document.getElementById('bindu-6').addEventListener('click' , function(){
    const obj = document.getElementById('bindu-6');
    obj.classList.add('bg-lime-100');
    obj.classList.remove('bg-base-100');

});

document.addEventListener('click', function(event){
    const obj = document.getElementById('bindu-6');
    if (!obj.contains(event.target)){
        obj.classList.add('bg-base-100');
        obj.classList.remove('bg-lime-100');
    }

    
});