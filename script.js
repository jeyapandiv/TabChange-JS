"use strict"

let about = [{img_src :'image_one.jpeg',head : "History :", 
                content : "Nice protuct ,great Work Every year, the scientists, engineers and analysts in the Good" +
                        "rigorous analysis is key to the unrivaled trust that consumers have in the Good Housekeeping"+
                        "brand and the Good Housekeeping in the Good Housekeeping brand and the Seal Housekeeping"+ 
                        "Institute test thousands of home, beauty, tech, clothing, food and health products" },
                {img_src :'image_two.jpeg',head : "Vision:", 
                content : 'very usefull product Our rigorous analysis is key to the unrivaled trust that consumers'+ 
                        'have in the Good Housekeeping brand and the Good Housekeeping rigorous analysis is key to the'+ 
                        'unrivaled trust that consumers in the Good Housekeeping brand and the have in the Good Housekeeping'+ 
                        'brand and the Good Housekeeping Seal Seal, the most recognized consumer' },
                {img_src :'image_three.jpeg',head : "Goals :", 
                content : 'wonderfull design the scientists, engineers and analysts in the Good Housekeeping Institute'+ 
                        'test thousands of home, analysis is key to the unrivaled trust that consumers have in rigorous'+ 
                        'analysis is key to the in the Good Housekeeping brand and the unrivaled trust that consumers have'+
                        'in the Good Housekeeping brand and the Good Housekeeping Seal the Good recognized' }
            ];

let content = document.getElementById("content");
let image = document.getElementById("img");

let head = document.createElement("h4");
head.classList.add("mr_none");
let paragraph = document.createElement("p");
paragraph.classList.add("mr_none");
paragraph.classList.add("font_size");

image.src = about[0].img_src;
head.innerHTML = about[0].head;
paragraph.innerHTML = about[0].content;

content.append(head,paragraph);
  

let buttons = document.querySelectorAll("button");
let parent = buttons[0].parentNode;
console.log(parent.childNodes[0].nodeName == "#text");
parent.childNodes.forEach((node,index) => {
    if(node.nodeName == "#text")
    {
        parent.removeChild(node);
    }
});
// parent.removeChild(parent.childNodes[2])
// parent.removeChild(parent.childNodes[4])
// console.log(parent.removeChild(parent.childNodes[2]));

// buttons[0].parentNode.childNodes[2]
let btn_hov = buttons[0];
    btn_hov.classList.add("hover_none");

buttons.forEach((btn,index) => {

    btn.addEventListener("click",() => {

        btn_hov.classList.remove("white_back");
        btn_hov.classList.remove("hover_none");
        btn_hov = btn;
        btn_hov.classList.add('hover_none');

        image.src = about[index].img_src;
        head.innerHTML = about[index].head;
        paragraph.innerHTML = about[index].content;
    });
});
