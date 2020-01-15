for (let number = 1; number < 101;) {

    if(number % 3 == 0) {
        console.log("Hee");
        number++;
    }else if (number % 5 == 0) {
        console.log("Haw");
        number++;
    }else if (number % 3 == 0 && number % 5 == 0) {
        console.log("Hee Haw");
        number++;
    }else {
        console.log(number);
        number++;
    }

}