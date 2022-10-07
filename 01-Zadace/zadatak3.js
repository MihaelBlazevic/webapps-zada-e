let cal = (broj) => {
    let sati = broj / 60
    let minute = broj % 60
    console.log(`Ovaj broj ima ${sati} sati i ${minute} minuta`)
}

cal(120)