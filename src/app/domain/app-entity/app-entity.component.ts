import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-entity',
  templateUrl: './app-entity.component.html',
  styleUrls: ['./app-entity.component.scss']
})
export class AppEntityComponent implements OnInit {

  public id: String;
  public name: String;
  public definitionFilePath: String;
  public appName: String;
  public appUrl: String;
  public dataBase: String;
  public appGenerated: Boolean;
  public modelFilePath: String;

  
  constructor() { }
  
  ngOnInit() {
    this.id = "one";
    this.name = "First Entity";
    this.definitionFilePath = "d:\test\file";
    this.appName = "Application Name";
    this.appUrl = "App URL";
    this.dataBase = "SQL";
    this.appGenerated = true;
    this.modelFilePath = "ModelFilePath"; 
  }

}
