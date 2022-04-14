export interface allData {
  name: string;
  value: string;
}

export interface Props {
  className?: string;
  caption?: string;
  tableData?: allData[];
  errorMessage?: string;
}
