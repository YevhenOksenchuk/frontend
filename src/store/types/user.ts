import { Roles } from "../../common/constants/roles";

export interface UserState {
  id: null;
  role: null | Roles.ADMIN | Roles.TEACHER | Roles.STUDENT;
  firstName: string;
  lastName: string;
  isOnline: boolean;
}
