function verify(str) {
    let stack = [];
        
    for (let i = 0; i < str.length; i++) {
        let c = str.substring(i, i + 1);

        switch (c) {
            case '(':
                stack.push(')');
                break;
            case '[':
                stack.push(']');
                break;
            case '<':
                stack.push('>');
                break;

            case ')':
            case ']':
            case '>':
                if (stack.pop() !== c) 
                    return 0;
        }
    }
    
    return stack.length === 0 ? 1 : 0;
}


console.log(verify("---(++++)----") === 1);
console.log(verify("") === 1);
console.log(verify("before ( middle []) after ") === 1);
console.log(verify(") (") === 0);
console.log(verify("<(   >)") === 0);
console.log(verify("(  [  <>  ()  ]  <>  )") === 1);
console.log(verify("   (      [)") === 0);