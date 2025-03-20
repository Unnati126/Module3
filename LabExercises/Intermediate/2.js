//using if statement
function truncate(str, max) {
    if (str.length > max) {
        return str.slice(0, max) + '...';
    }
}

//using conditional operator
const truncate = (str, max) => str.length > max ? str.slice(0, max) + '...' : str;


console.log(truncate('This text will be truncated if it is too long', 25)); 