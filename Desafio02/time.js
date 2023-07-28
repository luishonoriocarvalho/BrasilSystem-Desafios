function strartTimer(duration, display, formElements){
    let timer = duration, minutes, seconds
    const intervalID = setInterval(function(){
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)

        minutes = minutes < 10 ? '0' + minutes : minutes
        seconds = seconds < 10 ? '0' + seconds : seconds

        display.textContent = minutes + ':' + seconds

        if(--timer < 0){
            clearInterval(intervalID)
            formElements.forEach(element => {
                element.disabled = true
            });
        }


    }, 1000)
}

window.onload = function(){
    let duration = 60 * 60
    let display = document.querySelector('#timer')

    const bookType = document.getElementById('bookType')
    const bookTitle = document.getElementById('bookTitle')
    const bookAuthor = document.getElementById('bookAuthor')
    const bookEdition = document.getElementById('bookEdition')
    const bookIssn = document.getElementById('bookIssn')
    const bookYear = document.getElementById('bookYear')
    const publishingCompany = document.getElementById('publishingCompany')
    const buttomForm = document.getElementById('buttomForm')

    const formElements = [bookType, bookTitle, bookAuthor, bookEdition, bookIssn, bookYear, publishingCompany, buttomForm]
  

    strartTimer(duration, display, formElements)
}
