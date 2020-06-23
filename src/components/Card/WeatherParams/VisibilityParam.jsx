import React from "react";

const VisibilityParam = (props) => {
    return (
        <div>
            <img src="https://img.icons8.com/cotton/40/000000/telescope.png" alt="Visibility"/>
            <p>Видимость <span>{props.visibility /1000} </span> км.</p>
        </div>
    );
};

export default VisibilityParam;