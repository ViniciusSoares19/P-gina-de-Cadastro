// localstorage Cadastro

function cadastrarUsuario(){
    let email = document.getElementById("email");
    let nome = document.getElementById("nome");
    let sobrenome = document.getElementById("sobrenome");
    let cpf = document.getElementById("cpf");
    let telefone = document.getElementById("telefone");
    let cep = document.getElementById("cep");
    let rua = document.getElementById("rua");
    let numero = document.getElementById("numero");
    let complemento = document.getElementById("complemento");
    let referencia = document.getElementById("referencia");
    let bairro = document.getElementById("bairro");
    let cidade = document.getElementById("cidade");
    let estado = document.getElementById("estado");

    let dados = JSON.parse(localStorage.getItem("dadosCadastro"));

    if(dados == null){
        localStorage.setItem("dadoCadastro", "[]");
        dados = [];
    }

    let auxCadastro = {
        email: email.value,
        nome: nome.value,
        sobrenome: sobrenome.value,
        cpf: cpf.value,
        telefone: telefone.value,
        cep: cep.value,
        rua: rua.value,
        numero: numero.value,
        complemento: complemento.value,
        referencia: referencia.value,
        bairro: bairro.value,
        cidade: cidade.value,
        estado: estado.value,
    }

    dados.push(auxCadastro);

    localStorage.setItem("dadoCadastro", JSON.stringify(dados));

    let content = document.getElementById("content")
    let cadastrando = `<p>Cadastrando...</p>`
    let sucesso = `<p>Cadastro realizado com sucesso!</p>`

    content.innerHTML = cadastrando

    setTimeout(() => {
        content.innerHTML = sucesso
    }, 1000)

        email.value = "";
        nome.value = "";
        sobrenome.value = "";
        cpf.value = "";
        telefone.value = "";
        cep.value = "";
        rua.value = "";
        numero.value = "";
        complemento.value = "";
        referencia.value = "";
        bairro.value = "";
        cidade.value = "";
        estado.value = "";
}

// localstorage Produtos

function adicionarProduto(){
    let codigo = document.getElementById("codigo");
    let descricao = document.getElementById("descricao");
    let categoria = document.getElementById("categoria");
    let subcategoria = document.getElementById("subcategoria");
    let marca = document.getElementById("marca");
    let modelo = document.getElementById("modelo");
    let custo = document.getElementById("custo");
    let varejo = document.getElementById("varejo");
    let atacado = document.getElementById("atacado");
    let quantidade = document.getElementById("quantidade");

    let dados = JSON.parse(localStorage.getItem("dadosAdicionar"));

    if(dados == null){
        localStorage.setItem("dadoAdicionar", "[]");
        dados = [];
    }

    let auxAdicionar = {
        codigo: codigo.value,
        descricao: descricao.value,
        categoria: categoria.value,
        subcategoria: subcategoria.value,
        marca: marca.value,
        modelo: modelo.value,
        custo: custo.value,
        varejo: varejo.value,
        atacado: atacado.value,
        quantidade: quantidade.value,
    }

    dados.push(auxAdicionar);

    localStorage.setItem("dadoAdicionar", JSON.stringify(dados));

    let content = document.getElementById("content")
    let adicionando = `<p>Adicionando Produto...</p>`
    let sucesso = `<p>Produto adicionado com sucesso!</p>`

    content.innerHTML = adicionando

    setTimeout(() => {
        content.innerHTML = sucesso
    }, 2000)

        codigo.value = "";
        descricao.value = "";
        categoria.value = "";
        subcategoria.value = "";
        marca.value = "";
        modelo.value = "";
        custo.value = "";
        varejo.value = "";
        atacado.value = "";
        quantidade.value = "";
    
}