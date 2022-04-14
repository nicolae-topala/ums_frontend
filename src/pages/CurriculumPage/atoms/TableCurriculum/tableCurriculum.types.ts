import { getCurriculum } from 'libs/http/Curriculum/curriculum.types';

export interface headers {
  key: string;
  label: string;
}

export interface tableData {
  headers: headers[];
  values: getCurriculum[];
}

export interface Props {
  className?: string;
  caption?: string;
  tableData?: tableData;
  errorMessage?: string;
}
