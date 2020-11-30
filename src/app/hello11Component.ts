import { Component } from '@angular/core';


@Component({
                selector:"hello11",
                template:
                `
                 <h3>v1 value is : {{v1}}</h3>
                 <h3>v2 value is :{{v2}}</h3>
                 <h3>v3 value is :{{v3}}</h3>
                 <h3>v4 value is :{{v4}}</h3>
                 <h3>v5 value is :{{v5}}</h3>
                `,

                styles:['h3{color:red}']


})
export class hello11Component{
 

    v1 = ["abc",45,false];
    v2 = ["abc","45","false"];
    v3 = ['abc','45','false'];
    v4 = [55,5.5,5.0];
    v5 = [true,false];
    

}