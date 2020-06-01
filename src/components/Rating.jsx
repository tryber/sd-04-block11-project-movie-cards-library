import React from 'react';
// implement Rating component here

class Rating extends React.Component {
    render() {
        // const { rating } = this.props.rating;
        return (
            <>
                <span>{this.props.rating}</span>
            </>
        )
    }
}

export default Rating;