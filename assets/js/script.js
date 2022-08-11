$("#hitung-pinjaman #hitung").on('click',function(){
	var jml_dana=$("#hitung-pinjaman [name=jml_dana]").val();
	var dana_maksimal=$("#hitung-pinjaman [name=dana_maksimal]").val();
	var tenor=$("#hitung-pinjaman [name=tenor]").val();
	var kota=$("#hitung-pinjaman [name=kota]").val();
	var merek=$("#hitung-pinjaman [name=merek]").val();


	window.open("https://api.whatsapp.com/send?phone=6285867136852&text=Hallo%20Admin,%0ASaya%20mau%20tanya%20hitungan%20pinjaman:%0ADana Pinjaman:Rp."+jml_dana+"%0ATenor:"+tenor+"%0AKota%2fKabupaten:"+kota+"%0AMerek,%20Tipe%20%26%20Tahun:"+merek+"%0ATerimakasih", '_blank');
})
