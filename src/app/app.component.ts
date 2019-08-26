import { Component, OnInit } from '@angular/core';
import { UploadServiceService } from './services/upload-service.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedFiles: FileList;
  currentFile: File;
  title = 'upload files';
  data:any;
  constructor(private ploadService:UploadServiceService){}
  
  ngOnInit(){
  this.allvideos();
  }
  selectFile(event){
    this.selectedFiles = event.target.files;
  }

  upload(){
    this.currentFile = this.selectedFiles.item(0);
    this.ploadService.uploadFile(this.currentFile).subscribe(event=>{
      if(event instanceof HttpResponse){
        console.log('file is completely uploaded!! ')
      }
    });
    this.selectedFiles=undefined;
  }

  allvideos(){
    this.ploadService.allFiles()
    .subscribe(resp=>{
      this.data = resp;
      console.log(this.data);
    },err=>{
      console.log(err);
    })
  }

}
