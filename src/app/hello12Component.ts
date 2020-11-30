import { Component } from '@angular/core';


@Component({
                selector:"hello12",
                template:
                `
                 <h3>v1 input : any : ["abc","45","false"];; but output : {{v1}}</h3>
                 <h3>v2 input : any : ['abc','45','false']; but output :{{v2}}</h3>
                 <h3>v3 input : any : ['abc',45,false]; but output :{{v3}}</h3>
                 <h3>v4 input : any : [55,5.5,5.0]; but output :{{v4}}</h3>
                 <h3>v5 input : any : [true,false]; but output :{{v5}}</h3>
                `,

                styles:['h3{color:red}']


})
export class hello12Component{
 

    v1 :any = ["abc","45","false"];
    v2 :any = ['abc','45','false'];
    v3 :any = ['abc',45,false];
    v4 :any = [55,5.5,5.0];
    v5 :any = [true,false];
    

}