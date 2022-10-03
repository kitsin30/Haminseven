$(Document).ready(function(){
	$('#submit').click(function(){ 
		var email=$("#email").val();
		var username=$("#username").val();
		var password=$("#password").val();
		var password2=$("#password2").val();

		var checked=$('#cb').is(":checked");

		var msg="";
		var temp=email.split("@");

		if (email.trim()=="")
		{
			msg=msg+"Email harus diisi\n";
		}
		if (temp.length<2)
		{
			msg=msg+"Email harus ada @ di tengahnya\n";
		}
		if (username.trim()=="")
		{
			msg=msg+"Username harus diisi\n";
		}
		else if (username.length>10)
		{
			msg=msg+"Panjang username tidak boleh lebih dari 10 karakter\n";
		}
		else if (username.length<5)
		{
			msg=msg+"Panjang username tidak boleh kurang dari 5 karakter\n";
		}
		else {
			var dpn=username.substring(0,1);
			var temp="abcdefghijklmnopqrstuvwxyz";
			if (temp.indexOf(dpn.toLowerCase())==-1)
			{
				msg=msg+"Huruf depan harus berupa alfabet\n";
			}
			else if (dpn.toUpperCase()!=dpn) {
				msg=msg+"Huruf depan harus huruf besar\n";
			}
		}

		var angka="1234567890";
		if (password.trim()=="")
		{
			msg=msg+"Password harus diisi\n";
		}
		else if (password.length<6)
		{
			msg=msg+"Panjang password tidak boleh kurang dari 6 karakter\n";
		}
		else if (password!=password2)
		{
			msg=msg+"Password dan konfirmasinya harus sama\n";
		}
		else
		{
			var adaangka=false;
			for (var i=0;i<password.length;i++)
			{
				var cp=password.substring(i,i+1);
				//alert(cp);
				if (angka.indexOf(cp)!=-1)
				{
					//alert(cp);
					adaangka=true;
				}
			}
			if (!adaangka)
			{
				msg=msg+"Password harus ada angka\n";
			}
		}
		if (!checked)
		{
			msg=msg+"Term dan agreement belum dicentang\n";
		}
		if (msg=="")
		{
			alert("Berhasil");
		}
		else {
			alert(msg);
		}
	});
})