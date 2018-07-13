$(function () {
    //跳转页面保持状态高亮js
    var urlstr = location.href;
    //alert((urlstr + '/').indexOf($(this).attr('href')));
    var urlstatus = false;
    $(".menu-second li a,.single-menu").each(function () {
        if ((urlstr + '/').indexOf($(this).attr('href')) > -1 && $(this).attr('href') != '') {
            $(this).addClass('menu-second-selected');
            var fmeaun = $(this).parent().parent()
            fmeaun.removeClass('collapse').addClass('collapse in')
            urlstatus = true;
        } else {
            $(this).removeClass('menu-second-selected');
        }
    });
    // if (!urlstatus) { $("#menu a").eq(0).addClass('menu-second-selected'); }
// -------------------------------------------------------------------------------------

// -----------------
    $("#editbtn").click(function (event) {
        event.preventDefault();
        if (this.innerHTML === "修改密码") {
            $('#password').attr("disabled", false).attr("type", "text");
            this.innerHTML = "确认修改"
        }
        else {
            $('#password').attr("disabled", true).attr("type", "password");
            this.innerHTML = "修改密码"
        }

    })
})