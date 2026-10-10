var cards = document.querySelectorAll(".project-cover");

for (let i = 0; i < cards.length; i++) {

  cards[i].addEventListener("mouseenter", function () {
    this.classList.add("pressed");

    var arrow = this.querySelector(".arrow");
    arrow.style.fontSize = "18px"

    var head = this.querySelector(".intro1");
    head.style.color= "#5EEAD4"

  });

  cards[i].addEventListener("mouseleave", function () {
    this.classList.remove("pressed");

    var arrow = this.querySelector(".arrow");
    arrow.style.fontSize = "13px"

    var head = this.querySelector(".intro1");
    head.style.color= "#F8FAFC"
  });


}


var icons = $(".icon-makeup, .ejs-icon");

for(i=0; i < icons.length; i++){
  icons[i].addEventListener("mouseenter", function(){

    this.style.color= "#5EEAD4"
    
  });

  icons[i].addEventListener("mouseleave", function(){
    this.style.color="#64748b"
  })
}

var ejs = $(".ejs-icon-container");

ejs.on("mouseenter", function () {
    this.style.filter = "brightness(0) saturate(100%) invert(81%) sepia(28%) saturate(1014%) hue-rotate(113deg) brightness(94%) contrast(89%)";
});

ejs.on("mouseleave", function () {
    this.style.filter = "brightness(0) saturate(100%) invert(57%) sepia(12%) saturate(600%) hue-rotate(180deg) brightness(91%) contrast(88%)";
});
