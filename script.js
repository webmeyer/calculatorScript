var calculateSalary = function (filthSalary) {
    var cleanSalary;
    if (filthSalary >= 100000) {
      cleanSalary = Math.round(filthSalary - (filthSalary * 0.45));
      } else {
        cleanSalary = Math.round(filthSalary - (filthSalary * 0.35));
        }
        return cleanSalary;
   };
   
calculateSalary(100000)