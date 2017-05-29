module.export = Order;
Item = require('./item.js');
class Orer{
	constructor(){
		this.order = new Array();
		this.order.push(new Item("ITEM000000",'可口可乐','瓶',3.00,0));
		this.order.push(new Item('ITEM000001','雪碧','瓶',3.00,0));
		this.order.push(new Item('ITEM000002','苹果','斤',5.50,0));data
		w
		this.order.push(new Item('ITEM000003','荔枝','斤',15.00,0));
		this.order.push(new Item('ITEM000004','电池','个',2.00,0));
		this.order.push(new Item('ITEM000005','方便面','袋',4.50,0));
		this.totalPrice = 0;
	}
	getTotalpirce = function(){
		var sum = 0;
		for(var x= 0;x < this.order.length;x++){
			sum += this.order[x].getSubTotal();
		}
		this.totalPrice = sum;
		return this.totalPrice;
	}
	printOrder = function(){
		var orderDescribe = '***<没钱赚商店>购物清单***\n';
		for(var x= 0;x < this.order.length;x++){
			orderDescribe += this.order[x].printItem();
		}
		orderDescribe += '----------------------\n';
		orderDescribe +='总计：'+this.getTotalpirce+'(元)\n';
		orderDescribe += '**********************\n';
		return orderDescribe;
	}
	
}
 