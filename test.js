const sumStrings = (a, b) => {
    let retArray = [];

    let lenghtDifference = Math.abs(a.length - b.length);

    //generating zero array
    let zeroArray = [];
    for (var i = 0; i < lenghtDifference; i++) {
        zeroArray.push('0');
    }

    //adding zero array to shorter string
    a = a.split('');
    b = b.split('');
    if (a.length <= b.length) {
        a.splice(0, 0, ...zeroArray);
    } else {
        b.splice(0, 0, ...zeroArray);
    }

    //adding array elements
    let carry = 0;
    for (var i = a.length - 1; i >= 0; i--) {
        let sum = Number(a[i]) + Number(b[i]) + carry;
        if (sum >= 10) {
            retArray.push(sum - 10);
            carry = 1;
        } else {
            retArray.push(sum);
            carry = 0;
        }
    }
    //if carry remains
    if (carry) {
        retArray.push(carry);
        carry = 0;
    }

    //finding first non-zero index and remove leading zeros;
    retArray = retArray.reverse();
    let nonZeroIndex = 0;
    for (var i = 0; i < retArray.length; i++) {
        if (retArray[i] > 0) {
            nonZeroIndex = i;
            break;
        }
    }
    retArray = retArray.slice(nonZeroIndex, retArray.length);

    return retArray.join('');
}

console.log(sumStrings('50095301248058391139327916261', '81055900096023504197206408605'));
