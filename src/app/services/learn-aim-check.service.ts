import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {ActionCompetence, ActionCompetenceResponse} from '../interfaces/action-competence';
import {HttpClient} from '@angular/common/http';
import {LearnAim, LearnAimResponse} from '../interfaces/learn-aim';
import {LearnAimCheck, LearnAimCheckResponse} from '../interfaces/learn-aim-check';
import {Tag, TagResponse} from '../interfaces/tag';

/**
 * @name LearnAimCheckService
 * @description This service is used for different learn aim check tasks.
 */
@Injectable({
  providedIn: 'root'
})
export class LearnAimCheckService {

  constructor(private http: HttpClient) {
  }

  /**
   * @name mapActionCompetenceFromBackend
   * @description This function is used to map the action competence from the backend to the frontend interface.
   * @param data - The action competence response from the backend.
   * @returns The action competence.
   * @private
   */
  private mapActionCompetenceFromBackend(data: ActionCompetenceResponse): ActionCompetence {
    return {
      id: data.id,
      title: data.title,
      learnAim: data.learn_aim.map((la: LearnAimResponse) => this.mapLearnAimFromBackend(la)),
      identification: data.identification,
      description: data.description,
      associatedModulesVocationalSchool: data.associated_modules_vocational_school,
      associatedModulesOverboardCourse: data.associated_modules_overboard_course
    };
  }

  /**
   * @name mapLearnAimFromBackend
   * @description This function is used to map the learn aim from the backend to the frontend interface.
   * @param data - The learn aim response from the backend.
   * @private
   * @returns The learn aim.
   */
  private mapLearnAimFromBackend(data: LearnAimResponse): LearnAim {
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      taxonomyLevel: data.taxonomy_level,
      exampleText: data.example_text,
      tags: data.tags.map((tag: TagResponse) => this.mapLearnAimTagsFromBackend(tag)),
      checked: data.checked.map((lac: LearnAimCheckResponse) => this.mapLearnAimCheckFromBackend(lac))
    };
  }

  /**
   * @name mapLearnAimCheckFromBackend
   * @description This function is used to map the learn aim check from the backend to the frontend interface.
   * @param data - The learn aim check response from the backend.
   * @private
   * @returns The learn aim check.
   */
  private mapLearnAimCheckFromBackend(data: LearnAimCheckResponse): LearnAimCheck {
    return {
      id: data.id,
      approvedBy: data.approved_by,
      isApproved: data.is_approved,
      comment: data.comment,
      semester: data.semester,
      closeStage: data.close_stage,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
      assignedTrainee: data.assigned_trainee
    };
  }

  /**
   * @name mapLearnAimTagsFromBackend
   * @description This function is used to map the learn aim tags from the backend to the frontend interface.
   * @param data - The tag response from the backend.
   * @private
   * @returns The tag.
   */
  private mapLearnAimTagsFromBackend(data: TagResponse): Tag {
    return {
      id: data.id,
      tagName: data.tag_name
    };
  }

  /**
   * @name getStudentLearnAimList
   * @description This function is used to get the learn aims from the backend.
   */
  getStudentLearnAimList(): Observable<ActionCompetence[]> {
    return this.http.get<ActionCompetence[]>('http://localhost:8000/api/v1/learn-check')
      .pipe(
        map((data: ActionCompetence[]) => {
          const actionCompetences: ActionCompetence[] = [];
          data.forEach((ac: ActionCompetence) => {
            actionCompetences.push(this.mapActionCompetenceFromBackend(ac as unknown as ActionCompetenceResponse));
          });
          return actionCompetences;
        })
      );
  }
}
