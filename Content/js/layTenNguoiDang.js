var idimg = document.getElementById("txtImg").value;
//var url = "http://localhost:3297/";
//var url = "http://fakeapi.apphb.com/";
var url = "http://apifake.apphb.com/";
$.getJSON(url + "/api/photo/" + idimg, function (img) {
    var chuoi ="<a href=\"#\" data-track=\"photoAttributionNameClick\" data-rapid_p=\"3\">";
    chuoi += img.NguoiDang;
    chuoi += "</a>";
    $(".photo-name-line-1").html(chuoi, img);
});