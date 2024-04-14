var imageIndex = 1;
var imageArray = [
    "../images/index_1.jpg", "../images/index_2.jpg", "../images/index_3.jpg",
     "../images/index_4.jpg", "../images/index_5.jpg"];
var question_index = 0
var question_string_array =[
    //1
    "朋友約你這星期六出門玩，你會...",
    "規劃好行程，按照行程走",//J
    "先看看有甚麼好玩的，當天看狀況再決定去哪",//P
    //2
    "朋友說心情不太好，想去買爆糖葫蘆！你會說…",
    "買那麼多隻會吃不完吧！還是要買些別的？",//T
    "發生什麼事了！你還好嗎？",//F
    //3
    "到了夜市你看到一個感覺很好玩的多人合作遊戲，你會傾向於...",
    "考慮一下再決定是否參加",//I
    "感覺很好玩 ! 馬上加入大家",//E
    //4
    "朋友去廁所時，你發現角落有一塊閃閃發亮的指示牌，你會...",
    "等朋友回來再一起過去",//J
    "隨意的先過去看看",//P
    //5
    "朋友剛好回來了，你們一起前往閃閃發亮的指示牌。神祕的指示牌似乎在呼喚著你去觸碰它，你會...",
    "(戳)",//P
    "有點擔心碰了會發生甚麼(但朋友好像還是想按看看)",//J
    //過場
    //(1)指示牌的光芒愈來愈強烈
    //(2)欸??
    //(3)欸?!?!
    //6
    "睜開眼後，你看到了很多奇怪的生物，你確定這裡絕不是原本的世界，這時你會...",
    "先觀察周遭環境，確認目前現況",//T
    "先確認朋友的狀況",//F
    //7
    "你發現你能夠聽懂牠們的對話，你會...",
    "等待很像NPC的藍色大貓貓過來？",//I
    "主動過去詢問這裡是哪裡？",//E
    //過場 
    //藍色大貓貓說這裡是由人們對夜市的回憶所形成的地方，而它叫做阿港，是套圈圈攤的老闆。
    //8
    "往前走，轉角處有位街頭藝人正唱著一首你沒聽過但很喜歡的歌，你更偏向於...",
    "被歌詞吸引",//S
    "被旋律吸引",//N
    //9
    "這麼久都還沒吃飯，飢腸轆轆的你會如何選擇晚餐呢?",
    "點一份熟悉的好吃料理！",//S
    "點一份神秘夜市的特色料理!",//N
    //10
    "終於吃飽了!繼續跟著大貓往前走，突然發現角落有個黑色的精靈正散發著不安的氣息。",
    "ㄟ?他會有攻擊性嗎?",//T
    "他還好嗎，需不需要幫忙?",//F
    //過場
    //藍色大貓貓說這是在現實夜市裡，迷路的人們的記億，他不會攻擊你的!
    //11
    "玩了那麼久好像有點累了，明天還是假日，你會...",
    "在房間躺一整天充電",//I
    "難得假日!如果朋友有約就出門",//E
    //12
    "回到了現實世界後的你偶爾還是會想起...",
    "那天的藍色大貓貓和迷路黑色小精靈",//S
    "那天神奇的感受和愉快的回憶",//N
    
]
var progress_rate = 0;

//----------------but_active---------------------
function str_but_click(){
    remove_item("str_but");
    change_main_image();
    add_main_text(question_index++);
    add_selet_but(question_index++,question_index++);
    add_progress("0");
    progress_rate += 9;
}
function selet_1_but_click(){
    next_page();
}
function selet_2_but_click(){
    next_page();
}

//----------------item_change---------------------
function change_main_image(){
    var image = document.getElementById("main_img");
    image.src = imageArray[imageIndex];
    imageIndex++;
}

function next_page(){
    remove_item("main_text");
    remove_item("selet_but");
    remove_item("progress");
    add_main_text(question_index++);
    add_selet_but(question_index++,question_index++);
    add_progress(progress_rate);
    progress_rate += 9;
}


//----------------item_remove---------------------
function remove_item(item_id){
    var item = document.getElementById(item_id);
    if(item){
        item.remove();
    }else{
        console.log(item_id+"don't exist")
    }
}

//----------------item_add---------------------
function add_itme(newHTML){
    var container = document.getElementById("main_div");
    container.innerHTML += newHTML;
}
function add_main_text(text_index){
    var newHTML =
    '<div id="main_text" class="main_text_div">'+
    '<p class="main_Text">'+question_string_array[text_index]+'</p>'+
    '</div>';
    add_itme(newHTML)
}
function add_selet_but(string_index_1,string_index_2){
    var newHTML =
    '<div id:selet_but class="d-grid gap-2 selet_but_div">'+
    '<button class="btn btn-light selet_but" type="button" onclick="selet_1_but_click()">'+question_string_array[string_index_1]+'</button>'+
    '<button class="btn btn-light selet_but" type="button" onclick="selet_2_but_click()">'+question_string_array[string_index_2]+'</button>'+
    '</div>';
    add_itme(newHTML)
}
function add_progress(value){
    var newHTML =
    '<div id:progress class="progress _progress" role="progressbar" aria-label="Basic  example" aria-valuenow='
    +value+' aria-valuemin="0" aria-valuemax="100">'+
    '<div class="progress-bar bg-secondary" style="width: '+value+'%'+'"></div>'+
    '</div>';
    add_itme(newHTML)
}


