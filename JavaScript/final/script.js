var plusBtn = document.querySelector(".plusBtn")
var popupOverlay = document.querySelector(".popupOverlay")
var popupBox = document.querySelector(".popupBox")

plusBtn.addEventListener("click",function(){
    popupOverlay.style.display = "block"
    popupBox.style.display = "block"
})

var cancelbtn = document.getElementById("cancelBtn")
cancelbtn.addEventListener("click", function(event){
    event.preventDefault()
    popupOverlay.style.display = "none"
    popupBox.style.display = "none"
})

var addBtn = document.getElementById("addBtn")
var box = document.querySelector(".box")
var bookTitle = document.getElementById("bookTitle")
var bookAuthor = document.getElementById("bookAuthor")
var shortDescription = document.getElementById("shortDescription")

addBtn.addEventListener("click" , function(event){
    event.preventDefault()
    var newdiv = document.createElement("div")
    newdiv.setAttribute("class", "smallBox") 
    newdiv.innerHTML = `<h2>${bookTitle.value}</h2> <h5>${bookAuthor.value}</h5>
            <p>${shortDescription.value}</p>
            <button id="delete" onclick = "deleteSmallBox(event)">delete</button>`
    box.append(newdiv)
    popupOverlay.style.display = "none"
    popupBox.style.display = "none"

    bookTitle.value = ""
    bookAuthor.value = ""
    shortDescription.value = ""
})

function deleteSmallBox(event){
    event.target.parentElement.remove()
}