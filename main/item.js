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
		return "���ƣ�"+this.name+",������"+this.num+this.unit+"�����ۣ�"+this.price+"(Ԫ)��С�ƣ�"+this.subTotal+"(Ԫ)\n";
	}
}
