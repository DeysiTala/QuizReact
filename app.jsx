
const RowTable = (props) => {
   const _tds =  props.items.map ((item, index) => <td key ={index}> {item} </td>);
   return (
      <tr>
         {_tds}
     </tr>
       
   )
}

const RTable = ({questions}) => {
   return (
      <table width="300" border="3" className = "table table-bordered">
         <RowTable items = {questions[0]} />
         <RowTable items = {questions[1]} />
         <RowTable items = {questions[2]} />
         <RowTable items = {questions[3]} />
      </table>
   );
}

function listPairs (questions) {
   console.log ("questions: ", questions);
   let newquestions = [];
   for ( let row  of questions ) {
      let filterArray = row.filter ( e => e);
      newquestions.push(filterArray); 
   }
   return newquestions.map ((row, index) => {
      return (
         <li key = {index}> {row} </li>
         
      );
   });
}
function AppDatos (props)  {
  let  asd = 'NANANANA';
   return (
      <div>
                 <p>{asd}</p>
              
  <button type="text">X</button>
               </div>
    
   );
}

 
const App = ({title, questions}) => {
   return (
      <div>
        <div>
          <h1>Quiz</h1>
          <br></br>
         <RTable  questions = {questions}/>
       
         <h3>  {title}</h3>
         <ol>
            {listPairs (questions)}
         </ol>
         
                 
    
      </div>
      </div>
    
   );
}

let questions = [
   ["Do you want to learn how to build React apps like this?"],
   ["Do you want to learn how to build React apps like this?"],
   ["Do you want to learn how to build React apps like this?"],
   ["Do you want to learn how to build React apps like this?"]
]

ReactDOM.render ( 
   <App title = {'Respuestas'}  questions = {questions} />, 
   document.getElementById("root")
   
   
); 
 /*ReactDOM.render(
<AppDatos algo={AppDatos} /> , document.getElementById("root")
 );*/