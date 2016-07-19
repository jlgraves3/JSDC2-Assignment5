//Model
var count = {
	number: 0,
	negative: false,
	over100: false,
};


//View
function renderCount() {
	$('#myCount').html("");
	var source = $('#count-template').html();
	var template = Handlebars.compile(source);
	var renderedTemplate = template(count);
	$('h1').after(renderedTemplate);
}

//Controller
function setup() {
	renderCount();
	$('#plus').on('click',increment);
	$('#minus').on('click',decrement);
	$('#reset').on('click',resetCount);
}

function updateCount() {
	count.negative = (count.number < 0) ? true : false;
	count.over100 = (count.number > 100) ? true : false;
}

function increment(){
	count.number++;
	updateCount();
	renderCount();
}
function decrement(){
	count.number--;
	updateCount();
	renderCount();
}

function resetCount(){
	count.number = 0;
	updateCount()
	renderCount();
}

$(document).ready(setup);