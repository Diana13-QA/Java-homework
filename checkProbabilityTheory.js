

function checkProbabilityTheory(count) {
    // Ініціалізація змінних для підрахунку парних та непарних чисел
    let evenCount = 0;
    let oddCount = 0;

    
    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100; // Генерація числа від 100 до 1000 включно

        if (randomNumber % 2 === 0) {
            evenCount++; 
        } else {
            oddCount++; 
        }
    }

   
    let evenPercentage = (evenCount / count * 100).toFixed(2); 
    let oddPercentage = (oddCount / count * 100).toFixed(2);   
    // Вивід у консоль
    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Непарних чисел: ${oddCount}`);
    console.log(`Відсоток парних чисел: ${evenPercentage}%`);
    console.log(`Відсоток непарних чисел: ${oddPercentage}%`);