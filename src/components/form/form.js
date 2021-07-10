import React from 'react'

const Form = () => {
    return (
        <div className="form__field">
            <form>
                <div className="form__ctrl">
                    <input type="text" placeholder="Search for movies" autoComplete= "off" />
                    <i className="fas fa-search"></i>
                </div>
            </form>
        </div>
    )
}

export default Form
