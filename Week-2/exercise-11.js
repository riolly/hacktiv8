function balikKata(kata) {
    var str = "";
    // membaca setiap character mulai dari yang paling belakang dengan index.
    for (var i = 1; i <= kata.length; i++){
        // menambahkan setiap character yang dibaca pada 'str'
        str += kata[kata.length - i]
    }
    // mengirimkan hasil pembalikan kata yang disimpan pada 'str'
    return str;
  }
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS