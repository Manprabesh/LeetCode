/**
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that
 * the number could represent. Return the answer in any order.
 */


/**
 *Unoptimize
 */

let letterComnination = (digit) => {

    if(digit==""){
        return []
    }
    return helper("", digit)

}

function helper(p, up) {
    const keyboard = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    if (up == "") {
        let arr = []
        arr.push(p)
        return arr;
    }

    let digit = Number(up.charAt(0))
    let arr = [];

    const range = keyboard[digit].length
    for (let i = 0; i < range; i++) {

        const val = keyboard[digit][i]
        const data = helper(p + val, up.substring(1))
        arr.push(...data)
    }

    return [...arr]

}

let result = letterComnination("89")
console.log(result)