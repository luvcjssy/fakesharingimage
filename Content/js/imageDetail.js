var idimg = document.getElementById("txtImg").value;
//var url = "http://localhost:3297/";
//var url = "http://www.fakeapi.apphb.com/";
var url = "http://apifake.apphb.com/";
var urlApi = '<%=ConfigurationManager.AppSettings["urlService"].ToString(); %>';

$.getJSON(url + "/api/photo/" + idimg, function (img) {

    var chuoi = "\<div class=\"photo-div\" id=\"main-photo-container\" style=\"height: 496px; margin-top: 0px; margin-bottom: 0px;\">";
    chuoi += "<img id=\"liquid-photo\" alt=\"photo\" aria-describedby=\"title_div\" src=\'" + url + "upload/" + img.HinhAnh + "'\" style=\"height: 496px; opacity: 1; visibility: visible;\">";
    chuoi += "</div>";
    chuoi += "<div id=\"photo-actions\">";
    chuoi += "<h1 id=\"title_div\" property=\"dc:title\" class=\"photo-title\">" + img.TieuDe + "</h1>";
    chuoi += "<div id=\"action-buttons-right\">";
    chuoi += "<ul id=\"stats_ul\">";
    chuoi += "<li id=\"fave-count\" class=\"stat-item\">";
    chuoi += "<a href=\"\" onlick=\"likeimg(" + idimg + ")\" class=\"ywa-track fave-button visible-if-can-fave\" id=\"button-bar-fave\"  tabindex=\"4\">";
    chuoi += "<span class=\"ie-hack\">&nbsp;</span>";
    chuoi += "<span class=\"stat-icon star \">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>" + img.LuotLike + "</a></li>";
    chuoi += "<li class=\"divider\"><span><span>&nbsp;</span></span></li>";
    chuoi += "<li class=\"share-this-v3 share-this-more last\">";
    chuoi += "<input type=\"submit\" class=\"imgSub\" title=\"Post hình ảnh này lên Facebook của bạn.\" />";
    chuoi += "</li></ul></div></div>";

    $("#photo-container").html(chuoi, img);

    var tdHinhAnh = "<img src=\'" + url + "upload/" + img.HinhAnh + "'\" style=\"height: 50px; opacity: 1; visibility: visible;\">";
    tdHinhAnh += "<input type=\"hidden\" id=\"txtUrl\" name=\"txtUrl\" value=\'" + url + "upload/" + img.HinhAnh + "'\"/>";
    $("#tdHinhAnh").html(tdHinhAnh, img);
});

$(document).delegate("#button-bar-fave", "click", function () {
    $.post(url + "/api/Photo/" + idimg,
    function (data) { alert('ok') });
});