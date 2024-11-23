function checkEligibility(){
    let age = prompt("Enter age: ");

    if (age < 18) {
        console.log("Not eligible to vote.");
    }
    else if (age >= 18 && age <= 60) {
        console.log("Eligible to vote.");
    }
    else if (age > 60) {
        console.log("Eligible to vote and eligible for senior citizen benefits.");
    }
}

checkEligibility();