document.addEventListener('DOMContentLoaded', function () {
    // JavaScript code here
    var calculateBtn = document.getElementById('calculateBtn');
    var resetBtn = document.getElementById('resetBtn');

    calculateBtn.addEventListener('click', function () {
        calculateArea();
    });

    resetBtn.addEventListener('click', function () {
        resetForm();
    });

    function calculateArea() {
        var base = parseFloat(document.getElementById('base').value);
        var height = parseFloat(document.getElementById('height').value);

        if (!isNaN(base) && !isNaN(height)) {
            var area = 0.5 * base * height;
            document.getElementById('result').innerHTML = 'Luas Segitiga: ' + area.toFixed(2);
        } else {
            document.getElementById('result').innerHTML = 'Masukkan alas dan tinggi dengan benar.';
        }
    }

    function resetForm() {
        document.getElementById('base').value = '';
        document.getElementById('height').value = '';
        document.getElementById('result').innerHTML = '';
    }
});
