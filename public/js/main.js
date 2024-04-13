var imageIndex = 1;
var imageArray = [
    "../images/index_1.jpg", "../images/index_2.jpg", "../images/index_3.jpg",
     "../images/index_4.jpg", "../images/index_5.jpg"];
var item_string = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
];

var question_string =[

]

function str_but_cilck(){
    change_main_image();
    remove_item("str_but");
    add_selet_but();
    add_progress();
}

function change_main_image(){
    var image = document.getElementById("main_img");
    image.src = imageArray[imageIndex];
    imageIndex++;
}

function remove_item(item_id){
    var item = document.getElementById(item_id);
    if(item){
        item.remove();
    }else{
        console.log(item_id+"don't exist")
    }
}



function add_selet_but(){
    var newHTML =
    '<div class="d-grid gap-2 selet_but_div">'+
    '<button class="btn btn-primary selet_but" type="button">Button</button>'+
    '<button class="btn btn-primary selet_but" type="button">Button</button>'+
    '</div>';
    var container = document.getElementById("main_div");
    container.innerHTML += newHTML;
}

function add_progress(){
    var newHTML =
    '<div class="progress progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">'+
    '<div class="progress-bar bg-secondary" style="width: 75%"></div>'+
    '</div>';
    var container = document.getElementById("main_div");
    container.innerHTML += newHTML;
}

