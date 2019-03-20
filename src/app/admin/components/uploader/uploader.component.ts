import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminApiService } from  '../../services/admin-api/admin-api.service';
import { TREE_ACTIONS, KEYS, IActionMapping } from 'angular-tree-component';

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

  actionMapping:IActionMapping = {
  mouse: {
    click: TREE_ACTIONS.TOGGLE_ACTIVE,
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
    this.dragText="فایل را به اینجا بکشید تا اپلود شودیا"
    this.value=90;
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
    console.log("hell");
    console.log(event.dataTransfer.files[0].name);
  }
  dragover(event){
    event.preventDefault();
    event.stopPropagation();
    console.log("wow");
  }
  temp(){
    console.log("Hellow");
  }
}
