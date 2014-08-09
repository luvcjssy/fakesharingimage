var username = document.getElementById("txtUserName").value;
//var url = "http://localhost:3297/";
//var url = "http://fakeapi.apphb.com/";
var url = "http://apifake.apphb.com/";
$.getJSON(url + "api/photo" + "?user=" + username, function (dsha) {
    var chuoi = "";

    $.each(dsha, function (index, img) {
        chuoi += "<div class=\"photoStream-photo\" >";
        chuoi += "<div class=\"photoStream-container\">";
        chuoi += " &nbsp;";
        chuoi += "<div class=\"photoStream-thumb\">";
        chuoi += "<span>";
        chuoi += "<a href=\"/home/imagedetail/" + img.Id + "\">";
        chuoi += "<img src=\'" + url + "upload/" + img.HinhAnh + "'\" width=\"240px\" />";
        chuoi += "</a>";
        chuoi += "</span>";
        chuoi += "</div>";
        chuoi += "<div class=\"photoStream-title\">";
        chuoi += "<div class=\"StreamView\"><h4 id=\"titleAnh" + img.Id + "\">" + img.TieuDe + "</h4>";
        chuoi += "<input type=\"text\" id=\"txtTitle" + img.Id + "\" style=\"display: none; width: 240px; background-color: lightgoldenrodyellow;\" />";
        chuoi += "<div class=\"buttons\" id=\"idButt" + img.Id + "\" style=\"display:none\">";
        chuoi += "<button class=\"Butt\" id=\"idLuu\" onclick=\"luu(" + img.Id + ")\">LƯU</button>";
        chuoi += "<button class=\"CancelButt\" id=\"idHuy\" onclick=\"huy(" + img.Id + ")\">HỦY</button></div>";
        chuoi += "</div>";
        chuoi += "</div>";
        chuoi += "<div class=\"photoStream-meta\">";
        chuoi += "<div class=\"StreamView\">";
        chuoi += "<div class=\"Desc\">Nhấp vào để chỉnh sửa hoặc xóa.";
        chuoi += " <div>(<b id=\"\" onclick=\"sua(" + img.Id + ")\">Sửa</b> | <b id=\"xoaanh\" onclick=\"xoa(" + img.Id + ")\">Xóa</b>)</div>";
        chuoi += "</div>";
        chuoi += "</div>";
        chuoi += "</div>";
        chuoi += "</div>";
        chuoi += "</div>";
    });

    $("#photo-display-container").html(chuoi, dsha);
});

function loadTrang() {
    $.getJSON(url + "api/photo" + "?user=" + username, function (dsha) {
        var chuoi = "";

        $.each(dsha, function (index, img) {
            chuoi += "<div class=\"photoStream-photo\" >";
            chuoi += "<div class=\"photoStream-container\">";
            chuoi += " &nbsp;";
            chuoi += "<div class=\"photoStream-thumb\">";
            chuoi += "<span>";
            chuoi += "<a href=\"/home/imagedetail/" + img.Id + "\">";
            chuoi += "<img src=\'" + url + "upload/" + img.HinhAnh + "'\" width=\"240px\" />";
            chuoi += "</a>";
            chuoi += "</span>";
            chuoi += "</div>";
            chuoi += "<div class=\"photoStream-title\">";
            chuoi += "<div class=\"StreamView\"><h4 id=\"titleAnh" + img.Id + "\">" + img.TieuDe + "</h4>";
            chuoi += "<input type=\"text\" id=\"txtTitle" + img.Id + "\" style=\"display: none; width: 240px; background-color: lightgoldenrodyellow;\" />";
            chuoi += "<div class=\"buttons\" id=\"idButt" + img.Id + "\" style=\"display:none\">";
            chuoi += "<button class=\"Butt\" id=\"idLuu\" onclick=\"luu(" + img.Id + ")\">LƯU</button>";
            chuoi += "<button class=\"CancelButt\" id=\"idHuy\" onclick=\"huy(" + img.Id + ")\">HỦY</button></div>";
            chuoi += "</div>";
            chuoi += "</div>";
            chuoi += "<div class=\"photoStream-meta\">";
            chuoi += "<div class=\"StreamView\">";
            chuoi += "<div class=\"Desc\">Nhấp vào để chỉnh sửa hoặc xóa.";
            chuoi += " <div>(<b id=\"\" onclick=\"sua(" + img.Id + ")\">Sửa</b> | <b id=\"xoaanh\" onclick=\"xoa(" + img.Id + ")\">Xóa</b>)</div>";
            chuoi += "</div>";
            chuoi += "</div>";
            chuoi += "</div>";
            chuoi += "</div>";
            chuoi += "</div>";
        });

        $("#photo-display-container").html(chuoi, dsha);
    });

}
function sua(id) {
    var x = document.getElementById("titleAnh" + id).innerText;
    $("#titleAnh" + id).css("display", "none");
    $("#txtTitle" + id).css("display", "block");
    document.getElementById("txtTitle" + id).value = x;
    $("#idButt" + id).css("display", "block");
}
function xoa(id) {
    $.ajax(url + "api/photo/" + id, { type: "DELETE" }).done(
        function () {
            alert("Xóa ảnh thành công");
            loadTrang();
        });
}

function huy(id) {
    $("#titleAnh" + id).css("display", "block");
    $("#txtTitle" + id).css("display", "none");
    $("#idButt" + id).css("display", "none");
}

function luu(id) {
    var x = document.getElementById("txtTitle" + id).value;
    $.ajax(url + "api/photo/" + id + "?tieude=" + x, { type: "PUT" }).done(
        function () {
            alert("Cập nhật ảnh thành công thành công");
            $("#titleAnh" + id).css("display", "block");
            document.getElementById("titleAnh" + id).innerText = x;
            $("#txtTitle" + id).css("display", "none");
            $("#idButt" + id).css("display", "none");
        });
}