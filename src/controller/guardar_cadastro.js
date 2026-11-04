const guardarcadastro=(req,res)=>{
    const dadoscadastro= req.body
    res.status(200).json({
        mesnsagem:'dados recebidos com sucesso'

    });
    console.log(dadoscadastro);

};
module.exports=guardarcadastro;