// Seleciona o botão pelo ID definido no HTML
const botaoAdicionar = document.getElementById("addTaskBtn");

// Adiciona um "ouvinte de evento" para quando o botão for clicado
botaoAdicionar.addEventListener("click", function () {

    // Seleciona o campo de entrada de texto
    const input = document.getElementById("taskInput");

    // Pega o valor digitado pelo usuário
    const textoTarefa = input.value;

    // Verifica se o campo está vazio
    if (textoTarefa === "") {
        alert("Digite uma tarefa!"); // Exibe alerta se estiver vazio
        return; // Interrompe a execução da função
    }

    // Cria um novo elemento <li> (item da lista)
    const novaTarefa = document.createElement("li");

    // Define o texto da tarefa dentro do <li>
    novaTarefa.textContent = textoTarefa;

    // INCREMENTO 2 - Marcar tarefa como concluída
    novaTarefa.addEventListener("click", function () {
        // Alterna a classe "concluida"
        novaTarefa.classList.toggle("concluida");
    });

    // INCREMENTO 3 - Remover tarefa
    // Cria um botão para remover a tarefa
    const botaoRemover = document.createElement("button");

    // Define o texto do botão
    botaoRemover.textContent = "remover";

    // Adiciona um evento de clique no botão de remover
    botaoRemover.addEventListener("click", function (event) {
        // Evita que o clique no botão marque a tarefa como concluída
        event.stopPropagation();

        // Remove o item da lista (<li>)
        novaTarefa.remove();
    });

    // Adiciona o botão dentro da tarefa
    novaTarefa.appendChild(botaoRemover);
    // FIM DO INCREMENTO 3

    // Seleciona a lista (<ul>) onde as tarefas serão adicionadas
    const lista = document.getElementById("taskList");

    // Adiciona o novo <li> dentro da lista
    lista.appendChild(novaTarefa);

    // Limpa o campo de entrada após adicionar a tarefa
    input.value = "";
});

//projeto finalizado breno