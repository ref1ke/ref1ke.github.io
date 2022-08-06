function fillTable(divId, films) {
    films = films.reverse()
    // Init table
    var table = document.createElement('table')
    var titleTr = document.createElement('tr')
    var columns = ['№', 'Film', 'Jahr']
    for (let i = 0; i < 3; i++) {
        var titleTh = document.createElement('th')
        titleTh.innerText = columns[i]
        titleTr.appendChild(titleTh)
    }
    table.appendChild(titleTr)
    
    // Fill table
    var i = 1
    films.forEach(film => {
        var tr = document.createElement('tr')

        var th1 = document.createElement('td')
        var th2 = document.createElement('td')
        var th3 = document.createElement('td')
        var a = document.createElement('a')

        a.href = `http://hdrezka.co/films/${film[0]}.html`
        a.innerText = film[1]
        a.target = '_blank'
        a.rel = 'noopener noreferrer'

        th1.innerText = i
        th3.innerText = film[0].split('-').at(-1)

        th2.appendChild(a)
        tr.appendChild(th1)
        tr.appendChild(th2)
        tr.appendChild(th3)
        table.appendChild(tr)
        i += 1
    })

    // Inject table
    document.getElementById(divId).appendChild(table)
}