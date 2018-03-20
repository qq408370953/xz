//((){
//歌单推荐底部小圆点遍历
//var CC=$(".circles>li");
//for(var i=0;i<CC.length;i++){
//	CC[i].addEventListener("click",function(e){
//        e.preventDefault();
//    });
//}
////为歌单推荐底部小圆点绑定单击事件
//$(".circles>li").click(function(){
//	var play=$(".mod-play>li");
//	var i=CC.index();
//	console.log(i);
//})

//})();
/********歌单推荐底部小圆点遍历*******/
var as=$(".circles>a");//小圆点遍历
for(var i=0;i<as.length;i++){
    as[i].addEventListener("click",function(e){
        e.preventDefault();
    });
}
$(".circles>a").click(function(){//小圆点绑定单击事件
    var $slider=$(".mod-play>li");//li图片部分{含文字}
    var href=$(this).attr("href").slice(1); //当前点击值的href 链接li的ID
    var id='#'+href;// 当前点击完整的id
	console.log(id);
    $slider.removeClass("show");//li图片部分{含文字} 全部移除显示样式
    $slider.addClass("hide");	// li图片部分{含文字} 全部添加隐藏样式
    $(id).attr("class","show");//当前点击完整的id对应的li部分class改为显示
    $(".circles>a").css("background-color","#e6e6e6");//所有的小圆点变为浅色色
    $(this).css("background-color","#B2B2B2");//当前的小圆点变为深色
    index=href;//当前点击值的href 链接li的ID 复制给下标
});
//var index=1;//下标初始值为1
//function task(){
//    var $slider=$("#slider>li");//定义变量 li图片部分{含文字}
//    $slider.removeClass("show");//li图片部分{含文字} 全部移除显示样式
//    $slider.addClass("hide");	// li图片部分{含文字} 全部添加隐藏样式
//    index++;    //下标自增
//    if(index>4){index=1}//当下标大于4时 ，恢复为1 
//    var id="#"+index; //定义当前变量id值
//    $(id).attr("class","show"); //当前id对应的li部分class改为显示
//    $("#slider-bottom>a").css("background","#6B6B6B");//所有的小圆点为深色
//    $("#slider-bottom>a:eq("+(index-1)+")").css("background","#fff");//当前的小圆点变为白色
//}
//var timer=setInterval(task,4000);//定义变量定时器
//$("span.left").click(function(){//左箭头绑定单击事件
//    var $slider=$("#slider>li");////定义变量 所有li图片部分{含文字}
//    $slider.removeClass("show").addClass("hide");//li图片部分{含文字} 全部移除显示样式 全部添加隐藏样式
//    index--;//下标自减
//    index<1&&(index=4);//下标小于1时恢复为4
//    var id="#"+index;//定义当前变量id值
//    $(id).attr("class","show");//当前id对应的li部分class改为显示
//    $("#slider-bottom>a").css("background","#6B6B6B");//所有的小圆点为深色
//    $("#slider-bottom>a:eq("+(index-1)+")").css("background","#fff");//当前的小圆点变为白色
//});
//$("span.right").click(function(){//为右箭头绑定单击事件
//    var $slider=$("#slider>li");////定义变量 所有li图片部分{含文字}
//    $slider.removeClass("show").addClass("hide");//li图片部分{含文字} 全部移除显示样式 全部添加隐藏样式
//    index++;//下标自减
//    index>4&&(index=1);//下标大于4时恢复为1
//    var id="#"+index;//定义当前变量id值
//    $(id).attr("class","show");//当前id对应的li部分class改为显示
//    $("#slider-bottom>a").css("background","#6B6B6B");//所有的小圆点为深色
//    $("#slider-bottom>a:eq("+(index-1)+")").css("background","#fff");//当前的小圆点变为白色
//
//});
//function stop(){
//    clearInterval(timer);//清除定时器
//    timer=null;
//}
//function start(){
//    timer=setInterval(task,4000);//启动定时器
//}
//$("#new-songs span").bind("mousemove",stop);//左右箭头清除定时器
//$("#new-songs span").bind("mouseout",start);//左右箭头启动定时器
//$("#slider-bottom>a").bind("mousemove",stop);//左右箭头清除定时器
//$("#slider-bottom>a").bind("mouseout",start);//左右箭头启动定时器