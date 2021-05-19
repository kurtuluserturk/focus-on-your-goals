import React from 'react'
import { useGlobalContext } from '../context'

const Agreement = () => {
    const {
        goal,
        email,
        remainingDays,
        price,
        handleConfirmClick
    } = useGlobalContext()

    return (
        <div>
            <section>
                <div className="color"></div>
                <div className="color"></div>
                <div className="color"></div>

                <div className="box">
                    <div className="container">
                        <div className="form">
                            <h1>Confirm your agreement</h1>

                            <div className="infoRow">
                                <p>Your goal: {goal}</p>
                            </div>
                            <div className="infoRow">
                                <p>Deadline: That's {remainingDays} days from now</p>
                            </div>
                            <div className="infoRow">
                                <p>Your email: {email}</p>
                            </div>
                            <div className="infoRow">
                                <p>Selected price: {price}</p>
                            </div>
                            <div className="infoRow">
                                <input
                                    type="submit"
                                    value="Confirm the agreement"
                                    onClick={handleConfirmClick}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Agreement
