
function autocount(){	
	notes = document.getElementsByClassName('notes');

	formatString = '#yyyy.MM.dd kk.mm.ss'

	var dBorn = new Date(1992,10,29);	
	var dAug = new Date(2017,7,01);
	var dNoCoffee = new Date(2015,02,4);
	for (var i = 0; i < notes.length; i++) {

		id = notes[i].id;
		h1 = notes[i].getElementsByTagName('h1')[0].innerHTML;
		notes[i].getElementsByTagName('h1')[0].innerHTML = id + " :: " + h1;		
		dateString = id;
		date = Date.parseString(dateString, formatString);
		var span = document.createElement('span');
		span.style.position = "absolute";
		span.style.bottom = "0px";
		span.style.right = "2px";
		span.style["font-family"] = "Helvetica";
		span.style["font-size"] = "9pt";		
		span.innerHTML = daysBetween(date,dNoCoffee) + " :: " + daysBetween(dAug, date) + " :: #" + daysBetween(date, dBorn);
		notes[i].appendChild(span);

		var number = document.createElement('span');
		number.style.position = "absolute";
		number.style.bottom = "0px";
		number.style.left = "2px";
		number.style["font-family"] = "Helvetica";
		number.style["font-size"] = "7pt";
		
		number.innerHTML = "#"+ (notes.length - i -1) + ".";
		notes[i].appendChild(number);

	}

	
}	



function daysBetween(fst,snd){
	var one_day = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	return Math.ceil((fst.getTime() - snd.getTime())/(one_day));
}



//in work
