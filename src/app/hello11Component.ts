import { Component } from '@angular/core';


@Component({
                selector:"hello11",
                template:
                `
                 <h3>v1 input : ["abc","45","false"];; but output : {{v1}}</h3>
                 <h3>v2 input : ['abc','45','false']; but output :{{v2}}</h3>
                 <h3>v3 input : ['abc',45,false]; but output :{{v3}}</h3>
                 <h3>v4 input : [55,5.5,5.0]; but output :{{v4}}</h3>
                 <h3>v5 input : [true,false]; but output :{{v5}}</h3>
                `,

                styles:['h3{color:red}']


})
export class hello11Component{
 

    v1 = ["abc","45","false"];
    v2 = ['abc','45','false'];
    v3 = ['abc',45,false];
    v4 = [55,5.5,5.0];
    v5 = [true,false];
    

}