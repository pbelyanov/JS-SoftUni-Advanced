function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.getElementsByTagName('textarea')[0].value);
      let allRestaurants = {};
      let bestAverageSalary = 0;
      let bestRestaurantName = '';

      for (let lines of input) {
         let [resturantName, workers] = lines.split(' - ');
         let indvidualWorkers = workers.split(', ')

         for (let worker of indvidualWorkers) {
            let [workerName, salary] = worker.split(' ');

            if (!allRestaurants.hasOwnProperty(resturantName)) {
               allRestaurants[resturantName] = {};
            }
            allRestaurants[resturantName][workerName] = Number(salary);
         }

         let entries = Object.entries(allRestaurants);

         for (let [name, workers] of entries) {
            let salaries = Object.values(workers);
            let totalSalariesPaid = 0;

            for (const salary of salaries) {
               totalSalariesPaid += salary;
            }

            let averageSalary = totalSalariesPaid / salaries.length;

            if (averageSalary > bestAverageSalary) {
               bestAverageSalary = averageSalary;
               bestRestaurantName = name;
            }
         }
      }

      let highestSalay = 0;
      for (let lines in allRestaurants) {
         if (lines === bestRestaurantName) {
            for (let current in allRestaurants[lines]) {
               if (highestSalay < allRestaurants[lines][current]) {
                  highestSalay = allRestaurants[lines][current]
               }
            }
         }

      }

      console.log(highestSalay);

      let result = `Name: ${bestRestaurantName} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${highestSalay}`

      document.querySelector('#bestRestaurant p').textContent = result
      let workersOrdered = Object.entries(allRestaurants[bestRestaurantName]).sort((a, b) => b[1] - a[1]);

      let workersAsString = '';
      workersOrdered.forEach(w => workersAsString += `Name: ${w[0]} With Salary: ${w[1]} `);
      document.querySelector('#workers p').textContent = workersAsString;
   }
}