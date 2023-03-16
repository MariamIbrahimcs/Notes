var title = document.getElementById('note-title')
var content = document.getElementById('note-content')
var addnote = document.getElementById('add-note')
var update_note = document.getElementById('update-note')
var boxtitle = document.getElementById('box-title')
var boxcontent = document.getElementById('box-content')


var Notes=[]

if (localStorage.getItem("NotesInfo")!=null){
Notes = JSON.parse(localStorage.getItem("NotesInfo"))
displaynotes()
cleartextboxes()
}

else{
    localStorage.removeItem("NotesInfo")
    displaynotes()
}

addnote.addEventListener('click' ,function(){

if (title.value == '' && content.value == ''){
    displaynotes()
    cleartextboxes()
}

else if (title.value == ''){
    // boxtitle.innerHTML = 'No title'
    var note = {
        notetitle: '',
        notecontent: content.value
    }

    Notes.push(note);
    localStorage.setItem("NotesInfo" , JSON.stringify(Notes))
    displaynotes()
    cleartextboxes()
}

else if (content.value == ''){
    // boxcontent.innerHTML = 'No Content'

    var note = {
        notetitle: title.value,
        notecontent: ''
    }

    Notes.push(note);
    localStorage.setItem("NotesInfo" , JSON.stringify(Notes))
    displaynotes()
    cleartextboxes()
}

else{
    var note = {
        notetitle: title.value,
        notecontent: content.value
    }

    Notes.push(note);
    localStorage.setItem("NotesInfo" , JSON.stringify(Notes))
    displaynotes()
    cleartextboxes()
}
   
})

function  displaynotes(){
    var notebox = ` `
    for (var i = 0;i<Notes.length;i++){

if (Notes[i].notetitle == ''){
    notebox+=`
    <div class="notaya">
    <h3 id ='box-title' style="color: #F6E6E4;">Note Title</h3>
    <p id = 'box-content'>${Notes[i].notecontent}</p>
    <div class="manage">
        <i class="fa-sharp fa-solid fa-pen-to-square" onclick="updatenote(${i})"></i>
        <i class="fa-solid fa-trash" onclick="deletenote(${i})"></i>
      
    </div>
   
</div>
    `
}
else if (Notes[i].notecontent==''){
    notebox+=`
    <div class="notaya">
    <h3 id ='box-title'>${Notes[i].notetitle}</h3>
    <p id = 'box-content' style="color: #F6E6E4;">Take a note...</p>
    <div class="manage">
        <i class="fa-sharp fa-solid fa-pen-to-square" onclick="updatenote(${i})"></i>
        <i class="fa-solid fa-trash" onclick="deletenote(${i})"></i>
      
    </div>
   
</div>
    `
}

else{
    notebox+=`
    <div class="notaya">
    <h3 id ='box-title'>${Notes[i].notetitle}</h3>
    <p id = 'box-content'>${Notes[i].notecontent}</p>
    <div class="manage">
        <i class="fa-sharp fa-solid fa-pen-to-square" onclick="updatenote(${i})"></i>
        <i class="fa-solid fa-trash" onclick="deletenote(${i})"></i>
      
    </div>
   
</div>
    `
}

   

       
    }

    document.getElementById('notes').innerHTML = notebox
}

function cleartextboxes(){
    title.value=``
    content.value=``
}

function deletenote(index){
    Notes.splice(index,1)
    if (Notes.length!=0){
        localStorage.setItem("NotesInfo",JSON.stringify(Notes))
        displaynotes()
    }

    else{
        localStorage.removeItem("NotesInfo")
        displaynotes()
    }
 
    // console.log(Notes)



    
}
 var newindex
function updatenote(index){
    newindex = index
title.value = Notes[index].notetitle
content.value = Notes[index].notecontent
addnote.style.display='none'
update_note.style.display='block'

}

update_note.addEventListener('click',function(){
    addnote.style.display='block'
    update_note.style.display='none'
   Notes[newindex].notetitle= title.value 
   Notes[newindex].notecontent= content.value 

   localStorage.setItem("NotesInfo",JSON.stringify(Notes))
    displaynotes()
    cleartextboxes()

})







