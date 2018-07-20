import { Component } from '@angular/core';
import { NavController , AlertController, NavParams, ActionSheetController, LoadingController  } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {Http,Headers, RequestOptions} from '@angular/http';
import { OcrInputPage } from '../ocr-input/ocr-input';
//import { PdfPage } from '../pdf/pdf';
import { ocr } from '../../interfaces/ocr';
import {FileChooser} from '@ionic-native/file-chooser';
import {FileOpener} from '@ionic-native/file-opener';
import {FilePath} from '@ionic-native/file-path';
let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });


let ocrUrl =  "http://nebula.nubeslab.com:8080/document";
@Component({
  selector: 'page-home-camera',
  templateUrl: 'home-camera.html'
})
export class HomeCameraPage {
  public photos : any;
  public base64Image : string;
  OCRAD :any;
  value :any;
  srcImage: string;
  //public dataCopy : string;
  ocr: ocr = { base64: '', conf: 'tnp' , ftype: 'jpeg'};
  
  constructor(public navCtrl : NavController, private camera : Camera, public navParams: NavParams, public actionSheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController, private alertCtrl : AlertController,private http: Http, private fileOpener: FileOpener, private fileChooser: FileChooser, private filePath: FilePath) {
      
}

//allow them to choose from multiple photo options, 0 = library  1 = camera take pic
takePicture() {
  const actionSheet = this.actionSheetCtrl.create({
    buttons: [
      {
        text: 'Choose an existing picture',
        handler: () => {
          this.getPicture(0); //0 == library 
        }
      },{
        text: 'Take a new picture',
        handler: () => {
          this.getPicture(1); // 1 == Camera
        }
      },{
        text: 'Cancel',
        role: 'cancel'
      }
    ]
  });
  actionSheet.present();
}

  ngOnInit() {
    this.photos = [];
  }

  
  getPicture(sourceType: number) {
    const options : CameraOptions = {
      quality: 75, // picture quality
      sourceType,
     targetWidth: 500,
     targetHeight: 500,
     correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
   
    
    this.camera.getPicture(options) .then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photos.push(this.base64Image);
        this.photos.reverse();
        alert(imageData);
        this.onClick(imageData);
      //  var doc = document.getElementById(imageData);
      },(err) => {
        console.log(err);
      });
     
  }
 deletePhoto(index) {
    let confirm = this.alertCtrl.create({
        title: 'Sure you want to delete this photo? There is NO undo!',
        message: '',
        buttons: [
          {
            text: 'No',
            handler: () => {
              console.log('Disagree clicked');
            }
          }, {
            text: 'Yes',
            handler: () => {
              console.log('Agree clicked');
              this.photos.splice(index, 1);
            }
          }
        ]
      });
    confirm.present();
  }
  analyze() {
    let loader = this.loadingCtrl.create({
     content: 'Please wait...'
    });
    loader.present();
    (<any>window).OCRAD(document.getElementById('image'), text => {
      loader.dismissAll();
      alert(text);
      console.log(text);
    });
  }

  restart() {
    this.srcImage= '';
    this.takePicture();
  }
  uploadPdf() {
    this.fileChooser.open().then(file => {
      this.filePath.resolveNativePath(file).then(resolvedFilePath => {
        this.fileOpener.open(resolvedFilePath, 'appication/pdf').then(value => {

          console.log(value);
        }).catch(err => {
          alert(JSON.stringify(err));
        });
      }).catch(err => {
        alert(JSON.stringify(err));
      });
    }).catch(err => {
      alert(JSON.stringify(err));
    });
  }



  //onPDFPage()
  //{
 // this.navCtrl.push(PdfPage);
  //}
  
   onOCRPage()
    {
    this.navCtrl.push(OcrInputPage);
    }
 
    onClick(imageData:any) {
      alert(imageData);
     let data = "data:image/jpeg;base64," + imageData;
      let postdata={
        base64:data,
        conf: this.ocr.conf,
		ftype: this.ocr.ftype
     };

      console.log(postdata);
	  
      this.http.post(ocrUrl, postdata,options).map(res => res.json()).subscribe(data => {
          alert("Enter");
          console.log(data.responseBean);
            },
            err => {
              if(err){
            
              }
              console.log("ERROR!: ", err);
            }
        );
     
      
    }



}
