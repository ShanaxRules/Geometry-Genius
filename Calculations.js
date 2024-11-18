let count = 1;
let triangleArea= 0;
let rectangleArea= 0;
let parallelogramArea = 0;
let rhombusArea = 0;
let pentagonArea = 0;
let ellipseArea = 0;

// for triangle
document.getElementById('triangle-button').addEventListener('click' , function(){
    const value1 = document.getElementById('b1').value;
    const value2 = document.getElementById('h1').value;
    let area = 0.5*value1*value2;
    triangleArea=area;
    let variable="Triangle";

    const body = document.getElementById('answer-ul');
    const newLi = document.createElement('li');
    newLi.innerHTML=`<li class="flex justify-between items-center mt-3 flex-col md:flex-row lg:flex-row gap-y-3" id="ts1">
    <div>
        <p class="text-lg  text-black">${count}.${variable}</p>
    </div>
    <div>
        <p class="text-lg  text-black" id="Tarea">Area: ${area}cm&sup2;</p>

    </div>
    <div>
        <button class="px-2 py-1 text-white bg-blue-600 rounded-xl marea">Convert to m&sup2;</button>

    </div>



</li>`
body.appendChild(newLi);
document.getElementById('b1').value='';
document.getElementById('h1').value='';
count++;


});

document.getElementById('answer-ul').addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('marea')) {
        const buttonParent = event.target.closest('li');
        const areaText = buttonParent.querySelector('#Tarea');
        const newArea = triangleArea/10000;
        areaText.innerHTML = `<p class="text-lg  text-black" id="Tarea">Area: ${newArea}cm&sup2;</p>`;
    }
});

//for rectangle

document.getElementById('rectangle-button').addEventListener('click' , function(){
    const value1 = document.getElementById('b2').value;
    const value2 = document.getElementById('h2').value;
    let area = value1*value2;
    rectangleArea=area;
    let variable="Rectangle";

    const body = document.getElementById('answer-ul');
    const newLi = document.createElement('li');
    newLi.innerHTML=`<li class="flex justify-between items-center mt-3 flex-col md:flex-row lg:flex-row gap-y-3" id="ts1">
    <div>
        <p class="text-lg  text-black">${count}.${variable}</p>
    </div>
    <div>
        <p class="text-lg  text-black" id="Rarea">Area: ${area}cm&sup2;</p>

    </div>
    <div>
        <button class="px-2 py-1 text-white bg-blue-600 rounded-xl marea">Convert to m&sup2;</button>

    </div>



</li>`
body.appendChild(newLi);
document.getElementById('b2').value='';
document.getElementById('h2').value='';
count++;


});

document.getElementById('answer-ul').addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('marea')) {
        const buttonParent = event.target.closest('li');
        const areaText = buttonParent.querySelector('#Rarea');
        const newArea = rectangleArea/10000;
        areaText.innerHTML = `<p class="text-lg  text-black" id="Rarea">Area: ${newArea}cm&sup2;</p>`;
    }
});

//for parallelogram

document.getElementById('parallel-button').addEventListener('click' , function(){
    const value1 = document.getElementById('b3').value;
    const value2 = document.getElementById('h3').value;
    let area = value1*value2;
    parallelogramArea=area;
    let variable="Parallelogram";

    const body = document.getElementById('answer-ul');
    const newLi = document.createElement('li');
    newLi.innerHTML=`<li class="flex justify-between items-center mt-3 flex-col md:flex-row lg:flex-row gap-y-3" id="ts1">
    <div>
        <p class="text-lg  text-black">${count}.${variable}</p>
    </div>
    <div>
        <p class="text-lg  text-black" id="Parea">Area: ${area}cm&sup2;</p>

    </div>
    <div>
        <button class="px-2 py-1 text-white bg-blue-600 rounded-xl marea">Convert to m&sup2;</button>

    </div>



</li>`
body.appendChild(newLi);
document.getElementById('b3').value='';
document.getElementById('h3').value='';
count++;


});

document.getElementById('answer-ul').addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('marea')) {
        const buttonParent = event.target.closest('li');
        const areaText = buttonParent.querySelector('#Parea');
        const newArea = parallelogramArea/10000;
        areaText.innerHTML = `<p class="text-lg  text-black" id="Parea">Area: ${newArea}cm&sup2;</p>`;
    }
});

//for Rhombus

document.getElementById('rhombus-button').addEventListener('click' , function(){
    const value1 = document.getElementById('b4').value;
    const value2 = document.getElementById('h4').value;
    let area = 0.5*value1*value2;
    rhombusArea=area;
    let variable="Rhombus";

    const body = document.getElementById('answer-ul');
    const newLi = document.createElement('li');
    newLi.innerHTML=`<li class="flex justify-between items-center mt-3 flex-col md:flex-row lg:flex-row gap-y-3" id="ts1">
    <div>
        <p class="text-lg  text-black">${count}.${variable}</p>
    </div>
    <div>
        <p class="text-lg  text-black" id="Roarea">Area: ${area}cm&sup2;</p>

    </div>
    <div>
        <button class="px-2 py-1 text-white bg-blue-600 rounded-xl marea">Convert to m&sup2;</button>

    </div>



</li>`
body.appendChild(newLi);
document.getElementById('b4').value='';
document.getElementById('h4').value='';
count++;


});

document.getElementById('answer-ul').addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('marea')) {
        const buttonParent = event.target.closest('li');
        const areaText = buttonParent.querySelector('#Roarea');
        const newArea = rhombusArea/10000;
        areaText.innerHTML = `<p class="text-lg  text-black" id="Roarea">Area: ${newArea}cm&sup2;</p>`;
    }
});


//for pentagon

document.getElementById('penta-button').addEventListener('click' , function(){
    const value1 = document.getElementById('b5').value;
    const value2 = document.getElementById('h5').value;
    let area = 0.5*value1*value2;
    pentagonArea=area;
    let variable="Pentagon";

    const body = document.getElementById('answer-ul');
    const newLi = document.createElement('li');
    newLi.innerHTML=`<li class="flex justify-between items-center mt-3 flex-col md:flex-row lg:flex-row gap-y-3" id="ts1">
    <div>
        <p class="text-lg  text-black">${count}.${variable}</p>
    </div>
    <div>
        <p class="text-lg  text-black" id="penarea">Area: ${area}cm&sup2;</p>

    </div>
    <div>
        <button class="px-2 py-1 text-white bg-blue-600 rounded-xl marea">Convert to m&sup2;</button>

    </div>



</li>`
body.appendChild(newLi);
document.getElementById('b5').value='';
document.getElementById('h5').value='';
count++;


});

document.getElementById('answer-ul').addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('marea')) {
        const buttonParent = event.target.closest('li');
        const areaText = buttonParent.querySelector('#penarea');
        const newArea = pentagonArea/10000;
        areaText.innerHTML = `<p class="text-lg  text-black" id="penarea">Area: ${newArea}cm&sup2;</p>`;
    }
});


//for ellipse
document.getElementById('ellipse-btn').addEventListener('click' , function(){
    const value1 = document.getElementById('b6').value;
    const value2 = document.getElementById('h6').value;
    let area = Math.PI*value1*value2;
    areaFin = area.toFixed(2);
    ellipseArea=area;
    let variable="Ellipse";

    const body = document.getElementById('answer-ul');
    const newLi = document.createElement('li');
    newLi.innerHTML=`<li class="flex justify-between items-center mt-3 flex-col md:flex-row lg:flex-row gap-y-3" id="ts1">
    <div>
        <p class="text-lg  text-black">${count}.${variable}</p>
    </div>
    <div>
        <p class="text-lg  text-black" id="elarea">Area: ${areaFin}cm&sup2;</p>

    </div>
    <div>
        <button class="px-2 py-1 text-white bg-blue-600 rounded-xl marea">Convert to m&sup2;</button>

    </div>



</li>`
body.appendChild(newLi);
document.getElementById('b6').value='';
document.getElementById('h6').value='';
count++;


});

document.getElementById('answer-ul').addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('marea')) {
        const buttonParent = event.target.closest('li');
        const areaText = buttonParent.querySelector('#elarea');
        const newArea = ellipseArea/10000;
        areaText.innerHTML = `<p class="text-lg  text-black" id="elarea">Area: ${newArea.toFixed(4)}cm&sup2;</p>`;
    }
});



