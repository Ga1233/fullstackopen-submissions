import Course from './Course.jsx'
// This component shows the course name as a heading
const Header = ({ course }) => {
  return <h1>{course}</h1>
}

// This component shows ONE part (like a single topic of the course)
const Part = ({ part }) => {
  return (
    <p>
      {/* Display part name and number of exercises */}
      {part.name} {part.exercises}
    </p>
  )
}

// This component shows ALL parts of a course
const Content = ({ parts }) => {
  return (
    <div>
      {/* 
        Loop through all parts using map()
        For each part, show the Part component
      */}
      {parts.map(part => (
        // key is required by React to identify each item uniquely
        <Part key={part.id} part={part} />
      ))}
    </div>
  )
}

// This component calculates and shows total exercises
const Total = ({ parts }) => {

  // reduce() goes through all parts and adds exercises
  // sum starts from 0 and keeps increasing
  const total = parts.reduce((sum, part) => {
    return sum + part.exercises
  }, 0)

  return <p>Total of {total} exercises</p>
}

// This component represents ONE full course
// const Course = ({ course }) => {
//   return (
//     <div>
//       {/* Show course name */}
//       <Header course={course.name} />


//       {/* Show all parts of this course */}
//       <Content parts={course.parts} />

//       {/* Show total exercises */}
//       <Total parts={course.parts} />
//     </div>
//   )
// }

// Main App component (starting point of the app)
const App = () => {

  // Instead of one course, now we have MULTIPLE courses
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        { name: 'Fundamentals of React', exercises: 10, id: 1 },
        { name: 'Using props to pass data', exercises: 7, id: 2 },
        { name: 'State of a component', exercises: 14, id: 3 }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        { name: 'Routing', exercises: 3, id: 1 },
        { name: 'Middlewares', exercises: 7, id: 2 }
      ]
    }
  ]

  return (
    <div>
      {/* 
        Loop through all courses
        For each course, show Course component
      */}
      {courses.map(course => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  )
}

// Export App so React can render it
export default App