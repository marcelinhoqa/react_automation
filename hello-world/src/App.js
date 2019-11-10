import React, { Component } from 'react';
//import FirstComponent, {SecondComponent} from './components/learning-example/FirstComponent.jsx'
//import Counter from './components/counter/Counter.jsx'
//import logo from './logo.svg';
import './App.css';
import './bootstrap.css'
import TodoApp from './components/todo/TodoApp.jsx';

// para exibir o component, foi necessário adicionar o component 
//    <FirstComponent></FirstComponent>
// para executar o react é npm start
/*
Um componente precisa de:
uma View = JSX ou Javascript
Logica JS
Estilo CSS
Estados = Armazenamento de dados internos 
Acessorios = passar dados e etc

*/
// valor by é passado para dentro do botão da classe Counter
class App extends Component {
  render() {
    return (
      <div className="App">
      { /* <Counter by={1}/>  
        <Counter by={5}/>
    <Counter by={10}/> */}
    <TodoApp/>
      </div>
    );
  }
}

// // class AllComponent extends Component{
// //   render(){
// //     return (
// //       <div className="allComponent">
// //         My hello worlds
//         <FirstComponent></FirstComponent>
//         <SecondComponent></SecondComponent>
//         <ThirdComponent></ThirdComponent>
//       </div>
//     );
//   }
// }

// function ThirdComponent(){
//   return (
//     <div  className="thirdComponent">
//       Third Component
//     </div>
//   )
// }
export default App;