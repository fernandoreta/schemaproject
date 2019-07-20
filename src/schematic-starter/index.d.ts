import { Rule } from "@angular-devkit/schematics";
interface AddFilesInterface {
    name: string;
    browserType: string;
    selector: string;
    style: string;
}
export declare function schematicStarter(_options: AddFilesInterface): Rule;
export {};
