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
        alert("entrou na conta com sucesso");
        return true;
    }
    else
    {
        alert("usuário ou senha inválidos");
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
        alert("usuário já existe");
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
        alert("conta criada com sucesso");
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
        location.assign("/home");
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
        location.assign("/login");
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