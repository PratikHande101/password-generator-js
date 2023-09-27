let gen_pass = "";
const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()-_+={}[]|:<>,?"
const genPassBtn = document.getElementById('genPass');
const inputBox = document.getElementById('input-box');
const copyBtn = document.getElementById('copy-img');
const copiedImg = document.getElementById('copied-img');

genPassBtn.addEventListener('click', ev => {
    for (var i = 0, n = charset.length; i < 15; ++i) {
        gen_pass += charset.charAt(Math.floor(Math.random() * n));
    }
    inputBox.value = gen_pass;
    gen_pass = "";
    copyBtn.style.display = 'block';
    copiedImg.style.display = 'none';
});

copyBtn.addEventListener('click', ev => {
    navigator.clipboard.writeText(inputBox.value);
    copyBtn.style.display = 'none';
    copiedImg.style.display = 'block';
})