function model(data) {
    const values = {
        VARMS: data.VARMS,
        VBRMS: data.VBRMS,
        VCRMS: data.VCRMS,
        IARMS: data.IARMS,
        IBRMS: data.IBRMS,
        ICRMS: data.ICRMS,
        VABRMS: data.VABRMS,
        VBCRMS: data.VBCRMS,
        VCARMS: data.VCARMS,
        VABCTRMS: data.VABCTRMS,
        PA: data.PA,
        PB: data.PB,
        PC: data.PC,
        PT: data.PT,
        QA: data.QA,
        QB: data.QB,
        QC: data.QC,
        QT: data.QT,
        SA: data.SA,
        SB: data.SB,
        SC: data.SC,
        ST: data.ST,
        FPA: data.FPA,
        FPB: data.FPB,
        FPC: data.FPC,
        FPT: data.FPT,
        KVARHA: data.KVARHA,
        KVARHB: data.KVARHB,
        KVARHC: data.KVARHC,
        KVARHT: data.KVARHT,
        KWHA: data.KWHA,
        KWHB: data.KWHB,
        KWHC: data.KWHC,
        KWHT: data.KWHT,
        FREQ: data.FREQ,
        SERRS: data.SERRS,
        WRSSI: data.WRSSI
    }
    return values
}

module.exports = { model }
