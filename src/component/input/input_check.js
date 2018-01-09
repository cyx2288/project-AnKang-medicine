var inputFn = {

    inputCheck: function (num) {

        event.preventDefault();

        var thisEle= document.getElementsByClassName('yao_input_check_button')[0];

        if (thisEle.className.indexOf('locked') == -1) {

            var time = num;

            var thisInnerHtml = thisEle.innerHTML;

            thisEle.innerHTML = '重新发送' + time + 's';

            thisEle.className += ' locked';

            var thisSet = setInterval(function () {

                thisEle.innerHTML = '重新发送' + (--time) + 's';

                if (time <= 0) {

                    clearInterval(thisSet);

                    thisEle.className = thisEle.className.replace('locked', '');

                    thisEle.innerHTML=thisInnerHtml;

                }

            }.bind(this), 1000)
            
        }
    }

};
