function attachGradientEvents() {
    let gradient = document.getElementById('gradient')
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradintOut);

    function gradientMove(event) {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = power + '%'
    }

    function gradintOut(event) {
        document.getElementById('result').textContent = ''
    }

}