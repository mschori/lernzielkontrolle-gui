import {LearnAim, LearnAimResponse} from './learn-aim';

/**
 * @name ActionCompetence
 * @description This interface is used to define the structure of an action competence.
 */
export interface ActionCompetence {
  id: number;
  title: string;
  learnAim: LearnAim[];
  identification: string;
  description: string;
  associatedModulesVocationalSchool: string;
  associatedModulesOverboardCourse: string;
}

/**
 * @name ActionCompetenceResponse
 * @description This interface is used to define the structure of an action competence response from the backend.
 */
export interface ActionCompetenceResponse {
  id: number;
  title: string;
  learn_aim: LearnAimResponse[];
  identification: string;
  description: string;
  associated_modules_vocational_school: string;
  associated_modules_overboard_course: string;
}
