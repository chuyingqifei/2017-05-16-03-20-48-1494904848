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
		return "���ƣ�"+this.name+",������"+this.num+this.unit+"�����ۣ�"+this.price+"(Ԫ)��С�ƣ�"+this.subTotal+"(Ԫ)\n";
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
	return "���ƣ�"+this.name+"��������"+this.num+this.unit+"�����ۣ�"+this.price+"(Ԫ)��С�ƣ�"+this.getSubTotal()+"(Ԫ)\n";
}