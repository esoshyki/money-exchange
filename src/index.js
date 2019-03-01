// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var counter = function(currentostatok, value) {
        
        if (currentostatok == 0) { return false }
        var arr = [];
        var coincount = Math.floor(currentostatok/value);
        var ostatok = currentostatok%value;
        if (coincount == 0 && ostatok == 0) {
            return false
        }
        else {
            if (coincount == 0) { 
                arr.push(coincount, ostatok)
                return arr}
        
            else {
                arr.push(coincount, ostatok);
                return arr;                    
                }
            }
    };

    var ans = {};
    if (currency > 10000) {
        ans['error'] = "You are rich, my friend! We don't have so much coins for exchange"
        return ans;
    }
    if (currency < 0) { 
        return ans;   
    }
    var items = ['H', 'Q', 'D', 'N', 'P'];
    var value = [50, 25, 10, 5, 1];
    var ostatok = currency;
    for (i in items) {
        var arrr = counter(ostatok, value[i]);
        if (arrr) {
            ostatok = arrr[1];
            var item = items[i];
            if (arrr[0] != 0) {
            ans[item] = arrr[0];
            }
        }
        else { break };
    
    }
    return ans;
};