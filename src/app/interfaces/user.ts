import {Group} from './group';
import {Authtokens} from './authtokens';

export interface User {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  groups: Group[];
  tokens: Authtokens;
  isLoggedIn: boolean;
}
