import { Component } from '@angular/core';


@Component({
                selector:"hello9",
                template:
                `
                 <h3>{{v1}}</h3>
                 <h3>{{v2}}</h3>
                 <h3>{{v3}}</h3>
                 <h3>{{v4}}</h3>
                 <h3>{{v5}}</h3>
                `,

                styles:['h3{color:red}']


})
export class hello9Component{
    //data types should mention after variable name

    v1 :any = "abc";
    v2 :any = 'xyz';
    v3 :any = 20;
    v4 :any = 4.5;
    v5 :any = false;
}