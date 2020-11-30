import { Component } from '@angular/core';


@Component({
                selector:"hello10",
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
export class hello10Component{
    //data types should mention after variable name//available in typescript

    //total 4 type data type available string , number , boolean 

    v1 :string = "abc";
    v2 :string = 'xyz';
    v3 :number = 20;
    v4 :number = 4.5;
    v5 :boolean = false;
    //you can not use 
    /*
    
    v1 :boolean = "abc";
    v2 :number = 'xyz';
    v3 :string = 20;
    v4 :string = 4.5;
    v5 :number = false;
    
    */

}