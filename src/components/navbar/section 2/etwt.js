import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import '../section 2/etwt.css'

function etwt() {
    return (
        <>
            <div className="bg-iamge">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="common_bannner_text">   
                                <h2>News</h2>
                                <ul className='d-flex flex-wrap justify-content-center p-0'>
                                    <li className='first_li'>
                                        <a href="/home" className="first_li_a">Home</a>
                                    </li>
                                    <li className='second_li'>
                                        <span>
                                            <GoPrimitiveDot />
                                        </span>News
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default etwt