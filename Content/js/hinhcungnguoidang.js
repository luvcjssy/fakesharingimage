var idimg = document.getElementById("txtImg").value;
//var url = "http://localhost:3297/";
//var url = "http://fakeapi.apphb.com/";
var url = "http://apifake.apphb.com/";

$.getJSON(url + "/api/photo/" + idimg, function (img) {
    $.getJSON(url + "api/values" + "?user=" + img.NguoiDang, function (dsha) {
        var chuoi = "";
        $.each(dsha, function (index, img) {
                chuoi += "<li style=\"float: left\" class=\"loaded\">";
                chuoi += "<a class=\"context-thumb-link ywa-track\" href=\"/home/imagedetail/" + img.Id + "\" title=\""+img.TieuDe+"\">";
                chuoi += "<img id=\"nextprev_thumb_explore12612730303\" class=\"nextprev_thumb\" src=\'" + url + "upload/" + img.HinhAnh + "'\" width=\"56\" height=\"56\" title=\"" + img.TieuDe + "\">";
                chuoi += "</a></li>";
        });
        $("#context-photos-list-explore-").html(chuoi, dsha);
    });

});