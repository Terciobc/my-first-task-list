let f = document.querySelector('#formulario')
f.addEventListener('submit', (e)=>{
    e.preventDefault()
})
let listaGeral = []

function adicionar(){
    let val = document.querySelector('#valor')
    let v = val.value
    let lista = document.querySelector('#lista')

    if(v == 0){
       return window.alert('Digite uma tarefa válida')

    }if(listaGeral.indexOf(v) > -1){
        window.alert('Essa Tarefa já foi adicionada')
        val.value = ''
        val.focus()
    }
    else{
        let list = document.createElement('div')
        list.classList.add('resposta')

        

        let conteudoLista = document.createElement('div')
        conteudoLista.classList.add('conteudo')
        list.appendChild(conteudoLista)
        
        let inp = document.createElement('input')
        inp.type = 'text'
        inp.classList.add('text')
        inp.setAttribute('readonly', 'readonly')
        inp.value = v;

        conteudoLista.appendChild(inp)
        

        let divAcoes = document.createElement('div')
        divAcoes.classList.add('acoes')

        conteudoLista.appendChild(divAcoes)

        let btnEditar = document.createElement('button')
        btnEditar.classList.add('editar')
        btnEditar.innerHTML = 'EDITAR'

        let btnDeletar = document.createElement('button')
        btnDeletar.classList.add('deletar')
        btnDeletar.innerHTML = 'DELETAR'

        listaGeral.push(v)

        conteudoLista.appendChild(btnEditar)
        conteudoLista.appendChild(btnDeletar)

        lista.appendChild(list)
        val.value = ''
        val.focus()

        btnEditar.addEventListener('click', ()=>{
            if(btnEditar.innerText == 'EDITAR'){
                inp.removeAttribute('readonly')
                inp.focus()
                btnEditar.innerText = 'Salvar'
            }else{
                inp.setAttribute('readonly', 'readonly')
                btnEditar.innerText = 'EDITAR'
            }
        })
        btnDeletar.addEventListener('click', ()=>{
            // lista.removeChild(list)
            
            let confirmacao = window.confirm('Deseja realmente remover a tarefa?')
            if(confirmacao){
                lista.removeChild(list)
                for(let i=0; i <= listaGeral.length; i++){
                    if (listaGeral[i] === v){
                        listaGeral.splice(i, 1)
                    }
                }

                
            }
        })
    }
}