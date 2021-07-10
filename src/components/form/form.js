import React from 'react'
import './form.css'
const Form = () => {
    return (
        <div className="form__field">
            <form>
                <div className="form__ctrl">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Search for movies" autoComplete= "off" />
                </div>
            </form>
        </div>
    )
}

export default Form
