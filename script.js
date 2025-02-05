// seleciona os elementos do formulário
const form = document.querySelector("form") 
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

// Captura o evento de input para formatar o valor
amount.oninput = () => {
    //Obtém o valor atual do input e remove os  caracteres não númericos  
    let value = amount.value.replace(/\D/g, "")
    
    //Tranforma o valor em centavos (ex: 150/100 = 1.50)
    value = Number(value) / 100
    
    // Atualiza o valor do input 
    amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value) {
    //Formata o valor no padrão BRL (Real Brasileiro) 
    value = value.toLocaleString("pt-BR", {
       style: "currency",
       currency: "BRL",  
    })
    
    return value 
}

//Captura o evento de submite do fromulário para obter os valores.
form.onsubmit = (event) => {
    // previne o comportamento padrão de recarregar a página. 
    event.preventDefault()

    //Cria um objeto com os detalhes da nova dispesa. 
    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text, 
        amount: amount.value,
        created_at: new Date(),   
    }

    //Chamamos a função que irá adicionar um item a lista.
    expenseAdd(newExpense)
}

function expenseAdd(newExpense){
    try {
    // Cria o elemento para adicionar o item (li) na lista (ul)
    const expenseItem = document.createElement("li")
    expenseItem.classList.add("expense")   
    
    
    } catch (error) {
    alert("Não foi possível atualizar a lista de despesas")    
    console.log(error)
    }
}