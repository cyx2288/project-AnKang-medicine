/**
 * Created by Qiaodan on 2017/11/21.
 */



var orderFn={

    tabChange:function(num){//订单切换
        var tabChangeContent=document.getElementsByClassName('order_box')[0];//tab主体内容

        var tabChangeBar=document.getElementsByClassName('all_tab')[0].getElementsByTagName('p');//tab选项

        var thisWindowWidth=window.innerWidth;

        var needTranslateX=-parseFloat(num)*thisWindowWidth;


        tabChangeContent.style.transform="translate3d("+needTranslateX+"px,0,0)";

        tabChangeContent.style.webkitTransform="translate3d("+needTranslateX+"px,0,0)";

        document.getElementsByClassName('show')[0].className= document.getElementsByClassName('show')[0].className.replace('show',"");

        tabChangeBar[num].className="show";
    },

    starShow:function(){//星星点亮
        var allStarContent=document.getElementsByClassName('star_content');

        for(var i=0;i<allStarContent.length;i++){
            allStarContent[i].addEventListener('click',function(e){

                var evt=e||window.event;

                var thistargetEle=evt.srcElement||evt.target;

                if(thistargetEle.tagName.toUpperCase()=='IMG'){

                    var allImgEle=this.getElementsByTagName('img');

                    for(var m=0;m<allImgEle.length;m++){

                        allImgEle[m].style.filter='grayscale(0)'
                    }

                    if(this.getElementsByClassName('yellow')[0]){

                        this.getElementsByClassName('yellow')[0].className= document.getElementsByClassName('yellow')[0].className.replace('yellow','')
                    }

                    thistargetEle.className='yellow'
                }

            },false)
        }

    },

    evaluateBoxShow:function(){
        document.getElementsByClassName('evaluate_box')[0].style.display='block';

        setTimeout(function(){

            document.getElementsByClassName('evaluate_box')[0].className=document.getElementsByClassName('evaluate_box')[0].className+' box_show'

        },1)
    },

    evaluateBoxhide:function(){

        document.getElementsByClassName('evaluate_box')[0].style.display='none';
    }



}



