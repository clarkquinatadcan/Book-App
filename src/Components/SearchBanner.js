import React, { PureComponent } from 'react'


const SearchBanner = ({passTerm, passonChange}) => {

        // console.log(this.props.passonChange);
        // console.log(passTerm);
        return(
            <div className="HomeSearch">
                <div className="container">
                    <h1 className="text-center text-white">Lorem Ipsum</h1>
                    <p className="text-center text-white">You chance to study free tutorial pdf</p>
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-6">
                            <form>
                                <input 
                                    className="form-control" 
                                    placeholder="Search Books..." 
                                    value={passTerm} 
                                    onChange={(e) => passonChange(e.target.value)}
                                />
                            </form>
                        </div>
                        <p></p>
                    </div>
                </div>
            </div>
        )
}

export default SearchBanner