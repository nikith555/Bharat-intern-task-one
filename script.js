let myForm = document.getElementById("blogForm");
let titleInputEl = document.getElementById("inputTitle");
let textInputEl = document.getElementById("inputText");
let imageInputEl = document.getElementById("inputImage");
let videoInputEL = document.getElementById("inputVideo");
let blogListFrom = document.getElementById("blogList");
//let createBlogBtn = document.getElementById("sumbit");

let formatData = {

}

titleInputEl.addEventListener("change", function(event){
    formatData.title = event.target.value
});

textInputEl.addEventListener("change", function(event){
    formatData.content = event.target.value
});

imageInputEl.addEventListener("change",function(event){
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload= function(event){
        formatData.image = event.target.result;
    };

    reader.readAsDataURL(file);
});

videoInputEL.addEventListener("change",function(event){
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload= function(event){
        formatData.video = event.target.result;
    };

    reader.readAsDataURL(file);
})

createBlogBtn = (formatData) => {
    let prvsTitleEl = document.createElement("p");
    prvsTitleEl.textContent = `Title : ${formatData.title}`;
    prvsTitleEl.classList.add('pre-text');
    blogListFrom.appendChild(prvsTitleEl);


    let prvsContentEl = document.createElement("p");
    prvsContentEl.textContent = `Content : ${formatData.content}`;
    prvsContentEl.classList.add('pre-text');
    blogListFrom.appendChild(prvsContentEl);
    

    let prvsImageEl = document.createElement("img");
    prvsImageEl.src = formatData.image;
    prvsImageEl.alt = "preview";
    prvsImageEl.classList.add('pre-img');
    blogListFrom.appendChild(prvsImageEl);
   

    let prvsVideoEl = document.createElement("video");
    prvsVideoEl.src= formatData.video;
    prvsVideoEl.alt = "preview";
    prvsVideoEl.classList.add('pre-img');
    prvsVideoEl.controls = true;
    blogListFrom.appendChild(prvsVideoEl);

};

myForm.addEventListener("submit",function(event){
    event.preventDefault();
    createBlogBtn(formatData);
});