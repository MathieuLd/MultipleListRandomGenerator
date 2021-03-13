function DomElementsContainer() {
	// Property
	this.textareaContainer;
	this.textareaArray = [];
	this.timerInput;
	this.result;

	// Methodes
	this.initialize = function() {
		this.textareaContainer = document.getElementById("textareaContainer");
		this.textareaArray = Array.prototype.slice.call(document.getElementById("textareaContainer").getElementsByTagName("textarea"));
		this.timerInput = document.getElementById("timerDuration");
		this.timerInput.addEventListener("keyup", updateParametersFromDom);
		this.result = document.getElementById("result");
	}

	this.addTextarea = function(textareaContent = "", parametersContainer) {
		let tempDiv = document.createElement('DIV');
		tempDiv.innerHTML = "<textarea class=\"list\" id=\"list" + this.textareaArray.length + "\" rows=4 cols=40>" + textareaContent + "</textarea>";
		let newTextarea = tempDiv.firstChild;
		this.textareaContainer.appendChild(newTextarea);
		this.textareaArray.push(document.getElementById("list" + this.textareaArray.length));
		this.textareaArray[this.textareaArray.length-1].addEventListener("keyup", updateParametersFromDom);
	}


	this.removeAllTextarea = function() {
		this.textareaContainer.innerHTML = "";
		this.textareaArray = [];
	}

	this.removeLastTextarea = function() {
		if(this.textareaArray.length != 0){
			this.removeDomTextareaAtIndex(this.textareaArray.length - 1);
		}
	}

	this.removeDomTextareaAtIndex = function(i) {
		this.textareaArray[i].remove();
		this.textareaArray.splice(i, 1);
	}




	this.showRandom = function(randomResult) {
		this.result.innerHTML = randomResult;
	}
}
