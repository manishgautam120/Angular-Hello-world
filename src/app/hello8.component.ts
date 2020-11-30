import { Component } from '@angular/core';


@Component({
                selector:"hello8",
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
export class hello8Component{
    //data types

    v1 = "abc";
    v2 = 'xyz';
    v3 = 20;
    v4 = 4.5;
    v5 = false;
}