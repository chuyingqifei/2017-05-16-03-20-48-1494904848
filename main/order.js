module.exports = Order
Item = require('./item.js');
/**
class Order{
	constructor(order){

		this.order = order;
		
		this.order = new Array(6);
		this.order[0] = new Item("ITEM000000",'可口可乐','瓶',3.00,0);
		this.order[1] = new Item('ITEM000001','雪碧','瓶',3.00,0);
		this.order[2] = new Item('ITEM000002','苹果','斤',5.50,0);
		this.order[3] = new Item('ITEM000003','荔枝','斤',15.00,0);
		this.order[4] = new Item('ITEM000004','电池','个',2.00,0);
		this.order[5] = new Item('ITEM000005','方便面','袋',4.50,0);
		
		this.totalPrice = 0;
	}
	getTotalpirce(){
		var sum = 0;
		for(var x= 0;x < this.order.length;x++){
			sum += this.order[x].getSubTotal();
		}
		this.totalPrice = sum;
		return this.totalPrice;
	}
	
	getOrder(){
		return this.order;
	}
	printOrder(){
		var orderDescribe = '***<没钱赚商店>购物清单***\n';
		for(var x= 0;x < this.order.length;x++){
			if(this.order[x].getSubTotal() > 0){
				orderDescribe += this.order[x].printItem();
			}
		}
		orderDescribe += '----------------------\n';
		orderDescribe +='总计：'+this.getTotalpirce()+'(元)\n';
		orderDescribe += '**********************\n';
		return orderDescribe;
	}
}
*/
function Order(order){
	this.order = order;
	this.totalPrice = 0;
}
Order.prototype.getTotalpirce = function(){
	var sum = 0.00;
	for(var x= 0;x < this.order.length;x++){
		sum += parseFloat(this.order[x].getSubTotal());
	}
	this.totalPrice = sum;
	return (this.totalPrice).toFixed(2);
}

Order.prototype.getOrder = function(){
	return this.order;
}
Order.prototype.printOrder = function(){
	var orderDescribe = `***<没钱赚商店>购物清单***\n`;
	for(var x= 0;x < this.order.length;x++){
		if(this.order[x].getSubTotal() > 0){
			orderDescribe += this.order[x].printItem();
		}
	}
	orderDescribe += `----------------------\n`;
	orderDescribe +=`总计：'+this.getTotalpirce()+'(元)\n`;
	orderDescribe += `**********************`;
	return orderDescribe;
}
	
	
	
	
	
	
	
	
	
	
	