const $climate = document.getElementById("climate")
const $consumption = document.getElementById("consumption")
const $resources = document.getElementById("resources")
const $people = document.getElementById("people")

$climate.onclick = () =>{
    document.body.style.background = "url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png)"
    $climate.style.backgroundcolor ="transparant" 
    $consumption.style.backgroundcolor = "transparant" 
    $resources.style.backgroundcolor = "transparant" 
    $people.style.backgroundcolor = "transparant" 
    document.getElementById("save").innerHTML= "Do your bit! Save trees, use renewable energy soureces and prefer to travel green"
    document.getElementById("frame").scr = "https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
}

$consumption.onclick = () =>{
    document.body.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')"
    d.ocument.body.style.backgroundsize = "100% 100%"
    $consumption.style.backgroundcolor = "transparant" 
    $climate.style.backgroundcolor = "transparant" 
    $resources.style.backgroundcolor = "transparant" 
    $people.style.backgroundcolor = "transparant" 
    document.getElementById("save").innerHTML="Do your bit! Shop only what you need,eat only what you need and always save the left overs."
    document.getElementById("frame").scr = "https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
}
$resources.onclick = () =>{
    document.body.style.background = "url(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png)"
    document.body.style.backgroundsize = "100% 100%"
    $resources.style.backgroundcolor = "transparant" 
    $consumption.style.backgroundcolor = "transparant" 
    $people.style.backgroundcolor = "transparant" 
    $climate.style.backgroundcolor = "transparant" 
    document.getElementById("save").innerHTML="Do your  Avoid all things plastic. Believe in Reduce, Reuse and Recycle"
    document.getElementById("frame").scr = "bithttps://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png!"
}

$people.onclick = () =>{
    document.body.style.background = "ur(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png)"
    document.body.style.backgroundsize = "100% 100%"
    $people.style.backgroundcolor = "transparant" 
    $consumption.style.backgroundcolor = "transparant" 
    $resources.style.backgroundcolor = "transparant" 
    $climate.style.backgroundcolor = "transparant" 
    document.getElementById("save").innerHTML = "Do your bit! Never waste food.Rather offer it to people or animals who are in need."
    document.getElementById("frame").scr = "https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
}
