var n = "Input Text : "

function ascii_to_decimal(str) {
    var arr1 = [];
    for (var n = 0, l = str.length; n < l; n++) {
        var dec = Number(str.charCodeAt(n)).toString(10);
        arr1.push(dec);
    }
    document.getElementById("decimal").innerHTML = arr1.join('');
}

function ascii_to_hexa(str) {
    var arr1 = [];
    for (var n = 0, l = str.length; n < l; n++) {
        var hex = Number(str.charCodeAt(n)).toString(16);
        arr1.push(hex);
    }
    document.getElementById("hexa").innerHTML = arr1.join('');
}

function ascii_to_octa(str) {
    var arr1 = [];
    for (var n = 0, l = str.length; n < l; n++) {
        var hex = Number(str.charCodeAt(n)).toString(8);
        arr1.push(hex);
    }
    document.getElementById("octa").innerHTML = arr1.join('');
}

function ascii_to_binnary(str) {
    var arr1 = [];
    for (var n = 0, l = str.length; n < l; n++) {
        var hex = Number(str.charCodeAt(n)).toString(2);
        arr1.push(hex);
    }
    document.getElementById("binnary").innerHTML = arr1.join('');
}

function convert(str) {
    ascii_to_decimal(document.getElementById("input").value);
    ascii_to_hexa(document.getElementById("input").value);
    ascii_to_octa(document.getElementById("input").value);
    ascii_to_binnary(document.getElementById("input").value);
}