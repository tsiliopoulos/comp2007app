module core {
	class Person {
		constructor(public name:string, age:number) {
			
		}
		
		public saysHello():void {
			console.log(this.name + " says hello!");
		}
	}
	
	
	function init() {
		console.log("App Started");
		
		var person: Person = new Person("Tom", 47);
		person.saysHello();
	}
	
	// call the init function on window load
	window.addEventListener("load", init);
}