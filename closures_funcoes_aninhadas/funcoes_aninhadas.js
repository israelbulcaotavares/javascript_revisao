function contador() {
    let count = 0;

    function increment() {
        count++;
        console.log(count);
    }

    return increment;
}

let contador1 = contador();
contador1();  
contador1(); 

let contador2 = contador();
contador2();  
