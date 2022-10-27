function cookingByNumbers(num, ...params) {

    num = Number(num);
    let result = 0;

    function chop() {
        num = num / 2
        console.log((num));

    };

    function dice() {
        num = num ** 0.5;
        console.log(num);

    };

    function spice() {
        num = num + 1;
        console.log(num);

    };

    function bake() {
        num = num * 3;
        console.log(num);

    };

    function fillet() {
        num = num * 0.8;
        console.log(num);
    }

    for (let i = 0; i < params.length; i++) {
        switch (params[i]) {
            case 'chop':
                chop(num);
                break;
            case 'dice':
                dice(num);
                break;
            case 'spice':
                spice(num);
                break;
            case 'bake':
                bake(num);
                break;
            case 'fillet':
                fillet(num);
                break;
        }
    }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')