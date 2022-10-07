let provjera = (broj) => {
    if (broj <= 1000 && broj >= 0) {
        console.log("Broj je unutar zadanih granica")
        let umn = 1;
        for (let i = 7; i <= broj; i += 7) {
            umn *= i

        }
        console.log(umn)
    }
    else {
        console.log("Broj nije unutar zadanih granica")
    }
}

provjera(23)