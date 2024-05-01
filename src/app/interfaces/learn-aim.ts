import {LearnAimCheck, LearnAimCheckResponse} from './learn-aim-check';
import {Tag, TagResponse} from './tag';

/**
 * @name LearnAim
 * @description This interface is used to define the structure of a learn aim.
 */
export interface LearnAim {
  id: number;
  name: string;
  description: string;
  taxonomyLevel: number;
  exampleText: string;
  tags: Tag[];
  checked: LearnAimCheck[];
}

/**
 * @name LearnAimResponse
 * @description This interface is used to define the structure of a learn aim response from the backend.
 */
export interface LearnAimResponse {
  id: number;
  name: string;
  description: string;
  taxonomy_level: number;
  example_text: string;
  tags: TagResponse[];
  checked: LearnAimCheckResponse[];
}
