function mostrar_aviso(mensagem, tipo)
{
    var area_aviso = document.getElementById("area-aviso");

    if (!area_aviso)
    {
        area_aviso = document.createElement("div");
        area_aviso.id = "area-aviso";
        document.body.appendChild(area_aviso);
    }

    var aviso = document.createElement("div");
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

function login(usuario, senha)
{
    var usuarios = sincronizar_usuarios();
    var usuario_digitado = String(usuario || "").trim();
    var senha_digitada = String(senha || "");
    var usuario_encontrado = usuarios.find(
        function(usuario_atual)
        {
            return usuario_atual.usuario === usuario_digitado && usuario_atual.senha === senha_digitada;
        }
    );
    if (usuario_encontrado)
    {
        localStorage.setItem(
            "usuario_logado",
            usuario_encontrado.usuario
        );
        mostrar_aviso("Login realizado com sucesso", "sucesso");
        return true;
    }
    else
    {
        mostrar_aviso("Usuário ou senha inválidos", "erro");
        return false;
    }
}
function cadastro(nome, email, usuario, senha)
{
    var usuarios = sincronizar_usuarios();
    var usuario_digitado = String(usuario || "").trim();
    if (usuarios.filter(
        function(usuario_atual)
        {
            return usuario_atual.usuario === usuario_digitado;
        }
    ).length)
    {
        mostrar_aviso("Usuário já existe", "erro");
        return false;
    }
    else
    {
        usuarios.push({
            nome,
            email,
            usuario: usuario_digitado,
            senha
        });
        sincronizar_usuarios(usuarios);
        mostrar_aviso("Conta criada com sucesso", "sucesso");
        return true;
    }
}
var formulario_login = document.getElementById("formulario-login");
var formulario_cadastro = document.getElementById("formulario-cadastro");
if (formulario_login)
{
    formulario_login.addEventListener("submit", acao_login);
}
if (formulario_cadastro)
{
    formulario_cadastro.addEventListener("submit", acao_cadastro);
}
function acao_login(event)
{
    event.preventDefault();
    var usuario = event.target.elements.usuario.value;
    var senha = event.target.elements.senha.value;
    if (login(usuario, senha))
    {
        window.setTimeout(function()
        {
            location.assign("/home");
        }, 700);
    }
}
function acao_cadastro(event)
{
    event.preventDefault();
    var nome = event.target.elements.nome.value;
    var email = event.target.elements.email.value;
    var usuario = event.target.elements.usuario.value;
    var senha = event.target.elements.senha.value;
    if (cadastro(nome, email, usuario, senha))
    {
        window.setTimeout(function()
        {
            location.assign("/login");
        }, 700);
    }
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
    var usuarios_salvos = [];
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