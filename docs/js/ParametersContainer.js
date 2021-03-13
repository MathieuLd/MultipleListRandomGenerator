function ParametersContainer() {
	// Property
	this.timerDuration = 1000;
	this.strListArray = [[""]];


	// Methodes
	this.setParametersFromUrlParameters = function(urlParametersStr) {
		this.strListArray = [];
		const urlParameters = new URLSearchParams(urlParametersStr);
		let parameterName;
		let parameterValue;
		for(let parameterPair of urlParameters.entries()) {
			parameterName = parameterPair[0];
			parameterValue = parameterPair[1];
			if (parameterName.indexOf("list") == 0){
				this.strListArray.push(JSON.parse('["' + parameterValue.replaceAll(',', '","').replaceAll('%23', '#')  + '"]'));
			}
		}
	}


	this.getUrl = function() {
		let currentUrlwithoutParameters = window.location.href.split('?')[0];
		let newUrl = currentUrlwithoutParameters + '?';
		if(this.strListArray.length != 0){
			newUrl += 'liste0=' +	this.strListArray[0].toString().replaceAll('#', '%23');
		}
		for(let i=1; i <	this.strListArray.length; i++){

			newUrl += '&liste' + i + '=' +	this.strListArray[i].toString().replaceAll('#', '%23');
		}
		return newUrl;
	}


	this.setParametersFromDomElements = function(domElementsContainer) {
		this.strListArray = [];
		for(let i=0; i < domElementsContainer.textareaArray.length; i++){
			let textareaContent = domElementsContainer.textareaArray[i].value;
			domElementsContainer.textareaArray[i].innerHTML = domElementsContainer.textareaArray[i].value;
			this.strListArray.push(textareaContent.split(/\r?\n/));
		}
		this.timerDuration = domElementsContainer.timerInput.value;
	}


	this.setDom = function(domElementsContainer) {
		if(this.strListArray.length == 0){
			setDefaultParameters();
		}
		domElementsContainer.removeAllTextarea();
		for(let i=0; i < this.strListArray.length; i++){
			console.log(this.strListArray[i]);
			domElementsContainer.addTextarea(this.strListArray[i].toString().replaceAll(',', '\n'),this);
		}
		domElementsContainer.timerInput.value = this.timerDuration;
	}


	this.setDefaultParameters = function() {
		this.strListArray = [[""]];
	}


	this.generateRandomFromList = function() {
		let randomResult = "";
		if(this.strListArray.length != 0){
			let randomResultTemp = this.strListArray[0][randomInt(this.strListArray[0].length)];
 			randomResult += this.checkSlashSeparation(randomResultTemp);
		}
		for(let i=1; i < this.strListArray.length; i++){
			let randomResultTemp = this.strListArray[i][randomInt(this.strListArray[i].length)];
 			randomResult += " - " + this.checkSlashSeparation(randomResultTemp);
		}
		return randomResult;
	}


	this.checkSlashSeparation = function(randomResult) {
		if(randomResult.includes("/")){
			let randomResultSplitArray = randomResult.split("/");
			return randomResultSplitArray[randomInt(randomResultSplitArray.length)];
		}else{
			return randomResult;
		}
	}


}
