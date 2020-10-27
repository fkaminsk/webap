import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ch-font',
  templateUrl: './ch-font.component.html',
  styleUrls: ['./ch-font.component.css']
})
export class ChFontComponent implements OnInit {
  font = true;
  @Input()
  paragraph: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeFont() {
    this.font = !this.font;
  }
}
