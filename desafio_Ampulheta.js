 console.log("Calculo da Ampulheta")

console.log("Favor, digite o valor de 'n': ")
process.stdin.on('data', data => {
    const n = data
    t = n-2

    for (i = 0; i < n; i++) {
        process.stdout.write("#")
        for (j = 0; j < t; j++) {

        if(i < 2 || i == n-1){
                process.stdout.write("#")
        }else{

            if(i < n/2 ){
                    if(j < i-1 || j > t-i){
                        process.stdout.write(" ")
                    }else{
                        process.stdout.write("#")
                    }
                }else {
                    if(j > i-1 || j < t-i){
                        process.stdout.write(" ")
                    }else{                    
                        if(i-j >= 2){
                            if (j == t-i){
                                process.stdout.write("#")
                            }else{
                                process.stdout.write(" ")
                            }
                        }else{
                            process.stdout.write("#")
                        }
                    }
                }

        }

        }
        process.stdout.write("#")
        console.log('')
    }

    process.exit()
})

