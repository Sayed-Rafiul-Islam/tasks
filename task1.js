const answer = (data, n) => {
    if (typeof (data) === 'object') {
        if (data.length !== undefined) {
            if (typeof (n) === 'number' && n >= 0) {
                const result = [];
                for (const d of data) {
                    let count = 0;
                    for (const dd of data) {
                        if (d === dd) {
                            count = count + 1;
                        }
                    }
                    if (count <= n && !result.includes(d)) {
                        result.push(d)
                    }
                }
                console.log(result)
            }
            else {
                console.log("Number must be a valid positive integer")
            }
        }
        else {
            console.log('Insert an array, not an object')
        }
    }
    else {
        console.log('Int list should inserted as an array')
    }
}

answer([2, 2, 2, 2, 33, 33, 33, 32, 32, 32, 32, 32, 2, 4, 4, 7, 7, 7, 8], 3);
