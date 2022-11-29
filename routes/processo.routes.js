import express from "express"

const userRoute = express.Router()

//CRIAÇÃO DAS ROTAS
userRoute.get("/todos", (req, res) => { //rota para listar todos os processos
    // req -> request -> REQUISIÇÃO QUE VEM DO CLIENTE
    // res -> response -> RESPOSTA PARA O CLIENTE
    //retorna uma resposta com status de 200 e um json .....
    return res.status(200).json(bdProcessos); //retorna um json com todos os processos
  });
  
  // ATIVIDADE CRIANDO UMA ROTA
  
  //POST -> CRIAÇÃO DE UM NOVO PROCESSO
  userRoute.post('/criar', (req, res) => { //rota para criar um novo processo
    const form = req.body;
  
    bdProcessos.push(form);
  
    return res.status(201).json(bdProcessos); 
  
  });
  
  
  //PUT -> ATUALIZAÇÃO DE UM PROCESSO
  userRoute.put('atualizar/:id', (req, res) => {
    const { id } = req.params;
    
    const editUser = bdProcessos.find((processo) => processo.id === id);
    const index = bdProcessos.indexOf(updateByid);
  
    bdProcessos[index = req.body];
  
    return res.status(200).json(bdProcessos);
  
  });
  
  // DELETE -> DELEÇÃO DE UM PROCESSO
  userRoute.delete("/excluir/:id", (req, res) => { // :id -> parâmetro
      const { id } = req.params; // desestruturação
      const deleteById = bdProcessos.find((processo) => processo.id === id);
      const index = bdProcessos.indexOf(deleteById); // retorna o índice do elemento
  
      bdProcessos.splice(index, 1); // remove o elemento do array
  
      return res.status(200).json(bdProcessos); // retorna o array atualizado
  });
  

  






export default userRoute