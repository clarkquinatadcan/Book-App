import React, { PureComponent } from 'react'


const SearchBanner = ({passTerm, passonChange}) => {

        // console.log(this.props.passonChange);
        // console.log(passTerm);
        return(
            <div className="HomeSearch py-5">
                <div className="container">
                    <h1 className="text-center">Lorem Ipsum</h1>
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-6">
                            <form>
                                <input 
                                    className="form-control" 
                                    placeholder="Search Books..." 
                                    value={passTerm} 
                                    onChange={(value) => passonChange(value)}
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