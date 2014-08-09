
//var url ="http://localhost:3297/";
//var url = "http://apifake.apphb.com/";
var url = "http://apifake.apphb.com/";
var x = '<%=ConfigurationManager.AppSettings["urlService"].ToString(); %>';

$.getJSON(url + "api/photo", function (dsha) {
    var i = 0;
    var j = 0;
    var chuoi = "";
    $.each(dsha, function (index, img) {
        if (i % 2 == 0) {
            chuoi += "<div class=\"row\" style=\"width: 1331px\">";
        }

        chuoi += "<div class=\"photo-display-item\" id=\'" + img.Id + "' style=\"z-index: inherit;\">";
        chuoi += "<div class=\"hover-target\">";
        chuoi += "<div class=\"thumb \">";
        chuoi += "<span class=\"photo_container pc_ju\">";
        chuoi += "<a data-track=\"photo-click\" href=\"/home/imagedetail/"+img.Id+"\" class=\"rapidnofollow photo-click\" >";
        chuoi += "<img id=\"photo_img_12288731054\" src=\'" + url + "upload/" + img.HinhAnh + "'\"  height=\"297px\" alt=\'" + img.TieuDe + "' class=\"pc_img \" border=\"0\">";
        chuoi += "<div class=\"play\"></div>";
        chuoi += "</a>";
        chuoi += "</span>";
        chuoi += "<div class=\"meta\">";
        chuoi += "<div class=\"title\" style=\"display: none;\">";
        chuoi += "<a data-track=\"photo-click\" href=\"\" title=\'" + img.TieuDe + "' class=\"title\" >" + img.TieuDe + "</a>";
        chuoi += "</div>";
        chuoi += "<div class=\"attribution-block\">";
        chuoi += "<span class=\"attribution\">";
        chuoi += "<span>bởi </span>";
        chuoi += "<a data-track=\"owner\" href=\"\" title=\'" + img.NguoiDang + "' class=\"owner\">" + img.NguoiDang + "</a>";
        chuoi += "</span>";
        chuoi += "</div>";
        chuoi += "<span class=\"inline-icons\" style=\"display: none\">";
        chuoi += "<a data-track=\"favorite\" href=\"#\" class=\"rapidnofollow fave-star-inline canfave\" title=\"Thêm ảnh này vào ảnh yêu thích của bạn?\">";
        chuoi += "   <img width=\"12\" height=\"12\" alt=\"[★]\" src=\"http://l.yimg.com/g/images/spaceball.gif\" class=\"img\">";
        chuoi += "<span class=\"fave-count count\">"+img.LuotLike+"</span>";
        chuoi += "</a>";
        chuoi += "</span>";
        chuoi += "</div>";
        chuoi += "</div>";
        chuoi += "</div>";
        chuoi += "</div>";

        if ((j = i + 1) % 2 == 0) {
            chuoi += "</div>";
        }

        i++;
    });
    $("#photo-display-container").html(chuoi, dsha);
});
