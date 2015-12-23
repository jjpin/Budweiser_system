window.onload = init;

//這裡放一開啟網頁就要執行一次的函式
function init() {
	stockRefresh();
}

//宣告資料庫們
//顧客與銷售資料、生產相關參數、存貨與運輸參數

//製作一公升的汽水，需要1升的水，0.01公升的CO2，10g的糖，10g的色素


var water=100000;//100000公升
var sugar=1000;//公斤
var color=1000;//公斤
var co2=1000;//1000公升


var store1_cur = [35, 10, 50]; //分店現在狀況(今日銷售, 剩餘存貨, 配送數量)
var store2_cur = [28, 20, 50];
var store3_cur = [34, 9, 50];
var store4_cur = [8, 32, 50];
var store5_cur = [22, 20, 50];
var store6_cur = [39, 5, 50];
var store7_cur = [19, 25, 50];
var store8_cur = [20, 20, 50];
var store9_cur = [15, 30, 50];
var store10_cur = [40, 5, 50];

//分店1的各月銷售量 A=藍40% B=紅30% C=橘20% D=黑10%
var store1_sales_A = [400, 600, 840, 602, 732, 760, 840, 880, 900, 758, 592, 440]; 
var store1_sales_B = [300, 450, 630, 452, 549, 570, 630, 660, 675, 568, 360, 330];
var store1_sales_C = [200, 300, 420, 301, 366, 380, 420, 440, 450, 379, 240, 220];
var store1_sales_D = [100, 150, 210, 150, 183, 190, 210, 220, 225, 190, 120, 110];

var store2_sales_A = [640, 1000, 1056, 1002, 1132, 1160, 1196, 1040, 940, 878, 800, 600];
var store2_sales_B = [480, 750, 792, 752, 849, 870, 897, 780, 705, 658, 600, 450];
var store2_sales_C = [320, 500, 528, 501, 566, 580, 598, 520, 470, 430, 400, 300];
var store2_sales_D = [160, 250, 264, 250, 283, 290, 299, 260, 235, 220, 200, 150];

var store3_sales_A = [440, 520, 760, 802, 720, 840, 920, 880, 900, 749, 560, 520];
var store3_sales_B = [330, 390, 570, 602, 360, 630, 690, 660, 675, 562, 420, 390];
var store3_sales_C = [220, 260, 380, 401, 360, 420, 460, 440, 450, 375, 280, 260];
var store3_sales_D = [110, 130, 190, 201, 180, 210, 230, 220, 225, 187, 140, 130];

var store4_sales_A = [360, 480, 760, 520, 576, 760, 800, 582, 760, 600, 360, 352];
var store4_sales_B = [270, 360, 578, 390, 432, 570, 600, 639, 570, 450, 270, 264];
var store4_sales_C = [180, 240, 380, 260, 288, 380, 400, 426, 360, 300, 180, 176];
var store4_sales_D = [90, 120, 190, 130, 144, 190, 200, 213, 180, 150, 90, 88];

var store5_sales_A = [440, 520, 760, 802, 720, 840, 920, 880, 900, 749, 560, 520];
var store5_sales_B = [330, 390, 570, 602, 360, 630, 690, 660, 675, 562, 420, 390];
var store5_sales_C = [220, 260, 380, 401, 360, 420, 460, 440, 450, 375, 280, 260];
var store5_sales_D = [110, 130, 190, 201, 180, 210, 230, 220, 225, 187, 140, 130];

var store6_sales_A = [400, 600, 840, 602, 732, 760, 840, 880, 900, 758, 592, 440]; 
var store6_sales_B = [300, 450, 630, 452, 549, 570, 630, 660, 675, 568, 360, 330];
var store6_sales_C = [200, 300, 420, 301, 366, 380, 420, 440, 450, 379, 240, 220];
var store6_sales_D = [100, 150, 210, 150, 183, 190, 210, 220, 225, 190, 120, 110];

var store7_sales_A = [440, 520, 760, 802, 720, 840, 920, 880, 900, 749, 560, 520];
var store7_sales_B = [330, 390, 570, 602, 360, 630, 690, 660, 675, 562, 420, 390];
var store7_sales_C = [220, 260, 380, 401, 360, 420, 460, 440, 450, 375, 280, 260];
var store7_sales_D = [110, 130, 190, 201, 180, 210, 230, 220, 225, 187, 140, 130];

var store8_sales_A = [400, 600, 840, 602, 732, 760, 840, 880, 900, 758, 592, 440]; 
var store8_sales_B = [300, 450, 630, 452, 549, 570, 630, 660, 675, 568, 360, 330];
var store8_sales_C = [200, 300, 420, 301, 366, 380, 420, 440, 450, 379, 240, 220];
var store8_sales_D = [100, 150, 210, 150, 183, 190, 210, 220, 225, 190, 120, 110];

var store9_sales_A = [360, 480, 760, 520, 576, 760, 800, 582, 760, 600, 360, 352];
var store9_sales_B = [270, 360, 578, 390, 432, 570, 600, 639, 570, 450, 270, 264];
var store9_sales_C = [180, 240, 380, 260, 288, 380, 400, 426, 360, 300, 180, 176];
var store9_sales_D = [90, 120, 190, 130, 144, 190, 200, 213, 180, 150, 90, 88];

var store10_sales_A = [640, 1000, 1056, 1002, 1132, 1160, 1196, 1040, 940, 878, 800, 600];
var store10_sales_B = [480, 750, 792, 752, 849, 870, 897, 780, 705, 658, 600, 450];
var store10_sales_C = [320, 500, 528, 501, 566, 580, 598, 520, 470, 430, 400, 300];
var store10_sales_D = [160, 250, 264, 250, 283, 290, 299, 260, 235, 220, 200, 150];


productNames = ["藍色汽水","紅色汽水","橘色汽水","黑色汽水"];
productAmounts = [5000,5000,5000,5000];


//生產要素
var pamount
var wingredient=5000;
var singredient=50;
var cingredient=50;
var col_ingredient=50;

//存貨狀態
var ingredientStats = ["正常","正常","正常","正常"];
var productStats = ["正常","正常","正常","正常"];

//補貨相關
var ingredientOrderAmount = [100000,1000,1000,1000];
var addStockRequestIndex = 0;

//生產
function sureforproduce(){
	var name =  document.getElementById("color").value;
    var amount = parseFloat(document.getElementById("newamount").innerHTML); 

    produce(name,amount);

}
function produce(name,amount) {
	
	 co2   -= cingredient;
	 sugar -= singredient;
	 water -= wingredient;
     color -= col_ingredient;

     
 
	var reply= confirm('生產成功!');

	for(var i=0 ; i < productNames.length ; i++ ){
		if ( productNames[i] == name ) {
			productAmounts[i] += amount;

		}
		
	}
	
	alert("您所製造的品項為:"+ name +"，製造量為:"+ amount +"L");
	
	stockRefresh();

}
//跳窗調整原料量(按比例)
function ingredient1(){
	 wingredient =  prompt('請輸入所需此原料數量!') ;
	alert('您所需要的數量為:' + wingredient);
	document.getElementById("amount_water").innerHTML=wingredient.toString();
	document.getElementById("amount_sugar").innerHTML=0.01*wingredient.toString();
	document.getElementById("amount_co2").innerHTML=0.01*wingredient.toString();
	document.getElementById("amount_color").innerHTML=0.01*wingredient.toString();
	document.getElementById("newamount").innerHTML=wingredient.toString();
	cingredient = 0.1*wingredient;
	colingredient = 0.1*wingredient;
	singredient =  0.1*wingredient ;
	pamount = wingredient ;
}
function ingredient2(){
	 singredient =  prompt('請輸入所需此原料數量!') ;
	alert('您所需要的數量為:' + singredient);
	document.getElementById("amount_water").innerHTML=100*singredient.toString();
	document.getElementById("amount_sugar").innerHTML=singredient.toString();
	document.getElementById("amount_co2").innerHTML=singredient.toString();
	document.getElementById("amount_color").innerHTML=singredient.toString();
	document.getElementById("newamount").innerHTML=100*singredient.toString();
	cingredient = 0.1*singredient;
	colingredient = 0.1*singredient;
	wingredient =  100*singredient ;
	pamount = 100*singredient ;
}
function ingredient3(){
	 cingredient =  prompt('請輸入所需此原料數量!') ;
	alert('您所需要的數量為:' + cingredient);
	document.getElementById("amount_water").innerHTML=100*cingredient.toString();
	document.getElementById("amount_sugar").innerHTML=cingredient.toString();
	document.getElementById("amount_co2").innerHTML=cingredient.toString();
	document.getElementById("amount_color").innerHTML=cingredient.toString();
	document.getElementById("newamount").innerHTML=100*cingredient.toString();
	singredient = cingredient;
	colingredient = cingredient;
	wingredient =  100*cingredient ;
	pamount = 100*cingredient ;
}
function ingredient4(){
	 colingredient =  prompt('請輸入所需此原料數量!') ;
	alert('您所需要的數量為:' + colingredient);
	document.getElementById("amount_water").innerHTML=100*colingredient.toString();
	document.getElementById("amount_sugar").innerHTML=colingredient.toString();
	document.getElementById("amount_co2").innerHTML=colingredient.toString();
	document.getElementById("amount_color").innerHTML=colingredient.toString();
	document.getElementById("newamount").innerHTML=100*colingredient.toString();
	singredient = colingredient;
	cingredient = colingredient;
	wingredient =  100*colngredient ;
	pamount = 100*colingredient ;
}

//跳窗調整製造量
function p_amount(){
    pamount =  prompt('請輸入要製造的數量!') ;
	alert('您要製造的數量為:' + pamount + 'L');
	document.getElementById("newamount").innerHTML=pamount.toString();
	document.getElementById("amount_water").innerHTML=pamount.toString();
	document.getElementById("amount_sugar").innerHTML=0.01*pamount.toString();
	document.getElementById("amount_co2").innerHTML=0.01*pamount.toString();
	document.getElementById("amount_color").innerHTML=0.01*pamount.toString();
	singredient = 0.01*pamount;
	cingredient = 0.01*pamount;
	wingredient = pamount;
	colingredient = 0.01*pamount;

}
//新增產品
function addOption(list, text, value){
	var index=list.options.length;
	list.options[index]=new Option(text, value);
	list.selectedIndex=index;

	productNames.push(value);
	productAmounts.push(0);
	productStats.push("短缺");

	//在存貨畫面新增欄位
	addStockBox(value);
}
//存貨
function stock() {

}

//存貨向生產送出訂單
function addStockRequest(id) {
	addStockRequestIndex++;
	var stockRequestBox = document.createElement("div");
    document.getElementById("requestBoxContainer").appendChild(stockRequestBox);
    stockRequestBox.id = "requestBox" + addStockRequestIndex;
    stockRequestBox.setAttribute("class", "requestBox");
    stockRequestBox.setAttribute("needid", id);
    stockRequestBox.onclick = addStockConfirm;
    var tempAmountArray = ["水","二氧化碳","糖","色素"];
    if(id.slice(0,1) == "i") {
    	var name = tempAmountArray[id.slice(1,2)-1];
    	stockRequestBox.innerHTML = name + "存貨短缺，存貨端要求補貨";

    } else {
    	var name = productNames[id.slice(1,2)-1];
    	stockRequestBox.innerHTML = name + "存貨短缺，存貨端要求生產";
    }
    alert("已送出訂單");
}

//生產確認訂單
function addStockConfirm(eventObj) {
	var boxid = eventObj.target.id;
	var needid = eventObj.target.getAttribute("needid");
	var tempAmountArray = ["水","二氧化碳","糖","色素"];
	if(needid.slice(0,1) == "i") {
    	var name = tempAmountArray[needid.slice(1,2)-1];
    	if(confirm("是否補貨" + name + ingredientOrderAmount[needid.slice(1,2)-1] + "單位？")){
    		if(needid.slice(1,2) == 1) {
    			water += 100000;
    		} else if (needid.slice(1,2) == 2) {
    			co2 += 1000;
    		} else if (needid.slice(1,2) == 3) {
    			sugar += 1000;
    		} else {
    			color += 1000;
    		}
    		alert("補貨完成！");
    		var del = document.getElementById(boxid);
    		del.parentNode.removeChild(del);
    	}
    } else {
    	var name = productNames[needid.slice(1,2)-1];
    	if(confirm("是否生產" + name + "5000單位？")){
    		produce(name,5000);
    		var del = document.getElementById(boxid);
    		del.parentNode.removeChild(del);
    	}
    }
    stockRefresh();
    
	

}

//新增產品時在存貨畫面新增欄位
function addStockBox(name) {
	//新增div然後複製stockbox範例的內容
    var stockbox = document.createElement("div");
    document.getElementById("stockTab-content2").appendChild(stockbox);
    stockbox.setAttribute("class", "stockbox");
    stockbox.id = "stock" + productNames.length;
    stockbox.innerHTML = document.getElementById("stockSample").innerHTML;

    //將div內tag的id做修改
    document.getElementsByName("productNameSample")[1].id = "productName" + productNames.length;
    document.getElementsByName("productNameSample")[1].removeAttribute("name");
	document.getElementsByName("productQuantitySample")[1].id = "productQuantity" + productNames.length;
    document.getElementsByName("productQuantitySample")[1].removeAttribute("name");
    document.getElementsByName("productStatSample")[1].id = "productStat" + productNames.length;
    document.getElementsByName("productStatSample")[1].removeAttribute("name");
    document.getElementsByName("pS")[1].id = "p" + productNames.length;
    document.getElementsByName("pS")[1].removeAttribute("name");
    document.getElementsByName("addStockButton")[1].setAttribute("onclick", "addStockRequest(p" + productNames.length + ".id)");
    document.getElementsByName("addStockButton")[1].removeAttribute("name");

    stockRefresh();
    
}

function stockRefresh() {
	//原物料狀態的刷新
	var tempAmountArray = [water,co2,sugar,color];

	for (var i = 0; i < 4; i++) {
		var temp = "ingredientQuantity" + (i+1);
		document.getElementById(temp).innerHTML = tempAmountArray[i];
		temp = "ingredientStat" + (i+1);
		document.getElementById(temp).innerHTML = ingredientStats[i];
	}
	//產品狀態的刷新
	for (var i = 0; i < productNames.length; i++) {
		var temp = "productName" + (i+1);
		document.getElementById(temp).innerHTML = productNames[i];
		temp = "productQuantity" + (i+1);
		document.getElementById(temp).innerHTML = productAmounts[i];
		temp = "productStat" + (i+1);
		document.getElementById(temp).innerHTML = productStats[i];
	}	
}

//行銷
function sell() {

}
