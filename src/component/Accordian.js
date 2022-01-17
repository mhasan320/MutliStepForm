import React from 'react';

export const Accordian = ({summary, details, id, collapse, go}) => {
    return (
        <div className="accordion" id="accordionExample">
                <div className="accordion-item bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id={id}>
                    <button
                        className="
                        accordion-button
                        relative
                        flex
                        items-center
                        w-full
                        py-4
                        px-5
                        text-base text-gray-800 text-left
                        bg-white
                        border-0
                        rounded-none
                        transition
                        focus:outline-none
                        "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapse}`}
                        aria-expanded="true"
                        aria-controls={collapse}
                    >
                       {summary}
                    </button>
                    </h2>
                    <div
                    id={collapse}
                    className="accordion-collapse collapse"
                    aria-labelledby={id}
                    data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body py-4 px-5">
                            {details.map((data, index) => {
                                const objKey = Object.keys(data)[0];
                                const objValue = data[Object.keys(data)[0]];
                                    return (
                                        <ul key={index}>
                                            <li>{`${objKey} : ${objValue}`}</li>
                                        </ul>
                                    )
                            })}
                            <button 
                            className=" w-2/4 mr-4 py-2 px-4 uppercase font-lg text-black"
                            onClick={() => go(`${summary.toLowerCase()}`)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}
