import classes from './CourseItem.module.css'




const courseItem =(props)=>{

    return(
      <div className={classes.courseItem} onClick={()=>props.delete(props.id)}>
          {props.children}
      </div>
    )
}

export default courseItem