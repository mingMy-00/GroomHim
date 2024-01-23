import React from 'react';

function progressBar({ progress, totalQuestions }) {

    const ratio = totalQuestions > 0 ? (progress / totalQuestions) * 100 : 0;

    return(
        <div className='progress-bar' role='progress'>
            <div className='progress-bar-fill' style={{ width: `${ratio}%` }}></div>
        </div>
    );
}
export default progressBar;