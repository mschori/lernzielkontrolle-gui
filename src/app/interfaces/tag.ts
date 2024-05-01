/**
 * @name Tag
 * @description This interface is used to define the structure of a tag.
 */
export interface Tag {
  id: number;
  tagName: string;
}

/**
 * @name TagResponse
 * @description This interface is used to define the structure of a tag response from the backend.
 */
export interface TagResponse {
  id: number;
  tag_name: string;
}
