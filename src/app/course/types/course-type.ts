import { type } from "os";
import { ModuleType } from "./module-type";

export type CourseType={
    id?:number;
    title:string;
    summary:string;
    createdAt:Date;
    updatedAt:Date;
    objective:string;
    modules:Array<ModuleType>;
}
