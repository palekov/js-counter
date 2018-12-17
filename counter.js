var counter = (function(){
	// Приватные  перменные
	var _number;
	// Приватные  методы
	var _checkPositive = function(x){
		if (x < 0 ) {
			return false;
		} else {
			return true;
		}
	}
	// Публичные  методы
	var setValue = function(x){
		if ( _checkPositive(x) ){
			_number = x;
		} else {
			console.log('Неверное значение!');
		}
	}

	var increaseCounter = function(){
		_number++;
	}

	var decreaseCounter = function(){
		_number--;
	}

	var printCounter = function(){
		console.log(_number);
	}

	/* Возвращаем публичные методы и переменные */
	return {
		setValue,
		increaseCounter,
		decreaseCounter,
		printCounter
	}
}())

counter.setValue(-5);
counter.printCounter();

counter.setValue(1); 
counter.increaseCounter(); 
counter.printCounter(); 
counter.decreaseCounter();
counter.printCounter(); 