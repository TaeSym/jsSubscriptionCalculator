var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var results = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

subTypeElement.addEventListener("change", function (e) {
    subType = e.target.value;
    //console.log(subType);
    updateSubscriptionDiv()
});

subDurationElement.addEventListener("change", function (e) {
    subDuration = Number(e.target.value);
    //console.log(subDuration);
    updateSubscriptionDiv()
});

var updateSubscriptionDiv = function () {
    var monthlyCost = 5;
    if (subType === "standard") {
        var monthlyCost = 7;
    } else if (subType === "premium") {
        var monthlyCost = 10;
    } 

    var total = subDuration * monthlyCost;

    results.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`
}
