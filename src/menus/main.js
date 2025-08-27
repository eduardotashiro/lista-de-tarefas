import { select, isCancel } from "@clack/prompts";

export async function mainMenu(params) {

    const option = await select({
        message: "Escolha o que deseja fazer",
        options: [
            { label: "Criar nova tarefa", value: "create" },
            { label: "Lista tarefas", value: "list" },
            { label: "Sair", value: "end" }
        ]
    })

    if (isCancel(option)) return;

    switch (option) {
        case "create":
            console.log("Aqui vai criar nova tarefa");
            break;

        case "list":
            console.log("Aqui vai listar tarefas");
            break;

        case "end":
            console.log("Fim do programa");
            break;

    }
}