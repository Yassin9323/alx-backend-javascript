#!/usr/bin/node

export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  // Ensure that both inputs are arrays
  if (Array.isArray(students) && Array.isArray(newGrades)) {
    return students
      .filter((student) => student.location === city)
      .map((student) => {
        // Use find to directly get the matching grade
        const gradeObj = newGrades.find((grade) => grade.studentId === student.id) || defaultGrade;

        return {
          ...student, // Spread existing student properties
          grade: gradeObj.grade, // Assign found grade or default
        };
      });
  }
  return [];
}
