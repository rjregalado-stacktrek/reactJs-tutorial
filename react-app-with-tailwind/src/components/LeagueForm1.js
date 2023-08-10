import React, { Component } from 'react';
import './LeagueForm.css'; // Import your CSS file

class LeagueForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leagueId: '',
            leagueName: '',
            userId: '',
            selectedDate: '',
            isPopupOpen: false, // State to control pop-up visibility
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data:', this.state);
        // You can perform further actions here, such as sending the form data to a server.
    }

    render() {
        return (
            <div className="flex items-center justify-center h-screen">
                <button
                    onClick={() => this.setState({ isPopupOpen: true })}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Open Form
                </button>

                {this.state.isPopupOpen && (
                    <div className="popup">
                        <div className="popup-inner">
                            <button onClick={() => this.setState({ isPopupOpen: false })} className="close-button">
                                Close
                            </button>
                            <h2 className="text-2xl font-semibold mb-4">League Data Form</h2>
                            <form onSubmit={this.handleSubmit} className="space-y-4">
                                <label htmlFor="leagueId" className="block font-medium">
                                League ID:
                                <input
                                    type="text"
                                    id="leagueId"
                                    name="leagueId"
                                    value={this.state.leagueId}
                                    onChange={this.handleInputChange}
                                    className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                                    required
                                />
                                </label>

                                <label htmlFor="leagueName" className="block font-medium">
                                    League Name:
                                    <input
                                        type="text"
                                        id="leagueName"
                                        name="leagueName"
                                        value={this.state.leagueName}
                                        onChange={this.handleInputChange}
                                        className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                                        required
                                    />
                                </label>

                                <label htmlFor="userId" className="block font-medium">
                                    User ID:
                                    <input
                                        type="text"
                                        id="userId"
                                        name="userId"
                                        value={this.state.userId}
                                        onChange={this.handleInputChange}
                                        className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                                        required
                                    />
                                </label>

                                <label htmlFor="date" className="block font-medium">
                                    Select a Date:
                                    <input
                                        type="date"
                                        id="date"
                                        name="selectedDate"
                                        value={this.state.selectedDate}
                                        onChange={this.handleInputChange}
                                        className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
                                        required
                                    />
                                </label>

                                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default LeagueForm;
