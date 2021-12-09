const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand d-flex" href="/home">
                    <img
                        className="mx-2 img-fluid"
                        width="40"
                        src="https://www.shareicon.net/data/512x512/2015/12/06/683326_music_512x512.png"
                        alt="logo"
                    />
                    <h1 className="h3 ms-2">Music Chord</h1>
                </a>
                <div className="btn-row">
                    <button
                        className="btn"
                        type="button"
                        onClick={() => {
                            // TODO not proper way
                            if (localStorage.length !== 0) {
                                window.open("./main", "_self");
                            } else {
                                window.open("./signup", "_self");
                            }
                        }}
                    >
                        Sign Up
                    </button>
                    <button
                        className="btn"
                        type="button"
                        onClick={() => {
                            // TODO not proper way
                            if (localStorage.length !== 0) {
                                window.open("./main", "_self");
                            } else {
                                window.open("./signin", "_self");
                            }
                        }}
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
