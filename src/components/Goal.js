import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

const Goal = () => {
    const {
        goal,
        email,
        deadline,
        price,
        isSaved,
        saveGoal,
        saveEmail,
        saveDeadline,
        savePrice,
        handleSaveSubmit
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
                            <h1>Achieve your goals 🚀</h1>
                            <form onSubmit={handleSaveSubmit}>
                                <div className="inputBox">
                                    <input
                                        type="text"
                                        placeholder="Your goal"
                                        value={goal}
                                        onChange={e => saveGoal(e)}
                                        required
                                    />
                                </div>
                                <div className="inputBox">
                                    <input
                                        type="date"
                                        value={deadline}
                                        onChange={e => saveDeadline(e)}
                                        required
                                    />
                                </div>
                                <div className="inputBox">
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        value={email}
                                        onChange={e => saveEmail(e)}
                                        required
                                    />
                                </div>
                                <div className="inputBox">
                                    <select
                                        name="price"
                                        id="price"
                                        value={price}
                                        onChange={e => savePrice(e)}
                                        required
                                    >
                                        <option value="25₺">25₺</option>
                                        <option value="50₺">50₺</option>
                                        <option value="100₺">100₺</option>
                                        <option value="250₺">250₺</option>
                                        <option value="1000₺">1000₺</option>
                                    </select>
                                </div>
                                <div className="inputBox">
                                    <input type="submit" value="Save" />
                                </div>
                            </form>
                            {
                                isSaved
                                    ? <div className="inputBox text-center link">
                                        <Link to='/agreement'>
                                            Go to agreement
                                        </Link>
                                    </div>
                                    : <p className="infoRow">You cannot go to the agreement before you save the form.</p>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Goal
