import React from "react";
import PropTypes from 'prop-types';

// stateless functional component
function DeveloperList(props) {
    return (
        <ol className="developer-list">

            { props.developerlist.map((developer) => (

                <li key={ developer.id } className="developer-item">
                    <div
                        className="developer-avatar"
                        style={ { backgroundImage: `url(${developer.avatarUrl})` } }
                    />

                    <div className="developer-details">
                        <span>{ developer.id }</span>
                        <p>{ developer.name }</p>
                        <p>{ developer.email }</p>
                    </div>

                    <button
                     onClick = {()=>props.onDeleteDev(developer)}
                     className="contact-remove"
                     ></button>
                </li>

            )) }
        </ol>
    );
}

DeveloperList.propTypes = {
    developerlist: PropTypes.array.isRequired,
    onDeleteDev: PropTypes.func.isRequired
}

//exporting Component
export default DeveloperList;