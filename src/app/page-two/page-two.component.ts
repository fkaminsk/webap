import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {

  constructor() {
  }

  someText = 'Pellentesque augue diam, eleifend ut mi et, dapibus hendrerit erat. Integer ex eros, ullamcorper a ultrices nec, mollis a velit. Fusce iaculis nulla odio, a lobortis erat ultrices sed. Aliquam nulla leo, vulputate et tincidunt ac, lobortis ac ligula. Vivamus purus nisl, mollis quis rutrum in, tempus quis ex. Nunc libero ante, ultricies nec nisi vitae, tempus egestas metus. Nullam feugiat malesuada tempor. Nulla ornare molestie volutpat. Morbi nec lorem id libero elementum tempus ut nec est. Integer non volutpat lorem.';

  ngOnInit(): void {
  }

}
