import React from "react";

import Navbar from "./navbar/Navbar";

const LandingPage = () => {
    return (
        <div className="container-fluid">
            <header>
                <Navbar />
                <div id="intro" class="view">
                    <div class="mask rgba-black-strong">
                        <div class="container-fluid align-items-center justify-content-center h-100">
                            <div class="row d-flex justify-content-center text-center">
                                <div className="col-md-10">
                                    <h2 class="display-4 font-weight-bold white-text pt-5 mb-2">
                                        MusicChord
                                    </h2>
                                    {/* <!-- Divider --> */}
                                    <hr class="hr-light" />
                                </div>
                            </div>
                            <div class="row d-flex justify-content-center text-center">
                                {/* <div className="col-md-6">
                                    <img
                                        className="img"
                                        src="./AppShot.png"
                                        alt=""
                                    />
                                </div> */}
                                <div class="col-md-10">
                                    {/* <!-- Heading --> */}

                                    {/* <!-- Description --> */}

                                    <h4 class="white-text my-4">
                                        where you can belong to a school club, a
                                        gaming group, or a worldwide art
                                        community. Where just you and a handful
                                        of friends can spend time together. A
                                        place that makes it easy to talk every
                                        day and hang out more often.
                                    </h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default LandingPage;
