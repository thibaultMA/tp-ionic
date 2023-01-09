import { Entity } from "./entity";
import { Photos } from "./photo";

export class ProfPhoto extends Entity<ProfPhoto> implements Photos  {
    constructor(
        public filePath: string,
        public webviewPath: string,
        
        ){super()}

    format: string;
    saved: boolean;

    setId(id: number): void {
        this.id = id
    }
    getId(): number {
        return this.id
    }
}
