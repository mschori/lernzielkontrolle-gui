/**
 * @name LearnAimCheck
 * @description This interface is used to define the structure of a check learn aim.
 */
export interface LearnAimCheck {
  id: number;
  approvedBy: number | null;
  isApproved: boolean;
  comment: string;
  semester: number;
  closeStage: number;
  createdAt: string;
  updatedAt: string;
  assignedTrainee: number;
}

/**
 * @name LearnAimCheckResponse
 * @description This interface is used to define the structure of a check learn aim response from the backend.
 */
export interface LearnAimCheckResponse {
  id: number;
  approved_by: number | null;
  is_approved: boolean;
  comment: string;
  semester: number;
  close_stage: number;
  created_at: string;
  updated_at: string;
  assigned_trainee: number;
}
