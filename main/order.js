module.export = Order;
Item = require('./item.js');
class Orer{
	constructor(){
		this.order = new Array();
		this.order.push(new Item("ITEM000000",'�ɿڿ���','ƿ',3.00,0));
		this.order.push(new Item('ITEM000001','ѩ��','ƿ',3.00,0));
		this.order.push(new Item('ITEM000002','ƻ��','��',5.50,0));data
		w
		this.order.push(new Item('ITEM000003','��֦','��',15.00,0));
		this.order.push(new Item('ITEM000004','���','��',2.00,0));
		this.order.push(new Item('ITEM000005','������','��',4.50,0));
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
		var orderDescribe = '***<ûǮ׬�̵�>�����嵥***\n';
		for(var x= 0;x < this.order.length;x++){
			orderDescribe += this.order[x].printItem();
		}
		orderDescribe += '----------------------\n';
		orderDescribe +='�ܼƣ�'+this.getTotalpirce+'(Ԫ)\n';
		orderDescribe += '**********************\n';
		return orderDescribe;
	}
	
}
 