module.exports=printInventory;
const loadAllItems = require('./loadAllItems.js');
Item = require('./item.js');
Order = require('./order.js');

/**
inputs = [
            'ITEM000000',
            'ITEM000000',
            'ITEM000000',
            'ITEM000000',
            'ITEM000000',
            'ITEM000001',
            'ITEM000001',
            'ITEM000004'
        ];
*/
function main(){
      	console.log("sb");
	return "hello,world";
}

function printInventory(input){
	var _order = new Array(6);
	_order[0] = new Item("ITEM000000",'可口可乐','瓶',3.00,0);
	_order[1] = new Item('ITEM000001','雪碧','瓶',3.00,0);
	_order[2] = new Item('ITEM000002','苹果','斤',5.50,0);
	_order[3] = new Item('ITEM000003','荔枝','斤',15.00,0);
	_order[4] = new Item('ITEM000004','电池','个',2.00,0);
	_order[5] = new Item('ITEM000005','方便面','袋',4.50,0);
	var cart = new Order(_order);
	
	for(var x = 0;x < input.length;x++){
		var code = input[x];
		
		for(var y = 0;y < cart.getOrder().length;y++){
			if(code == cart.getOrder()[y].barcode){
				cart.order[y].num++;
			}
		}
	}
	return cart.printOrder();
}
