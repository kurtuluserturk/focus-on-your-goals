import React, { useContext, useState } from 'react'

const UserContext = React.createContext()

const UserProvider = ({ children }) => {
    const [goal, setGoal] = useState('')
    const [email, setEmail] = useState('')
    const [deadline, setDeadline] = useState('')
    const [price, setPrice] = useState()
    const [remainingDays, setRemainingDays] = useState()
    const [isSaved, setIsSaved] = useState(false)

    const saveGoal = e => {
        setGoal(e.target.value)
    }
    const saveEmail = e => {
        setEmail(e.target.value)
    }
    const saveDeadline = e => {
        setDeadline(e.target.value)
    }
    const savePrice = e => {
        setPrice(e.target.value)
    }

    const calcRemainingDays = () => {
        let today = new Date().getTime()
        let selectedDate = new Date(deadline).getTime()
        let difftime = selectedDate - today
        let diffDay = difftime / (24 * 60 * 60 * 1000)
        let roundedDiff = Math.round(diffDay)
        setRemainingDays(roundedDiff)
    }

    const handleSaveSubmit = e => {
        e.preventDefault()
        if (goal && deadline && email && price) {
            calcRemainingDays()
            setIsSaved(true)
            alert('Saved successfully')
        }
        else {
            alert('Please fill in all required fields')
        }
    }

    const handleConfirmClick = (e) => {
        alert('“DONE! You confirmed your goal. Time to get cracking!')
        setGoal('')
        setDeadline('')
        setRemainingDays('')
        setEmail('')
        setPrice('')
    }

    return (
        <UserContext.Provider
            value={{
                goal,
                email,
                deadline,
                price,
                remainingDays,
                isSaved,
                saveGoal,
                saveEmail,
                saveDeadline,
                savePrice,
                handleSaveSubmit,
                handleConfirmClick
            }}

        >
            {children}
        </UserContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(UserContext)
}

export { UserContext, UserProvider }