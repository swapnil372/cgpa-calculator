document.querySelector("form").addEventListener('submit', (event) => {
    event.preventDefault();


    let sum = 0;
    const arr = document.querySelectorAll(".grade");
    arr.forEach(element => {
        sum = sum + (Number(element.value) * Number(element.parentElement.parentElement.getAttribute('class')));
    });
    document.querySelector(".result").innerHTML = (sum / 19.75).toFixed(4);
});
