import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { RESTcommunicationService } from '../restcommunication.service';
import { MessageModel } from '../message-model';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  constructor(private service: RESTcommunicationService) {}

  inputValue: string;
  messageModel: MessageModel;

  ngOnInit(): void {}

  send(input: string) {
    this.inputValue = input;
    this.service.sendCustomMessage(this.inputValue).subscribe(
      webResponse => {
        this.messageModel = webResponse.body;
        document.getElementById("output").innerHTML = this.messageModel.message;
      }
    )
  }

  getHello() {
    this.service.getHello().subscribe(
      webResponse => {
        this.messageModel = webResponse.body;
        document.getElementById("output").innerHTML = this.messageModel.message;
      }
    )
  }
}
