function resultFromN(event) {
    event.preventDefault();

    let input = Number(document.getElementById('input').value);

    let factorial = 1;
    for (let i = 1; i <= input; i++) {
        factorial *= i;
    }

    let deret = 0;
    for (let i = 1; i <= input; i++) {
        deret += i;
    } 

    document.getElementById('result').innerHTML = input;
    document.getElementById('factorial').innerHTML = factorial;
    document.getElementById('deret').innerHTML = deret;
}