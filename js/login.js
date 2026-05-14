function login(usuario, senha)
{
    var usuarios = sincronizar_usuarios();

    // PROCURA O USUÁRIO
    var usuario_encontrado = usuarios.find(
        function(usuario_atual)
        {
            return usuario_atual.usuario == usuario && usuario_atual.senha == senha;
        }
    );

    if (usuario_encontrado)
    {
        // SALVA O NOME DO USUÁRIO LOGADO
        localStorage.setItem(
            "usuario_logado",
            usuario_encontrado.nome
        );

        alert("Entrou na conta com sucesso");

        return true;
    }
    else
    {
        alert("Usuário ou senha inválidos");

        return false;
    }
}

function cadastro(nome, email, usuario, senha)
{
    var usuarios = sincronizar_usuarios();

    // VERIFICA SE O USUÁRIO JÁ EXISTE
    if (usuarios.filter(
        function(usuario_atual)
        {
            return usuario_atual.usuario == usuario;
        }
    ).length)
    {
        alert("Usuário já existe");

        return false;
    }
    else
    {
        // SALVA O NOVO USUÁRIO
        usuarios.push({
            nome,
            email,
            usuario,
            senha
        });

        sincronizar_usuarios(usuarios);

        alert("Conta criada com sucesso");

        return true;
    }
}

// PEGA OS FORMULÁRIOS
var form_login = document.getElementById("loginForm");

var form_cadastro = document.getElementById("cadastroForm");

// EVENTOS
if (form_login)
{
    form_login.addEventListener("submit", acao_login);
}

if (form_cadastro)
{
    form_cadastro.addEventListener("submit", acao_cadastro);
}

// LOGIN
function acao_login(event)
{
    event.preventDefault();

    var usuario = event.target.elements.usuario.value;

    var senha = event.target.elements.senha.value;

    if (login(usuario, senha))
    {
        location.assign("./home.html");
    }
}

// CADASTRO
function acao_cadastro(event)
{
    event.preventDefault();

    var nome = event.target.elements.nome.value;

    var email = event.target.elements.email.value;

    var usuario = event.target.elements.usuario.value;

    var senha = event.target.elements.senha.value;

    if (cadastro(nome, email, usuario, senha))
    {
        location.assign("./login.html");
    }
}

// SINCRONIZA USUÁRIOS
function sincronizar_usuarios(usuarios)
{
    if (usuarios && usuarios.length)
    {
        localStorage.setItem(
            "usuarios",
            JSON.stringify(usuarios)
        );
    }
    else
    {
        usuarios = JSON.parse(
            localStorage.getItem("usuarios")
        );
    }

    return usuarios || [];
}