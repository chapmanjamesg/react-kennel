import React, { Component } from 'react'

class OwnerCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h2>Owners that love us!</h2>
                    <h3>Name: <span className="card-ownerName">Dave Chapelle</span></h3>
                    <p>Dog: Doodles<br />
                        Special instructions: He asked that we give Doodles a bubble bath and take him to the groomer on tuesdays.
                    </p>
                </div>
            </div>
        )
    }
}

export default OwnerCard