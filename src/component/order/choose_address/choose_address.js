/**
 * Created by Qiaodan on 2017/11/13.
 */

function chooseAddress(details){

    var allAddressList=document.getElementsByClassName('address_select');

    for(var i=0;i<allAddressList.length;i++){

        allAddressList[i].addEventListener('click',function(){

            if(document.getElementsByClassName('choosed')[0]){

                document.getElementsByClassName('choosed')[0].className=document.getElementsByClassName('choosed')[0].className.replace('choosed','')

            }

            this.className=this.className+' choosed';


        },false)

    }

}
