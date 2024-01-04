
const input = document.querySelector('#inputID')
const gettingInput = (x) => {
    if(x === '='){
        input.innerHTML = eval(input.innerHTML).toFixed(2);
    }
    else if(x === 'C'){
        input.innerHTML = '';
    }
    else if(x === 'remove'){
        input.innerHTML = input.innerHTML.slice(0,input.innerHTML.length -1)
    }
    else if(x === '%'){
        const nonNumericPart = input.innerHTML.replace(/\d+/g, '');
        const frontValue = parseFloat(input.innerHTML);
        const backValue =  parseFloat(input.innerHTML.split(nonNumericPart)[1])/100;
        const result = frontValue * backValue;
        input.innerHTML = result.toFixed(2)
    }
    else{
        input.innerHTML += x;
    }
}
