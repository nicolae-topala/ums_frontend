import { getCurriculum } from 'libs/http/Curriculum/curriculum.types';

export interface dataType {
  name: string;
  value: string;
}

export interface allData {
  allData: dataType[];
}

export interface headers {
  key: string;
  label: string;
}

export interface largeTableData {
  headers: headers[];
  values: getCurriculum[];
}

export interface Props {
  className?: string;
  caption?: string;
  tableData?: allData;
  largeTableData?: largeTableData;
  errorMessage?: string;
  large?: boolean;
}
