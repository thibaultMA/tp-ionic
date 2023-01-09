import { Photo } from "@capacitor/camera";
import { Entity } from "./entity";

export interface Photos extends Photo,Entity<Photos>{
    filePath: string;
    webviewPath: string;
}