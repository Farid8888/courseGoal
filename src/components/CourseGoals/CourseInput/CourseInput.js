import Button from '../../UI/Button'
import classes from './CourseInput.module.css'
import {useRef,useState} from 'react'


const CourseInput =(props)=>{
    const enteredGoal = useRef()
    const [emptyValue,setEmptyValue] = useState('')
    const [error,setError] = useState(false)
    const onChangeHandler =()=>{
        setEmptyValue(enteredGoal.current.value)
        setError(false)
    }
    const onSubmitHandler =(event)=>{
      event.preventDefault()
      props.add({ text: emptyValue, id: Math.random() })
      setEmptyValue('')
      if(emptyValue.trim().length === 0 ){
          setError(true)
      }
    }

    const errorClass = error ? classes.text + ' ' + classes.error : classes.text 
    const errorInput = error ? classes.goal + ' ' + classes.goalError : classes.goal
    return(
      <form className={classes.form} onSubmit={onSubmitHandler}>
          <div className={classes.input}>
          <label className={errorClass} htmlFor='course'>CourseGoal</label>
          <input className={errorInput} id="course" type="text" ref={enteredGoal} value={emptyValue} onChange={onChangeHandler}/>
          </div>
          <Button type="submit">Add Goal</Button>
      </form>
    )
}

export default CourseInput