function answer(){
  var male =  document.getElementById("you").value
  var female =  document.getElementById("me").value

    var love = Math.round(Math.random() *100)
    
    var ahmad = document.getElementById("display").innerHTML = male + " and " + female + " love is @ " +  love + "%: "

    if (love>80 && love<99){
        document.getElementById("display").innerHTML = ahmad + "Picture Perfect"
    }
    else if(love>70 && love<79){
        document.getElementById("display").innerHTML = ahmad + "Pls!Keep it real."
    }

    else if(love>65){
        document.getElementById("display").innerHTML = ahmad + " Their Love is real"
    }
    else if (love>60 && love<50){
        document.getElementById("display").innerHTML = ahmad + "A fair relationship"
    }
    else if (love>40 && love<35){
        document.getElementById("display").innerHTML = ahmad + "work things out!"
    }

    else {
        document.getElementById("display").innerHTML = ahmad + "So,it's better to part!"
    }
}