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
   }
}