import CourseItem from '../CourseItem/CourseItem'
import classes from './CourseList.module.css'


const CourseList =(props)=>{
    let content = props.goals.map(goal=>{
        return <CourseItem key={goal.id} id={goal.id} delete={props.delete}>
             {goal.text}
        </CourseItem>
    })
    if(props.goals.length === 0){
        content = <div className={classes.empty}>No goals found. Maybe add one?</div>
    }
    return(
      <div className={classes.courseList}>
        {content}
      </div>
    )
}

export default CourseList