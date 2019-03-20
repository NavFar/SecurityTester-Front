import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminApiService } from  '../../services/admin-api/admin-api.service';
import { TREE_ACTIONS, KEYS, IActionMapping } from 'angular-tree-component';
import { HttpEventType } from '@angular/common/http';
@Component({
  selector: 'admin-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {
  uploaderTitle:string;
  selectFile:string;
  dragText:string;
  value:number;
  nodes:object[];
  allowOverrider:string;
  override:boolean;
  basePath:string;
  uploadPlace:string
  fileHtml:any;
  actionMapping:IActionMapping = {
  mouse: {
    click: (tree, node, $event) => {
          TREE_ACTIONS.TOGGLE_ACTIVE(tree, node, $event);
          this.basePath=node.data.path;
          if(node.data.isDir){
            if(node.data.path=="/"){
              this.basePath=node.data.path+node.data.name;

            }else
            this.basePath=node.data.path+"/"+node.data.name;
          }

        },
    // contextMenu: (tree, node, $event) => {
    //       TREE_ACTIONS.TOGGLE_ACTIVE(tree, node, $event);
    //       console.log(node.data.path+node.data.name)
    //       return false;
    //     },
    dblClick: (tree, node, $event) => {
          if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
        }
  },
  keys: {}
  }
  options:object={
    actionMapping:this.actionMapping
  };
  constructor(private adminApi:AdminApiService,private toast :ToastrService) {
    this.uploaderTitle="اپلودر سایت";
    this.selectFile="انتخاب فایل";
    this.dragText="فایل را به اینجا بکشید تا اپلود شودیا";
    this.allowOverrider="بازنویسی فایل در صورت وجود فایل هم نام با فایل جدید";
    this.uploadPlace="محل اپلود:";
    this.basePath="/"
    this.override=false;
    this.value=0;
    this.toast.info("در حال دریافت اطلاعات");
  }
  loadTree(){
    this.adminApi.getDirectoryContent().subscribe(
      (res)=>{
        this.toast.success("اطلاعات دریافت شد");
        this.nodes=res;
      },
      (err)=>{
        this.toast.error("عدم برقراری ارتباط");
      }
    );
  }
  ngOnInit() {
    this.loadTree();
  }
  drop(event){
    event.preventDefault();
    event.stopPropagation();
    this.fileReader(event.dataTransfer.files);
  }
  dragover(event){
    event.preventDefault();
    event.stopPropagation();
  }
  fileReader(files) {
    this.value=0;
    let reader = new FileReader();
    if(files && files.length > 0) {
      let file = files[0];
      reader.readAsDataURL(file);
      var outerThis = this;
      reader.onload = function(e){
      outerThis.upload(reader.result,file.name);
    };
    }
  }
  upload(data,name){
    this.fileHtml=null;
    this.adminApi.uploadFile(
      {
        name:name,
        file:data,
        basePath:this.basePath,
        override:this.override,
      }
    ).subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.value = event.loaded/event.total *100;
        }
        if (event.type === HttpEventType.Response) {
          this.toast.success("اپلود کامل شد");
          this.loadTree();
        }
      }
      ,(err)=>{
        this.toast.error("فایل با نام تکراری");
      }
    );
  }
}
