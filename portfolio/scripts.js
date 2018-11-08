//Configurable
const jump_in_seconds = 8;

const carousel = document.getElementById("carousel");
const carousel_items = carousel.children;
const carousel_items_lenght = carousel_items.length;

let current_item = 0;
let user_interacting = false;

for(let i = 1; i < carousel_items_lenght; i++){
    carousel_items.item(i).style.display="none";
}

setInterval(next_item_carousel, jump_in_seconds * 1000);

carousel.onmouseover = function(e) {
    user_interacting = true;
};

carousel.onmouseout = function(e) {
    user_interacting = false;
};

function next_item_carousel(){
    if(user_interacting){
        return;
    }

    carousel_items.item(current_item).style.display = "none";
    current_item++;
    if(current_item >= carousel_items_lenght){
        current_item = 0;
    }
    
    carousel_items.item(current_item).style.display = "block";
    carousel_items.item(current_item).style.visibility = "visible";
}

function previous_item_carouse(){
    if(user_interacting){
        return;
    }

    carousel_items.item(current_item).style.display = "none";
    current_item--;
    if(current_item < 0){
        current_item = carousel_items_lenght - 1;
    }

    carousel_items.item(current_item).style.display = "block";
    carousel_items.item(current_item).style.visibility = "visible";
}