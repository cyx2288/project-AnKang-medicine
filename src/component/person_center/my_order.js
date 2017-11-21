/**
 * Created by Qiaodan on 2017/11/21.
 */


var orderTabChange={

    moveTab:function(){

        var clickEle=document.getElementsByClassName('all_tab')[0].getElementsByTagName('p');

        var allTabEle=document.getElementsByClassName('order_box')[0];


        for(var i=0;i< clickEle.length;i++){

            clickEle[i].addEventListener('click',tabMoveFn,false);

        }

        function tabMoveFn(e){

            document.getElementsByClassName('show')[0].className= document.getElementsByClassName('show')[0].className.replace('show',"");

            this.className="show";

            var thisIndex=getRightIndex();

            var thisWindowWidth=window.innerWidth;

            var moveDis=-thisWindowWidth*thisIndex;

            allTabEle.style.transform='translate3d('+moveDis+'px,0,0)';

        }
        function getRightIndex(){
            for(var j=0;j< clickEle.length;j++){

                if(clickEle[j].className.indexOf('show')>-1){

                    return j
                }
            }
        }




    }
}