window.onload = init;

//這裡放一開啟網頁就要執行一次的函式
function init() {
	stockRefresh();
	colorPerRefresh();
	chartRefresh();
}

//宣告資料庫們
//顧客與銷售資料、生產相關參數、存貨與運輸參數

//製作一公升的汽水，需要1升的水，0.01公升的CO2，10g的糖，10g的色素


var water=10000;//100000公升
var sugar=100;//公斤
var color_red=100;
var color_yellow=100;
var color_blue=100;//公斤
var co2=100;//1000公升


var storeName;
var storeSaleA, storeSaleB, storeSaleC, storeSaleD;

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
productAmounts = [500,500,500,500];
productPropotion =["1:0:0","0:1:0","0:1:1","1:1:1"];

    


//生產要素
var pamount
var wingredient=500;
var singredient=5;
var cingredient=5;
var col_ingredient_blue=5;
var col_ingredient_red=0;
var col_ingredient_yellow=0;

//色素
var pro_blue;
var pro_red;
var pro_yellow;


//存貨狀態
var ingredientStats = ["正常","正常","正常","正常","正常","正常"];
var productStats = ["正常","正常","正常","正常"];

//補貨相關
var ingredientOrderAmount = [10000,100,100,100,100,100];
var addStockRequestIndex = 0;
//補貨色素相關

var ord_ingredient_blue;
var ord_ingredient_red;
var ord_ingredient_yellow;
var ord_blue;
var ord_red;
var ord_yellow;

//生產

function sureforproduce(name,amount){
	var name =  document.getElementById("color").value;
    var amount = parseFloat(document.getElementById("newamount").innerHTML); 

    if(co2<cingredient || sugar<singredient|| water<wingredient||color_blue<col_ingredient_blue||color_red<col_ingredient_red||color_yellow<col_ingredient_yellow){
    	alert("原料不足，生產失敗!請至存貨區補足原料!");
    }else{
    produce(name,amount);
	}

}
function produce(name,amount) {
	
	 co2   -= cingredient;
	 sugar -= singredient;
	 water -= wingredient;
     color_blue -= col_ingredient_blue;
     color_red -=  col_ingredient_red;
     color_yellow -=col_ingredient_yellow;


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
	if(wingredient==""){
	 	alert('請輸入數字!');
	 }else{
	alert('您所需要的數量為:' + wingredient);
	document.getElementById("amount_water").innerHTML=wingredient.toString();
	document.getElementById("amount_sugar").innerHTML=0.01*wingredient.toString();
	document.getElementById("amount_co2").innerHTML=0.01*wingredient.toString();
	document.getElementById("newamount").innerHTML=wingredient.toString();
	document.getElementById("amount_colorblue").innerHTML=col_ingredient_blue.toString();
	document.getElementById("amount_colorred").innerHTML=col_ingredient_red.toString();
	document.getElementById("amount_coloryellow").innerHTML=col_ingredient_yellow.toString();

	cingredient = 0.01*wingredient;
	singredient =  0.01*wingredient ;
	pamount = wingredient ;
	colorPerRefresh();
}
}
function ingredient2(){
	 singredient =  prompt('請輸入所需此原料數量!') ;

	if(singredient==""){
	 	alert('請輸入數字!');
	 }else{ 
	alert('您所需要的數量為:' + singredient);
	document.getElementById("amount_water").innerHTML=100*singredient.toString();
	document.getElementById("amount_sugar").innerHTML=singredient.toString();
	document.getElementById("amount_co2").innerHTML=singredient.toString();
	document.getElementById("newamount").innerHTML=100*singredient.toString();

	cingredient = singredient;
	wingredient =  100*singredient ;
	pamount = 100*singredient ;
	colorPerRefresh();

}
}
function ingredient3(){
	 cingredient =  prompt('請輸入所需此原料數量!') ;
	 if(cingredient==""){
	 	alert('請輸入數字!');
	 }else{
	alert('您所需要的數量為:' + cingredient);
	document.getElementById("amount_water").innerHTML=100*cingredient.toString();
	document.getElementById("amount_sugar").innerHTML=cingredient.toString();
	document.getElementById("amount_co2").innerHTML=cingredient.toString();
	document.getElementById("newamount").innerHTML=100*cingredient.toString();
	
	singredient = cingredient;
	wingredient =  100*cingredient ;
	pamount = 100*cingredient ;
	colorPerRefresh();
}
}


//跳窗調整製造量
function p_amount(){
    pamount =  prompt('請輸入要製造的數量!') ;
	alert('您要製造的數量為:' + pamount + 'L');
	document.getElementById("newamount").innerHTML=pamount.toString();
	document.getElementById("amount_water").innerHTML=pamount.toString();
	document.getElementById("amount_sugar").innerHTML=0.01*pamount.toString();
	document.getElementById("amount_co2").innerHTML=0.01*pamount.toString();
	
	singredient = 0.01*pamount;
	cingredient = 0.01*pamount;
	wingredient = pamount;
	colorPerRefresh();
	

}
//新增產品
function addOption(list, text, value1, value2 ){
	
	if(value1=="" || value2==""){
		alert('請輸入汽水名稱和色素比例!');
	}else{

	var index=list.options.length;
	list.options[index]=new Option(text, value1);
	list.selectedIndex=index;

	productNames.push(value1);
	
	productPropotion.push(value2);
	productAmounts.push(0);
	productStats.push("短缺");



	//在存貨畫面新增欄位
	addStockBox(value1);
	colorPerRefresh();
}
}

function colorPerRefresh(){
	var p_blue;
	var p_red;
	var p_yellow;
	

	for(var i in  productPropotion ){
		if(productNames[i] == document.getElementById("color").value){
				document.getElementById("colorPer").innerHTML= productPropotion[i];	

				p_blue = productPropotion[i].slice(0,1);
				p_red =  productPropotion[i].slice(2,3);
				p_yellow = productPropotion[i].slice(4,5);

				pro_blue=parseFloat(p_blue);
				pro_red=parseFloat(p_red);
				pro_yellow=parseFloat(p_yellow);

				if(pro_blue+pro_red+pro_yellow == 0){
					col_ingredient_blue=0;
					col_ingredient_red=0;
					col_ingredient_yellow=0;
				}else{

				col_ingredient_blue  = (wingredient*0.01*pro_blue/(pro_blue+pro_red+pro_yellow)).toFixed(2) ;
				col_ingredient_red   = (wingredient*0.01*pro_red/(pro_blue+pro_red+pro_yellow)).toFixed(2) ;
				col_ingredient_yellow= (wingredient*0.01*pro_yellow/(pro_blue+pro_red+pro_yellow)).toFixed(2) ;
				
				}

				document.getElementById("amount_colorblue").innerHTML=col_ingredient_blue.toString();
				document.getElementById("amount_colorred").innerHTML=col_ingredient_red.toString();
				document.getElementById("amount_coloryellow").innerHTML=col_ingredient_yellow.toString();
		
					
		}


	}
}
//訂單呼叫的生產函數
function orderproduce(name, amount){
var order_blue;
var order_red;
var order_yellow;

	 for(var j in  productPropotion){
	 	if(productNames[j] == name){
	 		order_blue = productPropotion[j].slice(0,1);
	 		order_red = productPropotion[j].slice(2,3); 
	 		order_yellow = productPropotion[j].slice(4,5);  

	 		    ord_blue=parseFloat(order_blue);
				ord_red=parseFloat(order_red);
				ord_yellow=parseFloat(order_yellow);

				if(ord_blue+ord_red+ord_yellow == 0){
					ord_ingredient_blue=0;
					ord_ingredient_red=0;
					ord_ingredient_yellow=0;
				}else{

				ord_ingredient_blue  = (5*ord_blue/(ord_blue+ord_red+ord_yellow)) ;
				ord_ingredient_red   = (5*ord_red/(ord_blue+ord_red+ord_yellow)) ;
				ord_ingredient_yellow= (5*ord_yellow/(ord_blue+ord_red+ord_yellow)) ;
				
				}
	 	}
	 }
	 co2   -= 5;
	 sugar -= 5;
	 water -= 500;
     color_blue -= ord_ingredient_blue.toFixed(2);
     color_red -=  ord_ingredient_red.toFixed(2);
     color_yellow -=ord_ingredient_yellow.toFixed(2);


	var reply= confirm('生產成功!');

	for(var i=0 ; i < productNames.length ; i++ ){
		if ( productNames[i] == name ) {
			productAmounts[i] += amount;
		}
	}
	
	alert("您所製造的品項為:"+ name +"，製造量為:"+ amount +"L");
	
	stockRefresh();

}
//存貨
function stock() {

}

//存貨向生產送出訂單
function addStockRequest(id) {
	addStockRequestIndex++;
	//竹將訂單條移至生產訂單的div下
	document.getElementById("amount_order").innerHTML= addStockRequestIndex.toString();

	var stockRequestBox = document.createElement("div");
    document.getElementById("requestBoxContainer").appendChild(stockRequestBox);
    stockRequestBox.id = "requestBox" + addStockRequestIndex;
    stockRequestBox.setAttribute("class", "requestBox");
    stockRequestBox.setAttribute("needid", id);
    stockRequestBox.onclick = addStockConfirm;
    //竹改了array內容
    var tempAmountArray = ["水","二氧化碳","糖","藍色色素","紅色色素","黃色色素"];
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
	//竹改了array內容
	var tempAmountArray = ["水","二氧化碳","糖","藍色色素","紅色色素","黃色色素"];
	if(needid.slice(0,1) == "i") {
    	var name = tempAmountArray[needid.slice(1,2)-1];
    	if(confirm("是否補貨" + name + ingredientOrderAmount[needid.slice(1,2)-1] + "單位？")){
    		//竹新增了if的判斷
    		if(needid.slice(1,2) == 1) {
    			water += 10000;
    		} else if (needid.slice(1,2) == 2) {
    			co2 += 100;
    		} else if (needid.slice(1,2) == 3) {
    			sugar += 100;
    		} else if (needid.slice(1,2) == 4) {
    			color_blue += 100;
    		} else if (needid.slice(1,2) == 5) {
    			color_red += 100;
    		} else   {
    			color_yellow += 100;
    		}
    		alert("補貨完成！");
    		var del = document.getElementById(boxid);
    		del.parentNode.removeChild(del);
    		//竹:訂單數減少
    		addStockRequestIndex--;
    		document.getElementById("amount_order").innerHTML= addStockRequestIndex.toString();
    	}
    } else {
    	var name = productNames[needid.slice(1,2)-1];
    	if(confirm("是否生產" + name + "500單位？")){
    		//改成呼叫sureforproduce
    		orderproduce(name,500);
    		var del = document.getElementById(boxid);
    		del.parentNode.removeChild(del);
    		//竹:訂單數減少
    		addStockRequestIndex--;
    		document.getElementById("amount_order").innerHTML= addStockRequestIndex.toString();
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
	var tempAmountArray = [water,co2,sugar,color_blue,color_red,color_yellow];
	stockStatCompute();
	for (var i = 0; i < 6; i++) {
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

function stockStatCompute() {
	var tempStoreArray = [
	store1_sales_A, store1_sales_B, store1_sales_C, store1_sales_D, 
	store2_sales_A, store2_sales_B, store2_sales_C, store2_sales_D, 
	store3_sales_A, store3_sales_B, store3_sales_C, store3_sales_D, 
	store4_sales_A, store4_sales_B, store4_sales_C, store4_sales_D, 
	store5_sales_A, store5_sales_B, store5_sales_C, store5_sales_D, 
	store6_sales_A, store6_sales_B, store6_sales_C, store6_sales_D, 
	store7_sales_A, store7_sales_B, store7_sales_C, store7_sales_D, 
	store8_sales_A, store8_sales_B, store8_sales_C, store8_sales_D, 
	store9_sales_A, store9_sales_B, store9_sales_C, store9_sales_D, 
	store10_sales_A, store10_sales_B, store10_sales_C, store10_sales_D
	];
	var aveSaleA = 0;
	var aveSaleB = 0;
	var aveSaleC = 0;
	var aveSaleD = 0;

	for (var i = 0; i < 12;i++) {
		for (var j = 0; j < 40; j=j+4) {
			aveSaleA += parseInt(tempStoreArray[j][i])/365;
		}
		for (var j = 1; j < 40; j=j+4) {
			aveSaleB += parseInt(tempStoreArray[j][i])/365;
		}
		for (var j = 2; j < 40; j=j+4) {
			aveSaleC += parseInt(tempStoreArray[j][i])/365;
		}
		for (var j = 3; j < 40; j=j+4) {
			aveSaleD += parseInt(tempStoreArray[j][i])/365;
		}
	}
	console.log(aveSaleA + aveSaleB + aveSaleC + aveSaleD);


	if (productAmounts[0] < aveSaleA*1.1) {
		productStats[0] = "短缺";
	} else {
		productStats[0] = "正常";
	}
	if (productAmounts[1] < aveSaleB*1.1) {
		productStats[1] = "短缺";
	} else {
		productStats[1] = "正常";
	}
	if (productAmounts[2] < aveSaleC*1.1) {
		productStats[2] = "短缺";
	} else {
		productStats[2] = "正常";
	}
	if (productAmounts[3] < aveSaleD*1.1) {
		productStats[3] = "短缺";
	} else {
		productStats[3] = "正常";
	}

	//["水","二氧化碳","糖","藍色色素","紅色色素","黃色色素"]
	if (water < (aveSaleA + aveSaleB + aveSaleC + aveSaleD)*1.1) {
		ingredientStats[0] = "短缺";
	} else {
		ingredientStats[0] = "正常";
	}
	if (co2 < (aveSaleA + aveSaleB + aveSaleC + aveSaleD)*0.01*1.1) {
		ingredientStats[1] = "短缺";
	} else {
		ingredientStats[1] = "正常";
	}
	if (sugar < (aveSaleA + aveSaleB + aveSaleC + aveSaleD)*0.01*1.1) {
		ingredientStats[2] = "短缺";
	} else {
		ingredientStats[2] = "正常";
	}
	if (color_blue < (aveSaleA + aveSaleB + aveSaleC + aveSaleD)*0.01*1.1) {
		ingredientStats[3] = "短缺";
	} else {
		ingredientStats[3] = "正常";
	}
	if (color_red < (aveSaleA + aveSaleB + aveSaleC + aveSaleD)*0.01*1.1) {
		ingredientStats[4] = "短缺";
	} else {
		ingredientStats[4] = "正常";
	}
	if (color_yellow < (aveSaleA + aveSaleB + aveSaleC + aveSaleD)*0.01*1.1) {
		ingredientStats[5] = "短缺";
	} else {
		ingredientStats[5] = "正常";
	}


}

//行銷
function sell1() {
	document.getElementById("sellBox2").style.display="none";
	document.getElementById("sellBox3").style.display="none";
	document.getElementById("sellBox4").style.display="none";
	document.getElementById("sellBox5").style.display="none";
	document.getElementById("sellBox6").style.display="none";
	document.getElementById("sellBox7").style.display="none";
	document.getElementById("sellBox8").style.display="none";
	document.getElementById("sellBox9").style.display="none";
	document.getElementById("sellBox10").style.display="none";
	document.getElementById("sellBox1").style.display="block";
	document.getElementById("store1total").innerHTML=store1_cur[0];
	document.getElementById("store1left").innerHTML=store1_cur[1];
	document.getElementById("store1blue").innerHTML=store1_cur[2];
	document.getElementById("store1red").innerHTML=store1_cur[3];
	document.getElementById("store1org").innerHTML=store1_cur[4];
	document.getElementById("store1black").innerHTML=store1_cur[5];
}

function sell2() {
	document.getElementById("sellBox1").style.display="none";
	document.getElementById("sellBox3").style.display="none";
	document.getElementById("sellBox4").style.display="none";
	document.getElementById("sellBox5").style.display="none";
	document.getElementById("sellBox6").style.display="none";
	document.getElementById("sellBox7").style.display="none";
	document.getElementById("sellBox8").style.display="none";
	document.getElementById("sellBox9").style.display="none";
	document.getElementById("sellBox10").style.display="none";
	document.getElementById("sellBox2").style.display="block";
	document.getElementById("store2total").innerHTML=store2_cur[0];
	document.getElementById("store2left").innerHTML=store2_cur[1];
	document.getElementById("store2blue").innerHTML=store2_cur[2];
	document.getElementById("store2red").innerHTML=store2_cur[3];
	document.getElementById("store2org").innerHTML=store2_cur[4];
	document.getElementById("store2black").innerHTML=store2_cur[5];
}

function sell3() {
	document.getElementById("sellBox1").style.display="none";
	document.getElementById("sellBox2").style.display="none";
	document.getElementById("sellBox4").style.display="none";
	document.getElementById("sellBox5").style.display="none";
	document.getElementById("sellBox6").style.display="none";
	document.getElementById("sellBox7").style.display="none";
	document.getElementById("sellBox8").style.display="none";
	document.getElementById("sellBox9").style.display="none";
	document.getElementById("sellBox10").style.display="none";
	document.getElementById("sellBox3").style.display="block";
	document.getElementById("store3total").innerHTML=store3_cur[0];
	document.getElementById("store3left").innerHTML=store3_cur[1];
	document.getElementById("store3blue").innerHTML=store3_cur[2];
	document.getElementById("store3red").innerHTML=store3_cur[3];
	document.getElementById("store3org").innerHTML=store3_cur[4];
	document.getElementById("store3black").innerHTML=store3_cur[5];
}

function sell4() {
	document.getElementById("sellBox1").style.display="none";
	document.getElementById("sellBox2").style.display="none";
	document.getElementById("sellBox3").style.display="none";
	document.getElementById("sellBox5").style.display="none";
	document.getElementById("sellBox6").style.display="none";
	document.getElementById("sellBox7").style.display="none";
	document.getElementById("sellBox8").style.display="none";
	document.getElementById("sellBox9").style.display="none";
	document.getElementById("sellBox10").style.display="none";
	document.getElementById("sellBox4").style.display="block";
	document.getElementById("store4total").innerHTML=store4_cur[0];
	document.getElementById("store4left").innerHTML=store4_cur[1];
	document.getElementById("store4blue").innerHTML=store4_cur[2];
	document.getElementById("store4red").innerHTML=store4_cur[3];
	document.getElementById("store4org").innerHTML=store4_cur[4];
	document.getElementById("store4black").innerHTML=store4_cur[5];
}

function sell5() {
	document.getElementById("sellBox1").style.display="none";
	document.getElementById("sellBox2").style.display="none";
	document.getElementById("sellBox3").style.display="none";
	document.getElementById("sellBox4").style.display="none";
	document.getElementById("sellBox6").style.display="none";
	document.getElementById("sellBox7").style.display="none";
	document.getElementById("sellBox8").style.display="none";
	document.getElementById("sellBox9").style.display="none";
	document.getElementById("sellBox10").style.display="none";
	document.getElementById("sellBox5").style.display="block";
	document.getElementById("store5total").innerHTML=store5_cur[0];
	document.getElementById("store5left").innerHTML=store5_cur[1];
	document.getElementById("store5blue").innerHTML=store5_cur[2];
	document.getElementById("store5red").innerHTML=store5_cur[3];
	document.getElementById("store5org").innerHTML=store5_cur[4];
	document.getElementById("store5black").innerHTML=store5_cur[5];
}

function sell6() {
	document.getElementById("sellBox1").style.display="none";
	document.getElementById("sellBox2").style.display="none";
	document.getElementById("sellBox3").style.display="none";
	document.getElementById("sellBox4").style.display="none";
	document.getElementById("sellBox5").style.display="none";
	document.getElementById("sellBox7").style.display="none";
	document.getElementById("sellBox8").style.display="none";
	document.getElementById("sellBox9").style.display="none";
	document.getElementById("sellBox10").style.display="none";
	document.getElementById("sellBox6").style.display="block";
	document.getElementById("store6total").innerHTML=store6_cur[0];
	document.getElementById("store6left").innerHTML=store6_cur[1];
	document.getElementById("store6blue").innerHTML=store6_cur[2];
	document.getElementById("store6red").innerHTML=store6_cur[3];
	document.getElementById("store6org").innerHTML=store6_cur[4];
	document.getElementById("store6black").innerHTML=store6_cur[5];
}

function sell7() {
	document.getElementById("sellBox1").style.display="none";
	document.getElementById("sellBox2").style.display="none";
	document.getElementById("sellBox3").style.display="none";
	document.getElementById("sellBox4").style.display="none";
	document.getElementById("sellBox5").style.display="none";
	document.getElementById("sellBox6").style.display="none";
	document.getElementById("sellBox8").style.display="none";
	document.getElementById("sellBox9").style.display="none";
	document.getElementById("sellBox10").style.display="none";
	document.getElementById("sellBox7").style.display="block";
	document.getElementById("store7total").innerHTML=store7_cur[0];
	document.getElementById("store7left").innerHTML=store7_cur[1];
	document.getElementById("store7blue").innerHTML=store7_cur[2];
	document.getElementById("store7red").innerHTML=store7_cur[3];
	document.getElementById("store7org").innerHTML=store7_cur[4];
	document.getElementById("store7black").innerHTML=store7_cur[5];
}

function sell8() {
	document.getElementById("sellBox1").style.display="none";
	document.getElementById("sellBox2").style.display="none";
	document.getElementById("sellBox3").style.display="none";
	document.getElementById("sellBox4").style.display="none";
	document.getElementById("sellBox5").style.display="none";
	document.getElementById("sellBox6").style.display="none";
	document.getElementById("sellBox7").style.display="none";
	document.getElementById("sellBox9").style.display="none";
	document.getElementById("sellBox10").style.display="none";
	document.getElementById("sellBox8").style.display="block";
	document.getElementById("store8total").innerHTML=store8_cur[0];
	document.getElementById("store8left").innerHTML=store8_cur[1];
	document.getElementById("store8blue").innerHTML=store8_cur[2];
	document.getElementById("store8red").innerHTML=store8_cur[3];
	document.getElementById("store8org").innerHTML=store8_cur[4];
	document.getElementById("store8black").innerHTML=store8_cur[5];
}

function sell9() {
	document.getElementById("sellBox1").style.display="none";
	document.getElementById("sellBox2").style.display="none";
	document.getElementById("sellBox3").style.display="none";
	document.getElementById("sellBox4").style.display="none";
	document.getElementById("sellBox5").style.display="none";
	document.getElementById("sellBox6").style.display="none";
	document.getElementById("sellBox7").style.display="none";
	document.getElementById("sellBox8").style.display="none";
	document.getElementById("sellBox10").style.display="none";
	document.getElementById("sellBox9").style.display="block";
	document.getElementById("store9total").innerHTML=store9_cur[0];
	document.getElementById("store9left").innerHTML=store9_cur[1];
	document.getElementById("store9blue").innerHTML=store9_cur[2];
	document.getElementById("store9red").innerHTML=store9_cur[3];
	document.getElementById("store9org").innerHTML=store9_cur[4];
	document.getElementById("store9black").innerHTML=store9_cur[5];
}

function sell10() {
	document.getElementById("sellBox1").style.display="none";
	document.getElementById("sellBox2").style.display="none";
	document.getElementById("sellBox3").style.display="none";
	document.getElementById("sellBox4").style.display="none";
	document.getElementById("sellBox5").style.display="none";
	document.getElementById("sellBox6").style.display="none";
	document.getElementById("sellBox7").style.display="none";
	document.getElementById("sellBox8").style.display="none";
	document.getElementById("sellBox9").style.display="none";
	document.getElementById("sellBox10").style.display="block";
	document.getElementById("store10total").innerHTML=store10_cur[0];
	document.getElementById("store10left").innerHTML=store10_cur[1];
	document.getElementById("store10blue").innerHTML=store10_cur[2];
	document.getElementById("store10red").innerHTML=store10_cur[3];
	document.getElementById("store10org").innerHTML=store10_cur[4];
	document.getElementById("store10black").innerHTML=store10_cur[5];
}

function chartRefresh() {
	var tempStoreArray = [
	store1_sales_A, store1_sales_B, store1_sales_C, store1_sales_D, 
	store2_sales_A, store2_sales_B, store2_sales_C, store2_sales_D, 
	store3_sales_A, store3_sales_B, store3_sales_C, store3_sales_D, 
	store4_sales_A, store4_sales_B, store4_sales_C, store4_sales_D, 
	store5_sales_A, store5_sales_B, store5_sales_C, store5_sales_D, 
	store6_sales_A, store6_sales_B, store6_sales_C, store6_sales_D, 
	store7_sales_A, store7_sales_B, store7_sales_C, store7_sales_D, 
	store8_sales_A, store8_sales_B, store8_sales_C, store8_sales_D, 
	store9_sales_A, store9_sales_B, store9_sales_C, store9_sales_D, 
	store10_sales_A, store10_sales_B, store10_sales_C, store10_sales_D
	];
	var index = document.getElementById("chartSelect").value;
	if(index != "all") {
		storeSaleA = tempStoreArray[4*index];
		storeSaleB = tempStoreArray[4*index+1];
		storeSaleC = tempStoreArray[4*index+2];
		storeSaleD = tempStoreArray[4*index+3];
	} else {
		for (var i = 0; i < 12;i++) {
			for (var j = 0; j < 40; j=j+4) {
				storeSaleA[i] += parseInt(tempStoreArray[j][i]);
			}
			for (var j = 1; j < 40; j=j+4) {
				storeSaleB[i] += parseInt(tempStoreArray[j][i]);
			}
			for (var j = 2; j < 40; j=j+4) {
				storeSaleC[i] += parseInt(tempStoreArray[j][i]);
			}
			for (var j = 3; j < 40; j=j+4) {
				storeSaleD[i] += parseInt(tempStoreArray[j][i]);
			}
		}
	}
}

//highcharts用
$(function() {   

$('#chartButton').click(function () {
    $('#chartContainer').highcharts({
        title: {
            text: "分店銷售資料" ,
            x: -20 //center
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: '瓶'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '瓶'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '藍色汽水',
            data: storeSaleA
        }, 
        {
            name: '紅色汽水',
            data: storeSaleB
        }, 
        {
            name: '橘色汽水',
            data: storeSaleC
        }, 
        {
            name: '黑色汽水',
            data: storeSaleD
        }]
    });
});
});
