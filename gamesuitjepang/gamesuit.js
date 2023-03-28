var tanya = true
while (tanya) {
	//menangkap pilihan pemain
	var p = prompt('pilih : gunting, batu, kertas')

	//menangkap pilihan computer
	// membangkitkan pilihan random
	var com = Math.random();

	if(com < 0.34){
		com ='gunting';
	} else if (com > 0.34 && com < 0.77){
		com = 'batu';	
	} else {
		com = 'kertas';
	}

	var hasil = '';
	if ( p == com ) {
		hasil = 'SERI';
	} else if ( p == 'gunting'){
		/*if (p == 'orang') {
			hasil = 'MENANG';
		} else {
			hasil = 'KALAH';
		}*/
		hasil = com == 'batu'? 'KALAH' : 'MENANG';
	} else if ( p == 'batu'){
		hasil = com == 'kertas'? 'KALAH' : 'MENANG';
	} else if ( p == 'kertas'){
		hasil = com == 'gunting'? 'KALAH' : 'MENANG';
	} else {
		alert ('anda salah memasukkan pilihan')
	}
	//tampilkan hasilnya
	alert('kamu memilih '+ p +' dan komputer memilih ' + com + '\nmaka hasilnya : kamu '+ hasil);

	tanya = confirm('apakah ingin bermain lagi?')
}
alert('terima kasih sudah bermain!')