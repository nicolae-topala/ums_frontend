export interface getCurriculum {
  code: string;
  name: string;
  category: string;
  semesterNumber: number;
  yearNumber: number;
  weeksNumber: number;
  ects: number;
  examinationForm: string;
  minimumGrade: string;
}

export interface getGrades {
  courses_id: number;
  courses_code: string;
  courses_name: string;
  courses_type: string;
  courses_category: string;
  courses_gradingSystem: string;
  courses_semesterNumber: number;
  courses_yearNumber: number;
  courses_weeksNumber: number;
  courses_ects: number;
  courses_examinationForm: string;
  courses_minimumGrade: number;
  courses_studyFieldId: number;
  finalGrade: number;
}
