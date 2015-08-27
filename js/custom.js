


function doLogin() 
{	
	var base_url = "http://hotspot.smartmarket.com.co/";

	var nombre=	jQuery("#nombre").val();
	var apellido=jQuery("#apellidos").val();
	var telefono=jQuery("#telefono").val();
	var email=jQuery("#email").val();

	datos={
		"nombre":nombre,
		"apellido":apellido,
		"telefono":telefono,
		"email":email,
		"remitente":"centro comercial",
		"aceptacion_politicas":"si",
		"from_ws":"1"
	}

	/**************************************************/
	jQuery.ajax({
        type: "POST",
        url: base_url+"index.php/lists/add",
        data: datos,
        dataType:"json",
        cache: false,
        success: function(response) {
        	if(response.valido){
        		alert(response.msg);
        		login();
        	}else{
        		alert(response.msg);
        	}     	               
        }
    });


	return false;
}

    
    

