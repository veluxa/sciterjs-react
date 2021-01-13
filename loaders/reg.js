const percentRge = /\b(\d+(\.\d+)?)(?:o+|x+)\b/g;

const styleReg = {
    marginTop: /\bmarginTop(?:\s+)?:(?:\s+)?(\d*(o+|x+))/g,
    marginRight: /\bmarginRight(?:\s+)?:(?:\s+)?(\d*(o+|x+))/g,
    marginBottom: /\bmarginBottom(?:\s+)?:(?:\s+)?(\d*(o+|x+))/g,
    marginLeft: /\bmarginLeft(?:\s+)?:(?:\s+)?(\d*(o+|x+))/g,
    paddingTop: /\bpaddingTop(?:\s+)?:(?:\s+)?(\d*(o+|x+))/g,
    paddingRight: /\bpaddingRight(?:\s+)?:(?:\s+)?(\d*(o+|x+))/g,
    paddingBottom: /\bpaddingBottom(?:\s+)?:(?:\s+)?(\d*(o+|x+))/g,
    paddingLeft: /\bpaddingLeft(?:\s+)?:(?:\s+)?(\d*(o+|x+))/g,
    width: /\bwidth(?:\s+)?:(?:\s+)?(\d*(o+|x+))/g,
    height: /\bheight(?:\s+)?:(?:\s+)?(\d*(o+|x+))/g,
}

const cssReg = {
    "margin-top": /\bmargin-top(?:\s+)?:(?:\s+)?(\d*(o+|x+))/g,
    "margin-right": /\bmargin-right(?:\s+)?:(?:\s+)?(\d*(o+|x+))/g,
    "margin-bottom": /\bmargin-bottom(?:\s+)?:(?:\s+)?(\d*(o+|x+))/g,
    "margin-left": /\bmargin-left(?:\s+)?:(?:\s+)?(\d*(o+|x+))/g,
    "padding-top": /\bpadding-top(?:\s+)?:(?:\s+)?(\d*(o+|x+))/g,
    "padding-right": /\bpadding-right(?:\s+)?:(?:\s+)?(\d*(o+|x+))/g,
    "padding-bottom": /\bpadding-bottom(?:\s+)?:(?:\s+)?(\d*(o+|x+))/g,
    "padding-left": /\bpadding-left(?:\s+)?:(?:\s+)?(\d*(o+|x+))/g,
    "width": /\bwidth(?:\s+)?:(?:\s+)?(\d*(o+|x+))/g,
    "height": /\bheight(?:\s+)?:(?:\s+)?(\d*(o+|x+))/g,
}

const xReg = /(x)/g;
const oReg = /(o)/g

module.exports = {
    percentRge,
    styleReg,
    cssReg,
    xReg,
    oReg
}