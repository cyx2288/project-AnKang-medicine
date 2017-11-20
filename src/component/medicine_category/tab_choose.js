/**
 * Created by Qiaodan on 2017/11/7.
 */

var akMedicineTab={

    tabClickFn:function(details){

        var _this=this;


        if(!details){
            details={}
        }

        var clickEle=details.clickEle ||'category_tab';

        var showTagName=details.showTagName||'span';

        _this.fn=details.fn||0;

        var chooseAllDate=document.getElementsByClassName(clickEle)[0];

        chooseAllDate.addEventListener("click",function(e){

            var evt=e||window.event;

            var thistargetEle=evt.srcElement||evt.target;

            if(thistargetEle.className.indexOf('choosed')<0&&thistargetEle.tagName.toLowerCase()==showTagName){

                if(document.getElementsByClassName('choosed')[0]){
                    document.getElementsByClassName('choosed')[0].className="";
                }

                thistargetEle.className="choosed";

                if(_this.fn){

                    _this.fn()
                }

            }



        },false)

    }

}
