// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var ans = {};
    if (currency > 10000) {
        ans['error'] = "You are rich, my friend! We don't have so much coins for exchange"
        return ans;
    }

var ostatok = currency%50;
var count = Math.floor(currency/50);
ans['H'] = count
if (ostatok == 0) {
    return ans;
};
count = Math.floor(ostatok/25);
ans['Q'] = count;
ostatok -= count*25;
if (ostatok == 0) {
    return ans;
};
count = Math.floor(ostatok/10);
ans['D'] = count;
ostatok -= count*10;
if (ostatok == 0) {
    return ans;
};
count = Math.floor(ostatok/5);
ans['N'] = count;
ostatok -= count*5;
if (ostatok == 0) {
    return ans;
};

ans['P'] = ostatok;
return ans;
};