// const Header = (props) => {
//   return(
//     <>
//       <h1>{props.course}</h1>
//     </>
//   )
// }

// const Content = (props) => {
//   return(
//     <>
//       <p>
//         {props.part1} {props.exercises1}
//       </p>
//       <p>
//         {props.part2} {props.exercises2}
//       </p>
//       <p>
//         {props.part3} {props.exercises3}
//       </p>
//     </>
//   )
// }

// const Total = (props) => {
//   return(
//     <>
//       <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
//     </>
//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <Header course={course} />
//       <Content
//         part1={part1}
//         exercises1={exercises1}
//         part2={part2}
//         exercises2={exercises2}
//         part3={part3}
//         exercises3={exercises3}
//       />
//       <Total
//         exercises1={exercises1}
//         exercises2={exercises2}
//         exercises3={exercises3}
//       />
//     </div>
//   )
// }

// export default App

// previous code

// const Header = (props) => {
//   return (
//     <h1>{props.course.name}</h1>
//   )
// }

// // New component to handle individual parts
// const Part = (props) => {
//   // expect a single 'part' object
//   return (
//     <p>
//       {props.part.name} {props.part.exercises}
//     </p>
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//       <Part part={props.parts[0]} />
//       <Part part={props.parts[1]} />
//       <Part part={props.parts[2]} />
//     </div>
//   )
// }

// const Total = (props) => {
//   return (
//     <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
//   )
// }

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   };

//   const parts = course.parts;

//   return (
//     <div>
//       <Header course={course} />
//       <Content
//         parts={parts}
//       />
//       <Total
//         parts={parts}
//       />
//     </div>
//   );
// }

// export default App


// const App = () => {
//   const name1 = 'Peter'
//   const age1 = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name1} age={age1} />
//     </div>
//   )
// }
import { useState } from "react";
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}


const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}

      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
} 
export default App;
