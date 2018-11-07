function sumar(){
	var a,b,total;
	a=document.getElementById("n1").value;
	b=document.getElementById("n2").value;
	total=parseInt(a)+parseInt(b);
    document.getElementById("RESULTADO").value=total;
}
function factorial(){
	var a,p,i;
	p=1;
	a=document.getElementById("n3").value;
	for(i=1;i<=parseInt(a);i++){
		p=p*i;
	}
	document.getElementById("FACTORIAL").value=p;
}

