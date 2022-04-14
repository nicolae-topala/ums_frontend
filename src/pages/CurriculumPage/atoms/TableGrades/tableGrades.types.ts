import { getGrades } from 'libs/http/Curriculum/grades.types';

export interface headers {
  key: string;
  label: string;
}

export interface tableData {
  headers: headers[];
  values: getGrades[];
}

export interface Props {
  className?: string;
  caption?: string;
  tableData?: tableData;
  errorMessage?: string;
  large?: boolean;
}
