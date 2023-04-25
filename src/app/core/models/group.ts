import {Student} from "./student";
import {Teacher} from "./teacher";

export interface Group {
  id: number;
  classNumber: number;
  classLetter: string;
  teacher: Teacher;
  listStudents: Student[];
}
