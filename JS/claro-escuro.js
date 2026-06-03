const claro = document.getElementById("claro-icone")
const escuro = document.getElementById("escuro-icone")
claro.style.display='block'
  function mudartema(){
    if ((claro.style.display=="block")){
        claro.style.opacity=0
        escuro.style.opacity=1
        document.documentElement.style.setProperty('--cor-header_footer', '#1a1a1a')
        document.documentElement.style.setProperty('--cor-menu-lateral', '#2c2c2c')
        document.documentElement.style.setProperty('--cor-texto', '#f0e6d3')
        document.documentElement.style.setProperty('--cor-body', 'rgba(30, 20, 15, 0.95)')
        document.documentElement.style.setProperty('--cor-saibamais', '#c08856')
        setTimeout(function(){claro.style.display="none"
        escuro.style.display="block"},1500)
    }
    else{
        claro.style.opacity=1
        escuro.style.opacity=0
        document.documentElement.style.setProperty('--cor-header_footer', '#c08856')
        document.documentElement.style.setProperty('--cor-menu-lateral', '#a0714f')
        document.documentElement.style.setProperty('--cor-texto', '#f0e6d3')
        document.documentElement.style.setProperty('--cor-body', 'rgba(206, 167, 140, 0.658)')
        document.documentElement.style.setProperty('--cor-saibamais', '#6a3a20')
        setTimeout(function(){claro.style.display="block"
        escuro.style.display="none"},1500)
    }
}

