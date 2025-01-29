//The user can click anywhere on the banner and will be redirected to the other page:
document.getElementById("clickableBanner").addEventListener("click", function(){
    window.location.href = "our-pizzas.html";
})

//Duplicates text dynamically
const bannerText = document.getElementById("bannerText");
const text = bannerText.innerHTML;

//Repeats the text multiple times to create a seamless effect
for (let i = 0; i < 10; i++) {
    bannerText.innerHTML += " " + text;
}