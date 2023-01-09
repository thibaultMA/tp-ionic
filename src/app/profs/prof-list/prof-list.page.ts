import { Component, OnInit } from '@angular/core';
import { Prof } from 'src/app/class/prof';
import { PhotoService } from 'src/app/services/photo/photo.service';
import { ProfService } from 'src/app/services/prof/prof.service';

@Component({
  selector: 'app-prof-list',
  templateUrl: './prof-list.page.html',
  styleUrls: ['./prof-list.page.scss'],
})
export class ProfListPage  {
  list:Prof[]=[]
  constructor(public profService: ProfService,public photoService : PhotoService) {}

  async ionViewWillEnter() {
    this.list = await this.profService.getList()
    console.log(this.list);
    
  }
}
