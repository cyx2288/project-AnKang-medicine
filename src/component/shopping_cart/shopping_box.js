/**
 * Created by Qiaodan on 2017/11/8.
 */


//金额加减
var shoppingBoxFn={


    //商品数量加减
    chooseProNum:function(){

        var chooseArea=document.getElementsByClassName('volume_btn');

        for(var i=0;i<chooseArea.length;i++){

            chooseArea[i].getElementsByClassName('reduce')[0].addEventListener("click",shoppingBoxFn.numChangeFn,false);

           chooseArea[i].getElementsByClassName('volume_input')[0].addEventListener("blur",shoppingBoxFn.numChangeFn,false);;

            chooseArea[i].getElementsByClassName('add')[0].addEventListener("click",shoppingBoxFn.numChangeFn,false);
        }

    },

    numChangeFn:function(e){

        var evt=e||window.event;

        evt.preventDefault();

        var thisShowInput=this.parentElement.getElementsByClassName('volume_input')[0];

        var thisValue=thisShowInput.value;

        if(this.className.indexOf('reduce')>-1){

            if(thisValue>1){

                thisShowInput.value=parseFloat(thisValue)-1;

            }else {

                thisShowInput.value=1;

            }

        }else if(this.className.indexOf('add')>-1){

            thisShowInput.value=parseFloat(thisValue)+1;

        } else {
            if(thisValue<1){

                thisShowInput.value=1;

            }
        }




    },

    //单选全选
    CheckBoxFn:function(){

        var allcheckBtn=document.getElementsByClassName('allcheck');

        var allsingleBox=document.getElementsByClassName('singlecheck');

        var allBox=document.getElementsByClassName('aui-radio');

        for(var n=0;n<allcheckBtn.length;n++){

            allcheckBtn[n].addEventListener("click",function(){

                if(this.checked==true){

                    for(var i=0;i<allBox.length;i++){

                        allBox[i].checked=true;

                    }

                }else {

                    for(var i=0;i<allBox.length;i++){

                        allBox[i].checked=false;

                    }
                }

            },false)

        }



        for(var j=0;j<allsingleBox.length;j++){

            allsingleBox[j].addEventListener("click",function(){

                if(this.checked==false){

                    allcheckBtn[0].checked=false;

                    allcheckBtn[1].checked=false;
                }else {

                    var allBoxStatue=judgeSingleBox();

                    if(allBoxStatue){

                        allcheckBtn[0].checked=true;

                        allcheckBtn[1].checked=true;

                    }else {
                        allcheckBtn[0].checked=false;

                        allcheckBtn[1].checked=false;
                    }

                }

            },false)

        }

        function judgeSingleBox(){

            for(var m =0;m<allsingleBox.length;m++){

                if(allsingleBox[m].checked==false){

                    return false;

                }

            }

            return true;//有选中

        }

    },

    //编辑/完成
    editFn:function(){

        var goBuyBtn=document.getElementsByClassName('bottom_go_buy')[0];

        var deleteBtn=document.getElementsByClassName('bottom_delete')[0];

        var ShoppingEditBtn=document.getElementsByClassName('shopping_edit')[0];

        ShoppingEditBtn.addEventListener("click",function(){

            if(this.innerHTML.indexOf('编辑')>-1){

                this.innerHTML='完成';

                goBuyBtn.style.transform='translate3d(0,100%,0)';

                goBuyBtn.style.webkitTransform='translate3d(0,100%,0)';

                deleteBtn.style.transform='translate3d(0,0,0)';

                deleteBtn.style.webkitTransform='translate3d(0,0,0)'

            }else {
                this.innerHTML="编辑";

                goBuyBtn.style.transform='translate3d(0,0,0)';

                goBuyBtn.style.webkitTransform='translate3d(0,0,0)';

                deleteBtn.style.transform='translate3d(0,100%,0)';

                deleteBtn.style.webkitTransform='translate3d(0,100%,0)'
            }





        },false)





    },


    judegNocheck:function(){//判断当前是否一个都没有选择
        var allsingleBox=document.getElementsByClassName('singlecheck');

        for(var i=0;i<allsingleBox.length;i++){

            if(allsingleBox[i].checked){

                return true;
            }
        }

        return false;
    },










}