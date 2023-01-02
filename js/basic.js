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
	$("#modal_tiving").show();
});
$("#list_maison").click(function () {
	$("#modal_maison").show();
});
$("#list_eggdrop").click(function () {
	$("#modal_eggdrop").show();
});
$("#list_hideco").click(function () {
	$("#modal_hideco").show();
});
$("#list_tiretech").click(function () {
	$("#modal_tiretech").show();
});
$("#list_sns").click(function () {
	$("#modal_sns").show();
});
$("#list_island").click(function () {
	$("#modal_island").show();
});
$("#list_binggrae").click(function () {
	$("#modal_binggrae").show();
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
