import React, {KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: any // need to fix any
    setNameCallback: any // need to fix any
    addUser: any // need to fix any
    error: any // need to fix any
    totalUsers: any // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)
    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter')
            addUser()
    }

    return (
        <div className={s.someClass}>
            <input value={name} onChange={setNameCallback} onKeyPress={onKeyPress} className={inputClass}/>
            <button onClick={addUser}>add</button>
            <span className={s.totalUsers}>{totalUsers}</span>
            <div className={s.red}>{error && 'PLEASE, ENTER THE NAME!'}</div>
        </div>
    )
}

export default Greeting
