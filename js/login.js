function login(usuario, senha)
{
    var usuarios = sincronizar_usuarios();

    // PROCURA O USUÁRIO
    var usuario_encontrado = usuarios.find(
        v => v.usuario == usuario && v.senha == senha
    );

    if (usuario_encontrado)
    {
        // SALVA O NOME DO USUÁRIO LOGADO
        localStorage.setItem(
            "usuario_logado",
            usuario_encontrado.nome
        );

        alert('Entrou na conta com sucesso');

        return true;
    }
    else
    {
        alert('Usuário ou senha inválidos');

        return false;
    }
}

function cadastro(nome, email, usuario, senha)
{
    var usuarios = sincronizar_usuarios();

    // VERIFICA SE O USUÁRIO JÁ EXISTE
    if (usuarios.filter(v => v.usuario == usuario).length)
    {
        alert('Usuário já existe');

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

        alert('Conta criada com sucesso');

        return true;
    }
}

// PEGA OS FORMULÁRIOS
var form_login = document.getElementById("loginForm");

var form_cadastro = document.getElementById("cadastroForm");

// EVENTOS
form_login?.addEventListener("submit", acao_login);

form_cadastro?.addEventListener("submit", acao_cadastro);

// LOGIN
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
        location.assign("/login");
    }
}

// SINCRONIZA USUÁRIOS
function sincronizar_usuarios(usuarios)
{
    if (usuarios?.length)
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