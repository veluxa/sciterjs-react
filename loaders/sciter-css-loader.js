const regRules = require('./reg');
const _ = require('lodash');

module.exports = function (source) {

    if (this.cacheable) {
        this.cacheable();
    }
    let backUp = source;

    if (regRules.percentRge.test(backUp)) {
        backUp = backUp.replace(regRules.percentRge, percent => {
            return percent;
        });
    }

    _.each(regRules.styleReg, (reg, styleName) => {
        if (reg.test(backUp)) {
            backUp = backUp.replace(reg, val => {
                return val;
            });
        }
    });

    _.each(regRules.cssReg, (reg, styleName) => {
        if (reg.test(backUp)) {
            backUp = backUp.replace(reg, val => {
                let svalue = val.replace(styleName, "").replace(":", "").trim();
                let style = svalue.replace(regRules.xReg, "*");
                style = style.replace(regRules.oReg, "%");
                return `${styleName}: ${style}`;
            });
        }
    });

    return backUp;
}
