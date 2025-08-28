import { select, isCancel } from "@clack/prompts";
import { createTaskMenu } from "./create.js";
import { listTaskMenu } from "./list.js";

export async function mainMenu() {

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
            createTaskMenu()
            
            break;

        case "list":
           listTaskMenu()
            break;

        case "end":
           
            break;

    }
}