//

 function arrayConverter(array) {
    let arrayConverter= {};
    let arrayS = [];
    let arrayN = [];
    let arrayB = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == "String"){
           arrayS.push(array[i]);
           arrayConverter.arrayS = arrayS;
        } else if (array[i] == "number") {
            arrayN.push(array[i]);
            arrayConverter.arrayN = arrayN;
        }else {
            arrayB.push(array[i]);
            arrayConverter.arrayB = arrayB;
        }
    }
    return arrayConverter;

 }