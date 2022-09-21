import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inst-test6',
  template: `
    <h2 class="title1">Test6.1</h2>
    <h3 class="title2">Test6.2</h3>
  `,
  styles: [`
  .title1 {
  color: #a16cff
   }
  .title2 {
    color: #ff5737
  }
  `]
})
export class Test6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
