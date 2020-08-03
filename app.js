var list= document.getElementById("list")




function addtodo(){
    var todo_item = document.getElementById("todo");
    var li =  document.createElement("li")
    var litext = document.createTextNode(todo_item.value)
    li.appendChild(litext)
    li.setAttribute("class","spa")
    console.log(litext)
    
// delete button
    var delbtn = document.createElement("button");
    var delText = document.createTextNode("DELETE")
    delbtn.setAttribute("class","btn")
    delbtn.setAttribute("onclick","DeleteItem(this)")
// edit button
    var editbtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editbtn.appendChild(editText)
    editbtn.setAttribute("class","btn1")
    editbtn.setAttribute("onclick","EditItem(this)")
    

    delbtn.appendChild(delText)
    li.appendChild(delbtn)
    li.appendChild(editbtn)
    list.appendChild(li) 

    todo_item.value=""
    console.log(li)
    console.log(todo_item.value);
}

function DeleteItem(e){
    e.parentNode.remove()
}
function EditItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter Your value",val)
    e.parentNode.firstChild.nodeValue = editValue
    
console.log(e.parentNode.firstChild)
}
function delAll(){
    list.innerHTML =""
}
