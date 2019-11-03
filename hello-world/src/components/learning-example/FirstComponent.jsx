import React, { Component } from 'react';

// para criar um componente é bem simples, precisa extender a classe COmponent do react
// tem o padrão jsx do react
// para exibir a informação na tela, é preciso usar o método render 

export default class FirstComponent extends Component{
    render(){
    return (
      <div  className="firstComponent">
      First Component
      </div>
      );
    }
  }


  
export class SecondComponent extends Component{
    render(){
    return (
      <div  className="secondComponent">
      Second Component
      </div>
      );
    }
  }


  //export default FirstComponent;

  