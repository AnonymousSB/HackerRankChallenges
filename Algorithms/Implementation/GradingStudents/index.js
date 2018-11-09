function gradingStudents(grades)
{
    grades.forEach((grade, i) =>
    {
        const nextMultiple = Math.ceil(grade/5) * 5;
        const difference = nextMultiple - grade;
        if (nextMultiple >= 40 && difference < 3)
        {
            grades[i] = nextMultiple;
        }
    });
    return grades;
}

gradingStudents([73, 67, 38, 33]);

// [75, 67, 40, 33]