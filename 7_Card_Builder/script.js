function createcard(title, cName, views, monthsOld, duration, link){
    if(views%1000000000===0){
        views=views/1000000000 + 'B';
    }else if(views%1000000===0){
        views=views/1000000 + 'M';
    }else if(views%1000===0){
        views=views/1000 +'k'
    }
    document.querySelector("#title").innerHTML = title;
    document.querySelector("#cName").innerHTML = cName;
    document.querySelector("#Views").innerHTML = views;
    document.querySelector("#monthsOld").innerHTML = monthsOld +" months ago";
    document.querySelector(".time").innerHTML = duration;
    document.querySelector("#thumbnail").src = link;

}

createcard("Introduction to backend development | Sigma Web dev video #2", "CodeWithHarry", 560000, 7, "6:13", "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q");