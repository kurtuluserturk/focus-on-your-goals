import React from 'react'

const Goal = () => {
    return (
        <div>
            <section>
                <div className="color"></div>
                <div className="color"></div>
                <div className="color"></div>

                <div className="box">
                    <div className="container">
                        <div className="form">
                            <h1>Achieve the goals 🚀🚀</h1>
                            <form>
                                <div className="inputBox">
                                    <input type="text" placeholder="Your goal" />
                                </div>
                                <div className="inputBox">
                                    <input type="date" />
                                </div>
                                <div className="inputBox">
                                    <input type="email" placeholder="Your email" />
                                </div>
                                <div className="inputBox">
                                    <select name="price" id="price">
                                        <option value="25₺">25₺</option>
                                        <option value="50₺">50₺</option>
                                        <option value="100₺">100₺</option>
                                        <option value="250₺">250₺</option>
                                        <option value="1000₺">1000₺</option>
                                    </select>
                                </div>
                                <div className="inputBox">
                                    <input type="submit" value="Go to Agreement" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>



                {/*   <form>
                    <label htmlFor="price">Choose a price:</label>
                    <select name="price" id="price">
                        <option value="25₺">25₺</option>
                        <option value="50₺">50₺</option>
                        <option value="100₺">100₺</option>
                        <option value="250₺">250₺</option>
                        <option value="1000₺">1000₺</option>
                    </select>
                </form> */}
            </section>




        </div >
    )
}

export default Goal
