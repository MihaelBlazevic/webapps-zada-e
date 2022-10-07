let provjera = (broj) => {
    if (broj <= 150000 && broj >= 100) {
        console.log("broj je unutar granica")
    } else {
        console.log("broj nije unutar granica")
    }
}

provjera(150)
provjera(99)