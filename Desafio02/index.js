const form = document.getElementById('requestForm')


form.addEventListener('submit', function(event) {
    event.preventDefault() // Impedir o envio do formulário
    
  
    // Obter os valores dos campos do formulário
    const bookType = document.getElementById('bookType').value
    const bookTitle = document.getElementById('bookTitle').value
    const bookAuthor = document.getElementById('bookAuthor').value
    const bookEdition = document.getElementById('bookEdition').value
    const bookIssn = document.getElementById('bookIssn').value
    const bookYear = document.getElementById('bookYear').value
    const publishingCompany = document.getElementById('publishingCompany').value
  
    // Verificar se todos os campos obrigatórios foram preenchidos
    if (!bookType || !bookTitle || !bookAuthor) {
      alert('Por favor, preencha todos os campos obrigatórios:' + '\nVínculo, Título e Autor')
      return
    }

    const table = document.getElementById('requestTable')
  
    // Criar uma nova linha na tabela
    const newTbody = document.createElement('tbody')
    const newRow = document.createElement('tr')
  
    // Criar células da linha
    const bookTypeTd = document.createElement('td')
    const bookTypeSpan = document.createElement('span')
    bookTypeSpan.innerText = bookType
    bookTypeSpan.className = 'btnRemove'

    const bookTitleTd = document.createElement('td')
    const bookTitleSpan = document.createElement('span')
    bookTitleSpan.innerText = bookTitle
    bookTitleSpan.className = 'btnRemove'

    const bookAuthorTd = document.createElement('td')
    const bookAuthorSpan = document.createElement('span')
    bookAuthorSpan.innerText = bookAuthor
    bookAuthorSpan.className = 'btnRemove'

    const bookEditionTd = document.createElement('td')
    const bookEditionSpan = document.createElement('span')
    bookEditionSpan.innerText = bookEdition
    bookEditionSpan.className = 'btnRemove'

    const bookIssnTd = document.createElement('td')
    const bookIssnSpan = document.createElement('span')
    bookIssnSpan.innerText = bookIssn
    bookIssnSpan.className = 'btnRemove'

    const bookYearTd = document.createElement('td')
    const bookYearSpan = document.createElement('span')
    bookYearSpan.innerText = bookYear
    bookYearSpan.className = 'btnRemove'


    const publishingCompanyTd = document.createElement('td')
    const publishingCompanySpan = document.createElement('span')
    publishingCompanySpan.innerText = publishingCompany
    publishingCompanySpan.className = 'btnRemove'

    // Adicionar células à linha
    bookTypeTd.appendChild(bookTypeSpan)
    bookTitleTd.appendChild(bookTitleSpan)
    bookAuthorTd.appendChild(bookAuthorSpan)
    bookEditionTd.appendChild(bookEditionSpan)
    bookIssnTd.appendChild(bookIssnSpan)
    bookYearTd.appendChild(bookYearSpan)
    publishingCompanyTd.appendChild(publishingCompanySpan)
        

    newRow.append(bookTypeTd, bookTitleTd, bookAuthorTd, bookEditionTd, bookIssnTd, bookYearTd, publishingCompanyTd)
    newTbody.appendChild(newRow)
    table.appendChild(newTbody)   
  
   
  
    // Limpar os campos do formulário
    form.reset()
});





