import { Component, OnInit } from "@angular/core";
import { ActionSheetController } from "@ionic/angular";
import { TranslateConfigService } from "../../translate-config.service";

@Component({
  selector: "app-tab4",
  templateUrl: "tab4.page.html",
  styleUrls: ["tab4.page.scss"],
})
export class Tab4Page implements OnInit {
  selectedLanguage: string;

  constructor(
    private translateConfigService: TranslateConfigService,
    public actionSheetController: ActionSheetController
  ) {
  
  }

  ngOnInit(){

  } 

}
