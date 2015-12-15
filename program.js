window.onload = init;

function init() {
//宣告資料庫們
//顧客與銷售資料、生產相關參數、存貨與運輸參數
//製作一公升的汽水，需要1升的水，0.01公升的CO2，10g的糖，10g的色素
var produce=20000;//生產量預設20000公升
var water=10000;//100000公升
var sugar=100000;//公斤
var color=100000;//公斤
var co2=10000;//10000公升

var amount_blue = 100;//每種產品的數量
var amount_red = 100;
var amount_orange = 100;
var amount_black = 100;
}

//生產
function produce(name, amount) {
	
	var co2_amount = cingredient;
	var sugar_amount = singredient;
	var water_amount = wingredient;
    var color_amount = col_ingredient;	
    name =  document.getElementById("color").value;
    amount = document.getElementById("newamount");

    return name;
    return amount;

	var reply= confirm('確定要生產嗎?');
	alert(reply);


}
//跳窗調整原料量
function ingredient1(){
	var wingredient =  prompt('請輸入所需此原料數量!') ;
	alert('您所需要的數量為:' + wingredient);
	document.getElementById("amount_water").innerHTML=wingredient.toString();
	document.getElementById("amount_sugar").innerHTML=0.01*wingredient.toString();
	document.getElementById("amount_co2").innerHTML=0.01*wingredient.toString();
	document.getElementById("amount_color").innerHTML=0.01*wingredient.toString();
	document.getElementById("newamount").innerHTML=wingredient.toString();
}
function ingredient2(){
	var singredient =  prompt('請輸入所需此原料數量!') ;
	alert('您所需要的數量為:' + singredient);
	document.getElementById("amount_water").innerHTML=100*singredient.toString();
	document.getElementById("amount_sugar").innerHTML=singredient.toString();
	document.getElementById("amount_co2").innerHTML=singredient.toString();
	document.getElementById("amount_color").innerHTML=singredient.toString();
	document.getElementById("newamount").innerHTML=100*singredient.toString();
}
function ingredient3(){
	var cingredient =  prompt('請輸入所需此原料數量!') ;
	alert('您所需要的數量為:' + cingredient);
	document.getElementById("amount_water").innerHTML=100*cingredient.toString();
	document.getElementById("amount_sugar").innerHTML=cingredient.toString();
	document.getElementById("amount_co2").innerHTML=cingredient.toString();
	document.getElementById("amount_color").innerHTML=cingredient.toString();
	document.getElementById("newamount").innerHTML=100*cingredient.toString();
}
function ingredient4(){
	var colingredient =  prompt('請輸入所需此原料數量!') ;
	alert('您所需要的數量為:' + colingredient);
	document.getElementById("amount_water").innerHTML=100*colingredient.toString();
	document.getElementById("amount_sugar").innerHTML=colingredient.toString();
	document.getElementById("amount_co2").innerHTML=colingredient.toString();
	document.getElementById("amount_color").innerHTML=colingredient.toString();
	document.getElementById("newamount").innerHTML=100*colingredient.toString();
}

//跳窗調整製造量
function p_amount(){
	var pamount =  prompt('請輸入要製造的數量!') ;
	alert('您要製造的數量為:' + pamount + 'L');
	document.getElementById("newamount").innerHTML=pamount.toString();

}
//跳窗新增產品
function addproduct(){
	var newproduct =  prompt('請輸入要新增的產品!') ;
	alert('您要新增的產品為:' + newproduct);

}
//存貨
function stock() {

}

//行銷
function sell() {

}