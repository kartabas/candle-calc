let watterGramm;

let waxAndAromaGramm;
let aromaProzent;

let waxGramm;
let aromaGramm;

let allProzentAroma
let countCandle;


$(document).ready(function () {

	$("#Watter__to__Wax__calc").click(function () {

		watterGramm = $("#Watter__g").val();
		waxAndAromaGramm = (watterGramm * 0.86);
		$("#Wax__g").html(roundUpto(waxAndAromaGramm, 3) + " г ");
		$("#Wax__w__AromaM").val(roundUpto(waxAndAromaGramm, 3));
	});


	$("#Wax__and__AromaM__calc").click(function () {
		waxAndAromaGramm = $("#Wax__w__AromaM").val();
		aromaProzent = $("#Prozent__AromaM").val();

		allProzentAroma = (100 + parseInt(aromaProzent));

		waxGramm = (waxAndAromaGramm / allProzentAroma) * 100;
		aromaGramm = waxAndAromaGramm - waxGramm;

		$("#clear__Wax__without__AromaM").html(roundUpto(waxGramm, 2) + " г ");
		$("#clear__AromaM").html(roundUpto(aromaGramm, 2) + " г ");

		$("#main__Candle__info").html("Моя свічка містить " + waxAndAromaGramm + "г (віск + аромамасло)");
		$("#main__Prozent__info").html("Я використовую " + aromaProzent + "% аромамасла");



		$("#test__Wax").html(waxAndAromaGramm + "/" + allProzentAroma + "% =" + roundUpto(waxGramm,2) + "г");
		$("#test__All__Wax").html(roundUpto(waxGramm,2) + "+" + roundUpto(aromaGramm,2) + "=" + waxAndAromaGramm + "г");
		$("#test__AromaM").html(waxAndAromaGramm + "-" + roundUpto(waxGramm,2) + "=" + roundUpto(aromaGramm,2) + "г");

		$("#Waga_one_Wax_and_AromaM").html(waxAndAromaGramm+"г");
		$("#Waga_only_Wax").html(roundUpto(waxGramm,2)+"г");
		$("#Waga_only_AromaM").html(roundUpto(aromaGramm,2)+"г");
	});



	$("#calc__X_Candle").click(function () {
		countCandle = $("#footer__input__count").val();

		$("#Candle_count").html(countCandle);
		
		let waxGrammXcandle = waxGramm * countCandle;
		let aromaGrammXcandle = aromaGramm * countCandle;
		let waxAndAromaGrammXcandle = waxGrammXcandle + aromaGrammXcandle;

		$("#Waga_x_Wax_and_AromaM").html(waxAndAromaGrammXcandle);
		$("#Waga_x_Wax").html(roundUpto(waxGrammXcandle,2));
		$("#Waga_x_AromaM").html(roundUpto(aromaGrammXcandle,2));
	});



});


let roundUpto = function (number, upto) {
	return Number(number.toFixed(upto));
}