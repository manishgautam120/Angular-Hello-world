import { Component } from '@angular/core';



@Component({
                selector:'hello5',
                template: '<h1>{{msg}}</h1>',
                styles: ['h1{color:red}'] 

})

export class hellp5Component{
msg = "cretaed component without ng commands"
}