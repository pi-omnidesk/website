function mostrar_aviso(mensagem, tipo)
{
    let area_aviso = document.getElementById("area-aviso");
    if (!area_aviso)
    {
        area_aviso = document.createElement("div");
        area_aviso.id = "area-aviso";
        document.body.appendChild(area_aviso);
    }
    const aviso = document.createElement("div");
    aviso.className = "aviso-flutuante " + tipo;
    aviso.textContent = mensagem;
    area_aviso.appendChild(aviso);
    window.setTimeout(function()
    {
        aviso.classList.add("visivel");
    }, 10);
    window.setTimeout(function()
    {
        aviso.classList.remove("visivel");
        window.setTimeout(function()
        {
            aviso.remove();
        }, 200);
    }, 1600);
}
function sincronizar_usuarios(usuarios)
{
    if (Array.isArray(usuarios))
    {
        localStorage.setItem(
            "usuarios",
            JSON.stringify(usuarios)
        );
        return usuarios;
    }
    let usuarios_salvos = [];
    try
    {
        usuarios_salvos = JSON.parse(
            localStorage.getItem("usuarios")
        ) || [];
    }
    catch (erro)
    {
        usuarios_salvos = [];
    }
    return usuarios_salvos;
}
export {mostrar_aviso, sincronizar_usuarios};