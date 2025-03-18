function generateGrade(marks){
    if (marks > 79) 
        return 'A';
    
    else if (marks >= 60) 
        return 'B';
    
    else if (marks >= 50) 
        return 'C';
    
    else if (marks >= 40) 
        return 'D';
    
    else 
        return 'E';
}

const marks = prompt("Enter student marks :");
console.log("Grade: ${generateGrade(marks)}");
