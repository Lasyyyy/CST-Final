window.addEventListener("load", function() {
    let orderForm = document.forms.orderForm;

    for (let i = 0; i < orderForm.elements.length; i++) {
        orderForm.elements[i].addEventListener("change", calcOrder);
    }
    calcOrder();

    function calcOrder() {
    let tierValue = document.querySelector('input[name="tier"]:checked').value;
    orderForm.elements.tier.value = tierValue;
    let planValue = document.querySelector('input[name="plan"]:checked').value;
    orderForm.elements.plan.value = planValue;


    let totalCost = tierValue * planValue;

    let promo = document.getElementById("promo").value;
    if (promo == "Christmas") {
        totalCost = totalCost * 0.9;
    } 

    document.getElementById("totalCost").innerHTML = totalCost.toLocaleString("en-US", {style: "currency",currency: "USD"});


   }

});