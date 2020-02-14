const main = () => {
    let map = new Map();

    for (let a = 1; a < 1001; a++) {
        for (let b = a; b < 1001; b++) {

            const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
            const perimeter = (a + b + c);

            if (perimeter > 1000) {
                break;
            }

            if (c % 1 === 0) {
                map.set(perimeter, (map.get(perimeter) ? map.get(perimeter) + 1 : 1));
            }
        }
    }

    // Sorting by the incremented value then returning the highest
    return new Map([...map.entries()].sort((a, b) => b[1] - a[1]))
        .entries()
        .next()
        .value[0];
};

console.log(main());
