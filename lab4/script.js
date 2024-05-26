$(document).ready(function () {
    $("#electricityForm").submit(function (e) {
        e.preventDefault();
        var units = $("#units").val();
        
        fetch("http://localhost/data.php")
            .then(response => response.json())
            .then(response => {
                var cost = calculateBill(units, response);
                $("#result").html("<h4>Your Electricity Bill: Rs. " + cost.toFixed(2) + "</h4>");
            })
            .catch(error => console.error('Error:', error));
    });
});

function calculateBill(units, slabs) {
    var totalCost = 0;

    for (var i = 0; i < slabs.length; i++) {
        var start = parseInt(slabs[i].start);
        var end = parseInt(slabs[i].end);
        var rate = parseFloat(slabs[i].rate);

        if (units > 0) {
            if (units > (end - start)) {
                totalCost += (end - start) * rate;
                units -= (end - start);
            } else {
                totalCost += units * rate;
                break;
            }
        } else {
            break;
        }
    }

    return totalCost;
}