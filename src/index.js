module.exports = function reverse (n) {
        n = n.toString();
        a = n.length;
    if (a === 3) {
        return n.split("").reverse().join("");
            } else  {
         let b = n.slice(1,4);

             return b.split("").reverse().join("");
    }
        }


