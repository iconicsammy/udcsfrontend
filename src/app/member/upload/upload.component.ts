import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WalkService } from '../../services/walk.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ImageInfo } from '../types/interfaces/ImageInfo';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  walkId : string = '';
  images: ImageInfo[] = [];
  file : any = null; 

  constructor(private service: WalkService, private route: ActivatedRoute, private spinner: NgxSpinnerService) { 
    this.walkId = this.route.snapshot.params.walkId || '';
  }

  setFileBeingUploaded(event: any) { 
    this.file = event.target.files[0]; 
} 
 
  getImages = () =>{
    this.images = [];
    if (this.walkId){
      this.spinner.show();
      this.service.getImages(this.walkId)
      .subscribe(data=>{
        this.images = data['items'];
        this.spinner.hide();
      }, err=>{
      alert('Error when fetching the images attached to the awesome walk you took...retry')
        this.spinner.hide();
      });
    }
    }

  private saveUploadedFileInfo = (fileName: string) =>{
    this.service.saveImageInfo(fileName, this.walkId).subscribe(data=>{
      this.getImages();
      this.spinner.hide();
    }, err=>{
      alert('FIle might have been uploaded but info was broken...')
      this.spinner.hide();
    })
  }

  private  putToS3 = (uploadURL: string) => {
    const fileName = uploadURL.split('?')[0];
     this.service.uploadToS3(uploadURL, this.file, fileName).subscribe(data=>{
       this.saveUploadedFileInfo(fileName);
     }, err=>{
       this.spinner.hide();
     })
    }

    uploadNewImage = () =>{
      if (this.walkId && this.file){
        this.spinner.show();
        this.service.getUploadURL(this.walkId).subscribe(data=>{
          // now we have the presigned URL to upload the file to
          const uploadtoURL = data['uploadUrl'];
         // now call the URL by passing the url to it.
          this.putToS3(uploadtoURL);
        }, err=>{
          this.spinner.hide();
        })
      }
    }
  

  ngOnInit(): void {
    this.getImages();
  }

}
