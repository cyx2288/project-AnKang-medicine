/**
 * Created by ZHUANGYI on 2018/1/10.
 */
var AnkangMain = {


    mainCompatibleIOS11: function () {

        var searchBox = document.getElementsByClassName('top_search')[0];

        var compatibleBox = document.getElementsByClassName('medicine_box')[0];

        var footerBox = document.getElementsByClassName('bottom_tabbar')[0];

        var ios11 = browser.os.iOS && browser.IosVersion && browser.IosVersion;


        if (!browser.supplier.wechat) {

            //判断是否是ios11以上
            if (parseInt(ios11) >= 11) {

                compatibleBox.className += ' compatible_box';

                searchBox.className += ' compatible_search';

                footerBox.className += ' compatible_footer';


            }


        }


    },

    CompatibleIOS11: function (compatibleBox, changeClass) {

        var ios11 = browser.os.iOS && browser.IosVersion && browser.IosVersion;


        if (!browser.supplier.wechat) {
            //判断是否是ios11以上
            if (parseInt(ios11) >= 11) {


                compatibleBox.className += ' ' + changeClass;


            }
        }
    },
    productCompatibleIOS11: function () {

        var compatibleBox = document.getElementsByClassName('product_page')[0];

        var ios11 = browser.os.iOS && browser.IosVersion && browser.IosVersion;


        if (!browser.supplier.wechat) {
            //判断是否是ios11以上
            if (parseInt(ios11) >= 11) {


                compatibleBox.className += ' compatible_active_change';

            }
        }
    },


};