
function loguear()
{

    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("clave").value;


    if (user=="Yika" && pass=="1102") 
    {
        window.location="inicio.html";
    }

    else
    {
        alert("Datos incorrectos");
    }

}