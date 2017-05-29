module.exports = Item
/**
class Item{
	constructor(barcode,name,unit,price,num){
		this.barcode = barcode;
		this.name = name;
		this.unit = unit;
		this.price = price;
		this.num = num;
		this.subTotal = num * price;
	}
	getBarcode(){
		return this.barcode;
	}
	getName(){
		return this.name;
	}
	getUnit(){
		return this.unit;
	}
	getPrice(){
		return this.price;
	}
	getSubTotal(){
		return (this.num * this.price).toFixed(2);
	}
	printItem(){
		return "名称："+this.name+",数量："+this.num+this.unit+"，单价："+this.price+"(元)，小计："+this.subTotal+"(元)\n";
	}
}
*/

function Item(barcode,name,unit,price,num){
	this.barcode = barcode;
	this.name = name;
	this.unit = unit;
	this.price = price;
	this.num = num;
	this.subTotal = num * price;
}
Item.prototype.getBarcode = function(){
	return this.barcode;
}
Item.prototype.getName = function(){
	return this.name;
}
Item.prototype.getUnit = function(){
	return this.unit;
}
Item.prototype.getPrice = function(){
	return this.price;
}
Item.prototype.getSubTotal = function(){
	return (this.num * this.price).toFixed(2);
}
Item.prototype.printItem = function(){
	return "名称："+this.name+"，数量："+this.num+this.unit+"，单价："+this.price+"(元)，小计："+this.getSubTotal()+"(元)\n";
}