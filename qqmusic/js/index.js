//((){
//�赥�Ƽ��ײ�СԲ�����
//var CC=$(".circles>li");
//for(var i=0;i<CC.length;i++){
//	CC[i].addEventListener("click",function(e){
//        e.preventDefault();
//    });
//}
////Ϊ�赥�Ƽ��ײ�СԲ��󶨵����¼�
//$(".circles>li").click(function(){
//	var play=$(".mod-play>li");
//	var i=CC.index();
//	console.log(i);
//})

//})();
/********�赥�Ƽ��ײ�СԲ�����*******/
var as=$(".circles>a");//СԲ�����
for(var i=0;i<as.length;i++){
    as[i].addEventListener("click",function(e){
        e.preventDefault();
    });
}
$(".circles>a").click(function(){//СԲ��󶨵����¼�
    var $slider=$(".mod-play>li");//liͼƬ����{������}
    var href=$(this).attr("href").slice(1); //��ǰ���ֵ��href ����li��ID
    var id='#'+href;// ��ǰ���������id
	console.log(id);
    $slider.removeClass("show");//liͼƬ����{������} ȫ���Ƴ���ʾ��ʽ
    $slider.addClass("hide");	// liͼƬ����{������} ȫ�����������ʽ
    $(id).attr("class","show");//��ǰ���������id��Ӧ��li����class��Ϊ��ʾ
    $(".circles>a").css("background-color","#e6e6e6");//���е�СԲ���Ϊǳɫɫ
    $(this).css("background-color","#B2B2B2");//��ǰ��СԲ���Ϊ��ɫ
    index=href;//��ǰ���ֵ��href ����li��ID ���Ƹ��±�
});
//var index=1;//�±��ʼֵΪ1
//function task(){
//    var $slider=$("#slider>li");//������� liͼƬ����{������}
//    $slider.removeClass("show");//liͼƬ����{������} ȫ���Ƴ���ʾ��ʽ
//    $slider.addClass("hide");	// liͼƬ����{������} ȫ�����������ʽ
//    index++;    //�±�����
//    if(index>4){index=1}//���±����4ʱ ���ָ�Ϊ1 
//    var id="#"+index; //���嵱ǰ����idֵ
//    $(id).attr("class","show"); //��ǰid��Ӧ��li����class��Ϊ��ʾ
//    $("#slider-bottom>a").css("background","#6B6B6B");//���е�СԲ��Ϊ��ɫ
//    $("#slider-bottom>a:eq("+(index-1)+")").css("background","#fff");//��ǰ��СԲ���Ϊ��ɫ
//}
//var timer=setInterval(task,4000);//���������ʱ��
//$("span.left").click(function(){//���ͷ�󶨵����¼�
//    var $slider=$("#slider>li");////������� ����liͼƬ����{������}
//    $slider.removeClass("show").addClass("hide");//liͼƬ����{������} ȫ���Ƴ���ʾ��ʽ ȫ�����������ʽ
//    index--;//�±��Լ�
//    index<1&&(index=4);//�±�С��1ʱ�ָ�Ϊ4
//    var id="#"+index;//���嵱ǰ����idֵ
//    $(id).attr("class","show");//��ǰid��Ӧ��li����class��Ϊ��ʾ
//    $("#slider-bottom>a").css("background","#6B6B6B");//���е�СԲ��Ϊ��ɫ
//    $("#slider-bottom>a:eq("+(index-1)+")").css("background","#fff");//��ǰ��СԲ���Ϊ��ɫ
//});
//$("span.right").click(function(){//Ϊ�Ҽ�ͷ�󶨵����¼�
//    var $slider=$("#slider>li");////������� ����liͼƬ����{������}
//    $slider.removeClass("show").addClass("hide");//liͼƬ����{������} ȫ���Ƴ���ʾ��ʽ ȫ�����������ʽ
//    index++;//�±��Լ�
//    index>4&&(index=1);//�±����4ʱ�ָ�Ϊ1
//    var id="#"+index;//���嵱ǰ����idֵ
//    $(id).attr("class","show");//��ǰid��Ӧ��li����class��Ϊ��ʾ
//    $("#slider-bottom>a").css("background","#6B6B6B");//���е�СԲ��Ϊ��ɫ
//    $("#slider-bottom>a:eq("+(index-1)+")").css("background","#fff");//��ǰ��СԲ���Ϊ��ɫ
//
//});
//function stop(){
//    clearInterval(timer);//�����ʱ��
//    timer=null;
//}
//function start(){
//    timer=setInterval(task,4000);//������ʱ��
//}
//$("#new-songs span").bind("mousemove",stop);//���Ҽ�ͷ�����ʱ��
//$("#new-songs span").bind("mouseout",start);//���Ҽ�ͷ������ʱ��
//$("#slider-bottom>a").bind("mousemove",stop);//���Ҽ�ͷ�����ʱ��
//$("#slider-bottom>a").bind("mouseout",start);//���Ҽ�ͷ������ʱ��