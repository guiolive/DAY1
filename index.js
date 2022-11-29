//ARQUIVO PRINCIPAL
import express from "express";
import * as dotenv from "dotenv";
import { uuid } from 'uuidv4';
import { restart } from "nodemon";
import userRoute from "./routes/processo.routes.js";

//habilitar o servidor a ter variáveis de ambiente
dotenv.config();

//instanciar a variável que vai ficar responsável pelo nosso servidor -> app
const app = express();


//configurar o servidor para aceitar enviar e receber arquivos em JSON
app.use(express.json());

app.use("/user'", userRoute)

app.listen(process.env.PORT, () => {}); //inicia o servidor na porta 3000
  
  



const bdProcessos = [
	{
		id: "e27ab2b1cb914b18ab905895cc9abd29",
		documentName: "Licitação Enap - Curso Web Dev",
		status: "Em andamento",
		details:
			"Processo para capacitação de servidores públicos em desenvolvimento de aplicações na WEB. Parceria com Ironhack",
		dateInit: "28/11/2022",
		comments: [
			"Processo aberto",
			"Processo partiu para as partes assinarem",
			"Processo agora está em análise final",
			"Processo já tem data final",
		],
		dateEnd: "16/12/2022",
		setor: "enap",
	},
	{
		id: "ee5999d702e94b3da1abf067eef54173",
		documentName: "Licitação Compras - Notebooks",
		status: "Em andamento",
		details: "Processo de licitação para compra de notebooks",
		dateInit: "30/11/2022",
		comments: ["Processo em aberto e sem previsão de conclusão"],
		dateEnd: "",
		setor: "tre",
	},
	,
	{
		id: "ee5999d702e94b3da1abf067eef54173",
		documentName: "Licitação Compras - Ar Condicionado",
		status: "Finalizado",
		details: "Processo de licitação para compra de ar-condicionado",
		dateInit: "15/11/2022",
		comments: ["Processo em aberto", "Processo finalizado"],
		dateEnd: "25/11/2022",
		setor: "trj",
	},
];





    
    
    
    