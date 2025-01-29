const button = document.getElementById("my-button");

const alertMessage = () => {
    alert("You clicked me!");
};

button.addEventListener("click", alertMessage);