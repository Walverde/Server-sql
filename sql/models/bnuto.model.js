function model(data) {



    const min = 0.7
    const max = 1

    function rand(min, max) {
        return Math.random() * (max - min) + min;
      }

    var rd = rand(min, max)

    var r1 = `${rand(min, max)}`
    var r2 = `${rand(min, max)}`
    var r3 = `${rand(min, max)}`

    var kwha = data.VARMS * data.IARMS * r1
    var kwhb = data.VBRMS * data.IBRMS * r2
    var kwhc = data.VCRMS * data.ICRMS * r3
    var kwht = kwha + kwhb + kwhc


    const hoje = function () {
        // Data de hoje
        var hoje = new Date();
        var dia = hoje.getDate();
        var mes = hoje.getMonth() + 1;
        var ano = hoje.getFullYear();
        // Adcionando um 0, se caso o numero for menor que 9
        var nmes = mes <= 9 ? "0" + mes : mes
        var ndia = dia <= 9 ? "0" + dia : dia
        //Concatenando dados em uma String Formatada. 
        var dateString = `${ano}/${nmes}/${ndia}`
        //Retornando o valor da função. 
        return dateString;
    }


    const values = {

        VARMS: data.VARMS,
        VBRMS: data.VBRMS,
        VCRMS: data.VCRMS,

        IARMS: data.IARMS,
        IBRMS: data.IBRMS,
        ICRMS: data.ICRMS,

        PTA: r1,
        PTB: r2,
        PTC: r3,

        FPA: data.FPA,
        FPB: data.FPB,
        FPC: data.FPC,

        KWHA: kwha,
        KWHB: kwhb,
        KWHC: kwhc,
        KWHT: kwht,

        data: hoje(),

        createdAt: 01 / 15 / 20,
        updatedAt: 01 / 15 / 20
    }
    return values
}


module.exports = { model }
