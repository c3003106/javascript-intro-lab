console.info("hello world");
document.getElementById("myHeading").innerHTML = "Tasmeer";
document.querySelector("nav ul li").setAttribute('class', 'currentPage');
document.querySelector("nav ul li").setAttribute('class', 'currentPage');
//document
//    .querySelector("nav ul li a")
//    .setAttribute('href', 'https://www.google.co.uk');

let colorButtons = document.querySelectorAll(".colPicker");
console.dir(colorButtons);
for (let i=0; i<colorButtons.length; i++){
    colorButtons[i].addEventListener("click", changeColor);
}

function changeColor(ev){
    console.info(ev.target.classList[0]);
    let colorClass = ev.target.classList[0] + "Back";
    document.body.setAttribute("class", colorClass)
}

document.getElementById("myTestBtn").addEventListener("click", function(){
    console.info('Hi i was pressed')
});

//color picker
//let redbtn = document.querySelector(".red");
//redbtn.addEventListener("click", function(){
//    document.body.setAttribute('class', 'redBack')
//});

//let greenbtn = document.querySelector(".green");
//greenbtn.addEventListener("click", function(){
//    document.body.setAttribute('class', 'greenBack')
//});

//let bluebtn = document.querySelector(".blue");
//bluebtn.addEventListener("click", function(){
//    document.body.setAttribute('class', 'blueBack')
//});

//let defaultbtn = document.querySelector(".reset");
//defaultbtn.addEventListener("click", function(){
//    document.body.removeAttribute("class");
//});


let imageAr = [
    'images/view1.jpg',
    'images/view2.jpg',
    'images/view3.jpg',
    'images/view4.jpg',
    'images/view5.jpg',
    'images/view6.jpg'
  ];

  let imageRotator = document.getElementById("myImages");
  let imageCounter = 0;
  function chgImage(){
    console.info(imageCounter)
    imageCounter++;
    if (imageCounter == imageAr.length){
        imageCounter = 0;
    }
    imageRotator.setAttribute("src", imageAr[imageCounter]);

    
    // console.info(imageCounter);
  }
chgImage();
  setInterval(chgImage, 1500);