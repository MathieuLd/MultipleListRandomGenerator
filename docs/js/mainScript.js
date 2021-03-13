//liste0=C,C%23/Db,D,D%23/Eb,E,F,F%23/Gb,G,G%23/Ab,A,A%23/Bb,B&liste1=2 min,2 Maj,3 min,3 Maj,4,5 dim ,5,6 min,6 Maj,7 min,7 Maj

let domElementsContainer = new DomElementsContainer();
let parametersContainer = new ParametersContainer();
let timer;

function generateButtonTrigger() {
	//parametersContainer.setParametersFromDomElements(domElementsContainer);
	let newUrl = parametersContainer.getUrl();
	window.location.replace(newUrl);
}

function resetButtonTrigger() {
	let currentUrlWithoutParameters = window.location.href.split('?')[0];
	window.location.replace(currentUrlWithoutParameters);
}

function addListButtonTrigger() {
	domElementsContainer.addTextarea("", parametersContainer);
	//let currentUrlWithoutParameters = window.location.href.split('?')[0];
	//window.location.replace(currentUrlWithoutParameters);
}

function removeListButtonTrigger() {
	///////////////
	////ICI TEST SI textarea est vide ou non
	///////////////
	domElementsContainer.removeLastTextarea();
	//let currentUrlWithoutParameters = window.location.href.split('?')[0];
	//window.location.replace(currentUrlWithoutParameters);
}

function startTimerTrigger() {
	clearInterval(timer);
	timer = setInterval(generateTimer,parametersContainer.timerDuration);
}

function stopTimerTrigger() {
	clearInterval(timer);
}

function generateTimer() {
	//parametersContainer.setParametersFromDomElements(domElementsContainer);
	let randomResult = parametersContainer.generateRandomFromList();
	domElementsContainer.showRandom(randomResult);
}

function updateParametersFromDom() {
	parametersContainer.setParametersFromDomElements(domElementsContainer);
}

/*
function generateSoft() {
	//parametersContainer.setParametersFromDomElements(domElementsContainer);
	let newUrl = parametersContainer.getUrl();
	window.location.replace(newUrl);
}*/


function loadDefaultParameters() {
	parametersContainer.setDom(domElementsContainer);
}

function loadUrlParameters(urlParametersStr){
	parametersContainer.setParametersFromUrlParameters(urlParametersStr);
	parametersContainer.setDom(domElementsContainer);
	let randomResult = parametersContainer.generateRandomFromList();
	domElementsContainer.showRandom(randomResult);
}

function onBodyLoad(){
	domElementsContainer.initialize();
	const urlParametersStr = window.location.search;
	if (urlParametersStr === ""){
		loadDefaultParameters();
	}else{
		loadUrlParameters(urlParametersStr);
	}
}
