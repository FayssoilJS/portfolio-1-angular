import { Skill } from "./skill.model";

export interface Owner {
    fullName: string;
    skills: Skill[]
}