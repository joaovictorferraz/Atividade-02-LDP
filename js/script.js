function salvar() {
    let form = document.getElementById("form-cadastro");
    let nome = form.nome.value;
    let especie = form.especie.value;
    let altura = form.altura.value;

    if (nome.trim() == "") {
        alert("Preencha o Nome!")
        return false
    }

    if (especie.trim() == "") {
        alert("Preencha a Espécie!")
        return false
    }

    alert(`CADASTRADO COM SUCESSO!
    Nome: ${nome} Espécie: ${especie} Altura:${altura}`)

}