function login(usuario, senha)
{
    var usuarios = sincronizar_usuarios();
    if (usuarios.filter(v => v.usuario == usuario && v.senha == senha).length)
    {
        localStorage.setItem("usuario_logado", usuario);
        alert('entrou na conta com sucesso');
        return true;
    }
    else
    {
        alert('usuário não existe');
        return false;
    }
}

function cadastro(nome, email, usuario, senha)
{
    var usuarios = sincronizar_usuarios();
    if (usuarios.filter(v => v.usuario == usuario).length)
    {
        alert('usuário já existe');
        return false;
    }
    else
    {
        usuarios.push({nome, email, usuario, senha});
        sincronizar_usuarios(usuarios);
        alert('criou a conta com sucesso');
        return true;
    }
}

var form_login = document.getElementById("loginForm");
var form_cadastro = document.getElementById("cadastroForm");

form_login?.addEventListener("submit", acao_login);
form_cadastro?.addEventListener("submit", acao_cadastro);

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
    if (usuarios?.length)
    {
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }
    else
    {
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
    return usuarios || [];
}