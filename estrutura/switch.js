let diaDaSemana = "terça";

switch (diaDaSemana) {
    case "segunda":
        console.log("Dia de começar a semana");
        break;
    case "terça":
        console.log("Dia de trabalho");
        break;
    case "quarta":
    case "quinta":
        console.log("Metade da semana");
        break;
    case "sexta":
        console.log("Dia de se preparar para o fim de semana");
        break;
    default:
        console.log("Fim de semana");
}
