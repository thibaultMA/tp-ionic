import { APP_ID, Injectable } from '@angular/core';
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';
import { Directory, Filesystem, WriteFileResult } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Photos } from 'src/app/interfaces/photo';
import { ProfPhoto } from 'src/app/interfaces/prof-photo';
import { DataService } from '../data/data.service';
const APIURL = "Photos"
@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  photos: Photos[] = [];

  private PHOTO_STORAGE = 'prof_photos';

  constructor(private api: DataService<Photos>) {
    
  }
  getPhotos() {
    return this.photos;
  }

  public async loadSaved() {   

    this.photos =await this.api.get().toPromise()

    // Display the photo by reading into base64 format

    for (const photo of this.photos) {
      // Read each saved photo's data from the Filesystem

      const readFile = await Filesystem.readFile({
        path: photo.filePath,

        directory: Directory.Data,
      });

      // Web platform only: Load the photo as base64 data

      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }
  public async addNewToGallery() {
    const capturedPhoto: Photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const base64Data = await this.readAsBase64(capturedPhoto);
    const fileName = new Date().getTime() + '.jpeg';
    const newPhoto = new ProfPhoto(fileName, base64Data);
    this.photos.unshift(newPhoto);

    return newPhoto;
  }

  public async savePicture(photo: Photos) {
    this.api.setUrl(APIURL);
    console.log(await this.api.post(photo).toPromise());

    const savedFile = await Filesystem.writeFile({
      path: photo.filePath,
      data: photo.webviewPath,
      directory: Directory.Data,
    });
  }

  private async readAsBase64(photo: Photo) {
    const response = await fetch(photo.webPath);
    const blob = await response.blob();

    return (await this.convertBlobToBase64(blob)) as string;
  }

  private convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
}
