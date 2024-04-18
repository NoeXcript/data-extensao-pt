import dateFormat from 'dateformat'



const dataExtensao = (dat, ano = true) => {
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    dat = formatDate(dat, 'dd-mm-yyyy')

    if (!dat)
        return null
    const data = new Date(dat)

    return ano ? `${getDia(data.getDate())} de ${meses[data.getMonth()]} de ${data.getFullYear()}` : `${getDia(data.getDate())} de ${meses[data.getMonth()]}`
}

function formatDate(data = null, format = 'yyyy-mm-dd') {
    try {
        if (!data) return;

        if (!data) {
            return dateFormat(new Date(), format);
        }
        if (typeof data === 'string' && /^(\d{2}\/\d{2}\/\d{4})$/.test(data)) {
            data = data.split('/').reverse().join('-');
        }
        return dateFormat(data, format);
    } catch (e) {
        return null
    }
}

function getDia(dia,) {
    return dia.toString().length == 2 ? dia : `0${dia}`
}


const data = "2022-11-01"
const dataPorExtensao = dataExtensao(data)

console.log(dataPorExtensao)