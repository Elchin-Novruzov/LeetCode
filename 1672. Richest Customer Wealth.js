/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
     let maxWealth = 0;
    for (let i = 0; i < accounts.length; i++) {
        let currentWealth = accounts[i].reduce((sum, current) => sum + current, 0);
        if (currentWealth > maxWealth) {
            maxWealth = currentWealth;
        }
    }
    return maxWealth;
};
