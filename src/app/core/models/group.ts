import {Student} from "./student";

export interface Group {
  id: number;
  classNumber: number;
  classLetter: string;
  teacherId: number;
  listStudents: Student[];
}
