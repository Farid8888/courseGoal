import CourseInput from './components/CourseGoals/CourseInput/CourseInput'
import React,{useState} from 'react'
import CourseList from './components/CourseGoals/CourseList/CourseList'

const App = ()=>{
const [goals,setGoals] = useState([
  { text: 'Do all exercises!', id: 'g1' },
  { text: 'Finish the course!', id: 'g2' }
])

const addHandler=(data)=>{
  if(data.text.trim().length === 0){
    return
  }else{
    setGoals(prevSt=>{
      return [...prevSt,data]
    })
  }
  
}

const deleteHandler =(goalId)=>{
 setGoals(prevSt=>{
   return prevSt.filter(goal=>goal.id !==goalId)
 })
}
  return(
    <React.Fragment>
    <CourseInput add={addHandler}/>
    <CourseList goals={goals} delete={deleteHandler}/>
    </React.Fragment>
  )
}

export default App