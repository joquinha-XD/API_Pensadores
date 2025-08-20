import usuarioModel from "../models/usuarioModel.js";

export const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha, confirmar_senha } = req.body

    if(!nome){
        res.status(400).json({
            erro: "Campo inválido",
            mensagem: "O campo nome não pode ser nulo"
        })
        return
    }
    if(!email){
        res.status(400).json({
            erro: "Campo inválido",
            mensagem: "O campo email não pode ser nulo"
        })
        return
    }
    if(!senha){
        res.status(400).json({
            erro: "Campo inválido",
            mensagem: "O campo senha não pode ser nulo"
        })
        return
    }
    if(!confirmar_senha){
        res.status(400).json({
            erro: "Campo inválido",
            mensagem: "O campo confirmar_senha não pode ser nulo"
        })
        return
    }

    //Validação -> Senha = Confirmar_senha
    if(confirmar_senha !== senha){
        res.status(400).json({
            erro: "Senha inválida",
            mensagem: "As senhas não coincidem"
        })
        return
    }

    const usuario = {
        nome,
        email,
        senha,
        confirmar_senha
    }

    try {
        const novoUsuario = await usuarioModel.create(usuario)

        res.status(201).json({mensagem: "Usuário cadastrado", novoUsuario})
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem: "Erro interno ao cadastrar usuário"})
    }
}