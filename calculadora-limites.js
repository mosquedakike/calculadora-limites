// let ImportePagado = 36.00
// let NumeroDecilmalesImportePagado = 2
// let TipoDeCambioDR = 0.045331
// let NumDecimalesTipoCambioDR = 6
// let potenciaNumeroDecilmalesImportePagado = Math.pow(NumeroDecilmalesImportePagado, -10)
// console.log(potenciaNumeroDecilmalesImportePagado);
// let potenciaNumDecimalesTipoCambioDR = Math.pow(NumDecimalesTipoCambioDR, -10)
// console.log(potenciaNumeroDecilmalesImportePagado);

let ImportePagado = 11.07
let NumeroDecilmalesImportePagado = 2
let TipoDeCambioDR = 0.0507
let NumDecimalesTipoCambioDR = 4
let potenciaNumeroDecilmalesImportePagado = Math.pow(NumeroDecilmalesImportePagado, -10)
let potenciaNumDecimalesTipoCambioDR = Math.pow(NumDecimalesTipoCambioDR, -10)

let LimiteInferior = (ImportePagado - (potenciaNumeroDecilmalesImportePagado / 2)) / (TipoDeCambioDR + (potenciaNumDecimalesTipoCambioDR / 2) - 0.0000000001)
let LimiteSuperior = (ImportePagado + (potenciaNumeroDecilmalesImportePagado / 2) - 0.0000000001) / (TipoDeCambioDR - (potenciaNumDecimalesTipoCambioDR/ 2))

console.log(`Limite Inferior: ${LimiteInferior}`);
console.log(`Limete Superior: ${LimiteSuperior}`);