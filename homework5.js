var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн"
};

services['Розбити скло'] = "200 грн";


services.price = function() {
  return Object.values(this)
    .filter(value => typeof value === 'string' && value.includes('грн'))
    .reduce((total, price) => total + parseFloat(price), 0); 
};


services.minPrice = function() {
  return Math.min(
    ...Object.values(this)
      .filter(value => typeof value === 'string' && value.includes('грн')) 
      .map(price => parseFloat(price)) 
  );
};

services.maxPrice = function() {
  return Math.max(
    ...Object.values(this)
      .filter(value => typeof value === 'string' && value.includes('грн')) 
      .map(price => parseFloat(price)) 
  );
};
//Результат
console.log("Загальна вартість послуг: " + services.price() + " грн"); // Очікуваний результат: 440 грн (60 + 80 + 100 + 200)
console.log("Мінімальна ціна послуги: " + services.minPrice() + " грн"); // Очікуваний результат: 60 грн
console.log("Максимальна ціна послуги: " + services.maxPrice() + " грн"); // Очікуваний результат: 200 грн