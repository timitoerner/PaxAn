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


function getTime()
{
    const nowDate = new Date();
    const second = nowDate.getSeconds().toString();
    const minute = nowDate.getMinutes().toString();
    const hour = nowDate.getHours().toString();
    const day = nowDate.getDate().toString();
    const month = (nowDate.getMonth() + 1).toString();
    const year = nowDate.getFullYear().toString();

    let dateString = hour + ":" + minute + ":" + second + " " + day + "." + month + "." + year;

    console.log(dateString);
    
    
    for (let i = 0; i < document.getElementsByClassName("article-date").length; i++) {
        let element = document.getElementsByClassName("article-date")[i];
        element.innerHTML = dateString;
    }
}