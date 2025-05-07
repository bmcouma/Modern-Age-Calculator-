const btnE1 = document.getElementById('btn');
const resetBtn = document.getElementById('reset');
const toggleThemeBtn = document.getElementById('toggle-theme');

const birthday = document.getElementById('birthday');
const resultElements = document.getElementById("result");

function calculateAge() {
    const birthdayValue = birthday.value;
    if (birthdayValue === "") {
        alert("Please enter your valid birthday");
        return;
    }

    const birthdayDate = new Date(birthdayValue);
    const currentDate = new Date();

    if (birthdayDate > currentDate) {
        alert("The date cannot be in the future!");
        return;
    }

    const { years, months, days } = getAge(birthdayValue);
    let ageGroup = "";

    if (years < 13) {
        ageGroup = "You are a child.";
    } else if (years < 20) {
        ageGroup = "You are a teenager.";
    } else if (years < 60) {
        ageGroup = "You are an adult.";
    } else {
        ageGroup = "You are a senior.";
    }

    resultElements.innerText = `Your age is ${years} ${years > 1 ? "years" : "year"}, ${months} ${months > 1 ? "months" : "month"}, and ${days} ${days > 1 ? "days" : "day"} old. ${ageGroup}`;
    resultElements.classList.add("show");
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);

    let years = currentDate.getFullYear() - birthdayDate.getFullYear();
    let months = currentDate.getMonth() - birthdayDate.getMonth();
    let days = currentDate.getDate() - birthdayDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}

btnE1.addEventListener("click", calculateAge);

resetBtn.addEventListener("click", () => {
    birthday.value = "";
    resultElements.innerText = "";
    resultElements.classList.remove("show");
});

toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.querySelector(".container").classList.toggle("dark");
    btnE1.classList.toggle("dark");
    resetBtn.classList.toggle("dark");
    toggleThemeBtn.classList.toggle("dark");
});