export enum Resolutions {
    P144 = "P144",
    P240 = "P240",
    P360 = "P360",
    P480 = "P480",
    P720 = "P720",
    P1080 = "P1080",
    P1440 = "P1440",
    P2160 = "P2160"
}


 export type CreateVideoInputModel = {
     title: string;              // maxLength: 40
     author: string;            // maxLength: 20
     availableResolutions: Resolutions[];  // At least one resolution should be added
 };



 export type UpdateVideoInputModel = {
     title: string;              // maxLength: 40
     author: string;            // maxLength: 20
     availableResolutions: Resolutions[];  // At least one resolution should be added
     canBeDownloaded: boolean;
     minAgeRestriction: number | null; // maximum: 18  minimum: 1 null - no restriction
     publicationDate: string;   // ISO 8601 date-time format

 };



export type Video = {
    id: number;
    title: string;              // maxLength: 40
    author: string;            // maxLength: 20
    canBeDownloaded: boolean;
    minAgeRestriction: number | null; // maximum: 18  minimum: 1 null - no restriction
    createdAt: string;   // ISO 8601 date-time format
    publicationDate: string;   // ISO 8601 date-time format By default - +1 day from CreatedAt
    availableResolutions: Resolutions[];  // At least one resolution should be added
};



