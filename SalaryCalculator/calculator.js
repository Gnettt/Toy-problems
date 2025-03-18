function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // NSSF Deductions (6% of gross salary, capped at KES 1,080)
    const nssfDeduction = Math.min(grossSalary * 0.06, 1080);

    // NHIF Deductions (2024 NHIF rates)
    let nhifDeduction;
    if (grossSalary <= 5999) nhifDeduction = 150;
    else if (grossSalary <= 7999) nhifDeduction = 300;
    else if (grossSalary <= 11999) nhifDeduction = 400;
    else if (grossSalary <= 14999) nhifDeduction = 500;
    else if (grossSalary <= 19999) nhifDeduction = 600;
    else if (grossSalary <= 24999) nhifDeduction = 750;
    else if (grossSalary <= 29999) nhifDeduction = 850;
    else if (grossSalary <= 34999) nhifDeduction = 900;
    else if (grossSalary <= 39999) nhifDeduction = 950;
    else if (grossSalary <= 44999) nhifDeduction = 1000;
    else if (grossSalary <= 49999) nhifDeduction = 1100;
    else if (grossSalary <= 59999) nhifDeduction = 1200;
    else if (grossSalary <= 69999) nhifDeduction = 1300;
    else if (grossSalary <= 79999) nhifDeduction = 1400;
    else if (grossSalary <= 89999) nhifDeduction = 1500;
    else if (grossSalary <= 99999) nhifDeduction = 1600;
    else nhifDeduction = 1700;

    // PAYE (Tax) Calculation;; Taxable Income (Gross Salary - NSSF)
    let taxableIncome = grossSalary - nssfDeduction;
    let paye = 0;

    if (taxableIncome <= 24000) {
        paye = taxableIncome * 0.1; // 10%
    } else if (taxableIncome <= 32333) {
        paye = (24000 * 0.1) + ((taxableIncome - 24000) * 0.25); // 25% for excess
    } else {
        paye = (24000 * 0.1) + (8333 * 0.25) + ((taxableIncome - 32333) * 0.30); // 30% for excess
    }

    // Subtract Personal Relief (KES 2,400)
    //     paye = Math.max(paye - 2400, 0);

    // Net Salary
    const netSalary = grossSalary - (nssfDeduction + nhifDeduction + paye);

    return {
        grossSalary: grossSalary.toFixed(2),
        nssfDeduction: nssfDeduction.toFixed(2),
        nhifDeduction: nhifDeduction.toFixed(2),
        paye: paye.toFixed(2),
        netSalary: netSalary.toFixed(2)
    };
}