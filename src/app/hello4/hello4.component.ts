import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello4',
  template: '<br><span>i am from inline template hello4</span>',
  styles: ['span{color:yellow}']
})
export class Hello4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
