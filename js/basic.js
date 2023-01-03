AOS.init();

/*******************
	portfolio navbar
********************/
const $btn = $("#portfolio .nav li a");

$btn.click(function () {
	$btn.removeClass("active");
	$(this).addClass("active");
	return false;
});

$(".btn_all").click(function () {
	$(".all").fadeIn(500);
	return false;
});
$(".btn_js").click(function () {
	$(".all").hide();
	$(".js").fadeIn(500);
	return false;
});
$(".btn_react").click(function () {
	$(".all").hide();
	$(".react").fadeIn(500);
	return false;
});
$(".btn_responsive").click(function () {
	$(".all").hide();
	$(".responsive").fadeIn(500);
	return false;
});
$(".btn_clone").click(function () {
	$(".all").hide();
	$(".clone").fadeIn(500);
	return false;
});

/* 모달 */
$("#list_tving").click(function () {
	$("#modal_tiving").css("display", "flex");
});
$("#list_maison").click(function () {
	$("#modal_maison").css("display", "flex");
});
$("#list_eggdrop").click(function () {
	$("#modal_eggdrop").css("display", "flex");
});
$("#list_hideco").click(function () {
	$("#modal_hideco").css("display", "flex");
});
$("#list_tiretech").click(function () {
	$("#modal_tiretech").css("display", "flex");
});
$("#list_sns").click(function () {
	$("#modal_sns").css("display", "flex");
});
$("#list_island").click(function () {
	$("#modal_island").css("display", "flex");
});
$("#list_binggrae").click(function () {
	$("#modal_binggrae").css("display", "flex");
});
$(".closeBtn").click(function () {
	$(".modal").hide();
});

/**********************
	스크롤값
 **********************/
// window.addEventListener("scroll", function () {
// 	console.log(window.scrollY);
// });
