
import { Component, OnInit, Input, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-ngx-table-component',
  templateUrl: './ngx-table-component.component.html',
  styleUrls: ['./ngx-table-component.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [Modal],

})
export class NgxTableComponentComponent implements OnInit {
  @Input() rows: Array<Object>;
  selectedOption: string;
  constructor(vcRef: ViewContainerRef, public modal: Modal,overlay:Overlay ,public dialog: MdDialog) {
}


  ngOnInit() {
    console.log(this.rows);
  }


  openDialog() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

  onAction():void{
    console.log('here');
  }

onClick() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('A simple Alert style modal window')
        .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
        .open();
  }


}


@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html',
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
}
