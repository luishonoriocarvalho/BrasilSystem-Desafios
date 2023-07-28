const table = document.getElementById('requestTable')

table.addEventListener('dblclick', function(ev){
    let span = ev.target
    if(span.classList.contains('btnRemove')){
        let td = span.parentNode
        let tr = td.parentNode
        tr.remove()
    }
})