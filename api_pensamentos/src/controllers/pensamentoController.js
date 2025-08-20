import pensamentoModel from "../models/pensamentoModel.js"
import usuarioModel from "../models/usuarioModel.js"

export const cadastrarPensamento = async (req, res) => {
    const { titulo, usuario_id } = req.body

    if(!titulo){
        res.status(400).json({
            erro: "Campo inválido",
            mensagem: "O campo titulo não pode ser nulo"
        })
        return
    }
    if(!usuario_id){
        res.status(400).json({
            erro: "Campo inválido",
            mensagem: "O campo usuário não pode ser nulo"
        })
        return
    }

    const id = parseInt(usuario_id)

    try {
        const usuarioSelecionado = await usuarioModel.findOne({
            where: {id}
        })

        if(!usuarioSelecionado){
            res.status(404).json({
                erro: "Id inválido",
                mensagem: "Não há usuário com esse id"
            })
            return
        }

        const pensamento = await pensamentoModel.create({titulo, usuario_id})

        const pensamentoComPensador = await pensamentoModel.findByPk(pensamento.id, {
            attributes: {exclude: ["created_at", "updated_at"]},
            include: {
                model: usuarioModel,
                attributes: {exclude: ["created_at", "updated_at"]},
            }
        })

        res.status(201).json({mensagem: "Pensamento criado", pensamentoComPensador})
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem: "Erro interno ao criar pensamento"})
    }
}

export const listarPensamentos = async (req, res) => {
    try {
        const pensamentos = await pensamentoModel.findAll()
    
        if(!pensamentos){
            res.status(404).json({mensagem: "Nenhum pensamento cadastrado"})
        }
        res.status(200).json(pensamentos)
    } catch (error) {
        console.log(error)
        res.status(500).json({mensagem: "Erro interno ao listar pensamentos"})
    }
}
