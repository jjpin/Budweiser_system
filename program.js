window.onload = init;

//這裡放一開啟網頁就要執行一次的函式
function init() {
	stockRefresh();
}

//宣告資料庫們
//顧客與銷售資料、生產相關參數、存貨與運輸參數

//製作一公升的汽水，需要1升的水，0.01公升的CO2，10g的糖，10g的色素


var water=100000;//100000公升
var sugar=100000;//公斤
var color=100000;//公斤
var co2=10000;//10000公升



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

var store1_sales = [1000, 1500, 2100, 1505, 1830, 1900, 2100, 2200, 2250, 1894, 1200, 1100]; //分店1的各月銷售量
var store2_sales = [1600, 2500, 2640, 2505, 2830, 2900, 2990, 2600, 2350, 2194, 2000, 1500];
var store3_sales = [1100, 1300, 1900, 2005, 1800, 2100, 2300, 2200, 2250, 1872, 1400, 1300];
var store4_sales = [900, 1200, 1900, 1320, 1440, 1900, 2000, 2130, 1650, 1555, 990, 880];
var store5_sales = [1100, 1300, 1900, 2005, 1800, 2100, 2300, 2200, 2250, 1872, 1400, 1300];
var store6_sales = [1000, 1500, 2100, 1505, 1830, 1900, 2100, 2200, 2250, 1894, 1200, 1100];
var store7_sales = [1100, 1300, 1900, 2005, 1800, 2100, 2300, 2200, 2250, 1872, 1400, 1300];
var store8_sales = [1000, 1500, 2100, 1505, 1830, 1900, 2100, 2200, 2250, 1894, 1200, 1100];
var store9_sales = [900, 1200, 1900, 1320, 1440, 1900, 2000, 2130, 1650, 1555, 990, 880];
var store10_sales = [1600, 2500, 2640, 2505, 2830, 2900, 2990, 2600, 2350, 2194, 2000, 1500];


//--------------
//瀚：
//泰竹你應該將這些商品的名稱與數量分別用array來儲存，
//因為這是會變動的，產品會被新增或刪除，因此若是分開宣告一個個變數，你會很難去新增
//所以我先宣告以下兩個array了，你記得將你的function們有用到商品數量的改一改
productNames = ["藍色汽水","紅色汽水","橘色汽水","黑色汽水"];
productAmounts = [2000,2000,2000,2000];
//這樣使用者新增產品時直接使用push就搞定了，後面的存貨才方便存取，直接讀Array就好了
//ex: productNames.push("林鳳營");
//ex: productAmounts.push("100000000");
//--------------

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

var store1_sales = [1000, 1500, 2100, 1505, 1830, 1900, 2100, 2200, 2250, 1894, 1200, 1100]; //分店1的各月銷售量
var store2_sales = [1600, 2500, 2640, 2505, 2830, 2900, 2990, 2600, 2350, 2194, 2000, 1500];
var store3_sales = [1100, 1300, 1900, 2005, 1800, 2100, 2300, 2200, 2250, 1872, 1400, 1300];
var store4_sales = [900, 1200, 1900, 1320, 1440, 1900, 2000, 2130, 1650, 1555, 990, 880];
var store5_sales = [1100, 1300, 1900, 2005, 1800, 2100, 2300, 2200, 2250, 1872, 1400, 1300];
var store6_sales = [1000, 1500, 2100, 1505, 1830, 1900, 2100, 2200, 2250, 1894, 1200, 1100];
var store7_sales = [1100, 1300, 1900, 2005, 1800, 2100, 2300, 2200, 2250, 1872, 1400, 1300];
var store8_sales = [1000, 1500, 2100, 1505, 1830, 1900, 2100, 2200, 2250, 1894, 1200, 1100];
var store9_sales = [900, 1200, 1900, 1320, 1440, 1900, 2000, 2130, 1650, 1555, 990, 880];
var store10_sales = [1600, 2500, 2640, 2505, 2830, 2900, 2990, 2600, 2350, 2194, 2000, 1500];


//--------------
//瀚：
//泰竹你應該將這些商品的名稱與數量分別用array來儲存，
//因為這是會變動的，產品會被新增或刪除，因此若是分開宣告一個個變數，你會很難去新增
//所以我先宣告以下兩個array了，你記得將你的function們有用到商品數量的改一改
productNames = ["藍色汽水","紅色汽水","橘色汽水","黑色汽水"];
productAmounts = ["100","100","100","100"];
//這樣使用者新增產品時直接使用push就搞定了，後面的存貨才方便存取，直接讀Array就好了
//ex: productNames.push("林鳳營");
//ex: productAmounts.push("100000000");
//--------------

//生產要素
var pamount
var wingredient=5000;
var singredient=50;
var cingredient=50;
var col_ingredient=50;

//存貨狀態
var ingredientStats = ["正常","正常","正常","正常"];
var productStats = ["正常","正常","正常","正常"];


//存貨狀態
var ingredientStats = ["正常","正常","正常","正常"];
var productStats = ["正常","正常","正常","正常"];

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
	

	//瀚：生產完了原料與商品數量的變數都沒有變啊～～～～
	stockRefresh();

	//瀚：生產完了原料與商品數量的變數都沒有變啊～～～～


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

	//瀚：
	//這裡只有list裡新增，但系統裡根本沒有真正的新增到～～
	//所以幫你做了
	productNames.push(value);
	productAmounts.push(0);
	productStats.push("短缺");

	//在存貨畫面新增欄位
	addStockBox(value);
}
//存貨
function stock() {

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
    document.getElementsByName("addStockButton")[1].onclick = "addStock(p" + productNames.length + ".id)" ;
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
