import {Group} from './group';
import {Authtokens} from './authtokens';

/**
 * @name User
 * @description This interface describes the structure of a User object.
 */
export interface User {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  groups: Group[];
  tokens: Authtokens;
  isLoggedIn: boolean;
}
