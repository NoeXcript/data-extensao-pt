import date from 'date-and-time'

const dataExtensao = (dat, ano = true) => {
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    if (!dat)
        return null



    dat = new Date(dat)


    dat = formatDate(dat, 'DD/MM/YYYY')

    const data = new Date(dat)


    if (['Invalid Date'].includes(data.toString())) return null

    const data_descricao = ano ? `${getDia(data.getDate())} de ${meses[data.getMonth()]} de ${data.getFullYear()}` : `${getDia(data.getDate())} de ${meses[data.getMonth()]}`
    return {
        ano: data.getFullYear(),
        extensao: data_descricao
    }

}

function formatDate(data = null, format = 'YYYY/MM/DD') {
    try {
        if (!data) {
            return date.format(new Date(), format);

        }
        if (typeof data === 'string' && /^(\d{2}\/\d{2}\/\d{4})$/.test(data)) {
            data = data.split('/').reverse().join('-');
        }

        return date.format(data, format);
    } catch (e) {
        return null
    }
}

function getDia(dia,) {
    return dia.toString().length == 2 ? dia : `0${dia}`
}


const data = "9-12-1399"
const dataPorExtensao = dataExtensao(data)

console.log(dataPorExtensao)
