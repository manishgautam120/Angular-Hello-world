import { Component } from '@angular/core';


@Component({
                selector:"hello8",
                template:
                `
                 <h6>{{v1}}</h6>
                 <h6>{{v2}}</h6>
                 <h6>{{v3}}</h6>
                 <h6>{{v4}}</h6>
                 <h6>{{v5}}</h6>
                `


})
export class hello8Component{
    //data types

    v1 = "abc"
    v2 = 'xyz'
    v3 = 20;
    v4 = 4.5

}