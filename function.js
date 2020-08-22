// App Step 13: join-folder
'use strict';
var global_url='https://datablok.id/v0/';
var global_url_image='https://rangkaidata.com/image/';

function loadXHR(url,obj,callback){
	var request = new XMLHttpRequest();
	var dbParam = JSON.stringify(obj);

	request.onload=function(){		
		if (request.readyState===4){
			var paket = JSON.parse(request.responseText);
			// alert(paket.msg);
			callback(paket);
		}
		else {
			console.log('Network request failed with response ' + request.status + ': ' + request.statusText)
		}
	};
	request.open('POST', url);
	request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	request.send(dbParam);
}

function blokID (blok){
	var blokend = blok;
	var blokend3 = blokend.split("-");
	return blokend3[2];
}

function tglIna(tgl){
	var bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nop", "Des"];
	return tgl.substr(8,2)+'-'+bulan[parseInt(tgl.substr(5,2))]+'-'+tgl.substr(2,2) +' ' +tgl.substr(11,5);
}

function tglIna2(tgl){
	var bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nop", "Des"];
	return tgl.substr(8,2)+'-'+bulan[parseInt(tgl.substr(5,2))-1]+'-'+tgl.substr(2,2) ;
}

function tglIna2(tgl){
	var bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nop", "Des"];
	return tgl.substr(8,2)+'-'+bulan[parseInt(tgl.substr(5,2))-1]+'-'+tgl.substr(2,2) ;
}

function tglSekarang(){
	var n=new Date();
	var tglskrng=n.getFullYear()+"-"+("0"+parseInt(n.getMonth()+1)).slice(-2)+"-"+("0"+n.getDate()).slice(-2);
	return tglskrng;
}

function tglInaFull(tgl){
	var bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember"];
	return tgl.substr(8,2)+' '+bulan[parseInt(tgl.substr(5,2))-1]+' '+tgl.substr(0,4) ;
}

function timeID(blok){
	var blokend = blok;
	var blokend3 = blokend.split("-");
	return blokend3[0];
}	

function formatSerebuan(num) {
	if (num===null){num=0;}
	if (num<0){
		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	}else{
		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	}
}

function pleaseWait(){
	return "Please wait ...";
}
