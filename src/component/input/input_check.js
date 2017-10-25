var inputFn = {

    inputCheck: function () {

        event.preventDefault();

        if (this.className.indexOf('locked') == -1) {

            var time = 6;

            var thisInnerHtml = this.innerHTML;

            this.innerHTML = '重新发送' + time + 's';

            this.className += ' locked';

            var thisSet = setInterval(function () {

                this.innerHTML = '重新发送' + (--time) + 's';

                if (time <= 0) {

                    clearInterval(thisSet);

                    this.className = this.className.replace('locked', '');

                    this.innerHTML=thisInnerHtml;

                }

            }.bind(this), 1000)
            
        }
    }

};
