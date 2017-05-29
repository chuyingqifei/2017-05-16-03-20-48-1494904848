module.export = Item;
class Item{
	constructor(barcode,name,unit,price,num){
		this.barcode = barcode;
		this.name = name;
		this.unit = unit;
		this.price = price;
		this.num = num;
		this.subTotal = num * price;
	}
	getBarcode = function(){
		return this.barcode;
	}
	getName = function(){
		return this.name;
	}
	getUnit = function(){
		return this.unit;
	}
	getPrice = function(){
		return this.price;
	}
	getSubTotal = function(){
		return (this.num * this.price).toFixed(2);
	}
	printItem = function(){
		return "名称："+this.name+",数量："+this.num+this.unit+"，单价："+this.price+"(元)，小计："+this.subTotal+"(元)\n";
	}
}
