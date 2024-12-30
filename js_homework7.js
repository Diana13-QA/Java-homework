// Масив об'єктів
var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru"
    },
];


var emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;


var trustedEmails = arr
    .filter(function(item) {
        return emailRegex.test(item.email);
    })
    .map(function(item) {
        return item.email;
    });

console.log(trustedEmails); // Виведе масив довірених email