function menuClick()
{
    let menu = document.getElementById('menu');
    menu.style.visibility = "visible";
    menu.style.animationPlayState = "running";
    if (menu.style.animationName == "menuAnimationOut")
    {
        menu.style.animationName = "menuAnimationIn";
    }
    else
    {
        menu.style.animationName = "menuAnimationOut";
    }
}