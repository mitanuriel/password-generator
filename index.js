document.addEventListener("DOMContentLoaded", () => {
    const randomizerButton = document.getElementById("randomizer");
    const passwordBoxOne = document.getElementById("password-1");
    const passwordBoxTwo = document.getElementById("password-2");

    randomizerButton.addEventListener("click", generatePassword);

    function generatePassword() {
        const characters = [
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
            "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=",
            "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
        ];
        const length = 15;
        let password = "";

        while (password.length < length) {
            password += characters[Math.floor(Math.random() * characters.length)];
        }

        passwordBoxOne.value = password;
        passwordBoxTwo.value = password;
    }
});

console.log(passwordBoxOne);