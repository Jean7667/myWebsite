
//DOM Document Object Model



console.log ("jsOK");
document.addEventListener('DOMContentLoaded' , () => { 
console.log("DOM Loaded");
});


const view1 = document.getElementById("view1");

const view2 = document.querySelector("#view2");

view1.style.display= "none"
//change style on the element 
view2.style.display="flex"

const views = document.getElementsByClassName("view");

console.log(views)

const sameViews = document.querySelectorAll(".view");
 console.log(sameViews);

 const divs = view1.querySelectorAll(".view");
  console.log(divs);
 
 const sameDivs = view1.getElementsByTagName("div");
 console.log(sameDivs);

 const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
 console.log(evenDivs);
 for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "darkblue";
    evenDivs[i].style.width ="150px"
    evenDivs[i].style.height ="150px"
}
const navText = document.querySelector ("nav h1")
console.log();
navText.textContent = "Hello World";

const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Hello<h1/> <p>This should align right</p>`;

console.log(navbar);
navbar.style.justifyContent = "space-between";

// navigate DOM tree
console.log(evenDivs [0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);

console.log(evenDivs[0].parentElement.hasChildNodes);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);

console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);


console.log(evenDivs[0].previousElementSibling);
console.log(evenDivs[0].previousSibling);

view1.style.display="none"
view2.style.display="flex"
view2.style.flexDirection="row"
view2.style.flexWrap="wrap"
view2.style.margin="10px"


while (view2.lastChild) {
    view2.lastChild.remove();
}
 
const createDivs = (parent, iter) => {
        const newDiv = document.createElement("div");
        newDiv.textContent = iter;
        newDiv.style.backgroundColor= "grey"
        newDiv.style.width ="200px";
        newDiv.style.height ="150px";
        newDiv.style.margin ="10px";
        newDiv.style.display ="flex";
        newDiv.style.justifyContent ="center";
        newDiv.style.alignItems ="center";
        // make it appear on page 
        parent.append(newDiv);
    };

//createDivs (view2, 10);

for(let i = 1; i<= 9; i++) {
    createDivs (view2,i);
}


///----------------------------------------------
/*end section  **/
///----------------------------------------------


const view = document.querySelector("#view2");

// Syntax : addEventListener (event,)function, useCapture

const doSomething = () => {
    alert ("doing Something");
} 

// what is the false?
h2.addEventListener("click",doSomething, false)
h2.removeEventListener("click", doSomething, false)

h2.addEventListener("click", (event) => {
    console.log(event.target);
    event.target.textContent="clicked";
}); 

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete");
    iniApp();    
});

const initApp = () => {
    const view = docuemtn.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener

}

