import { Image } from "./image.model";

export interface Skill {
    id?: string;
    name?: string;
    percent_of_progress?: number
    logo?: Image;
}