import React, { useState, useEffect } from 'react';
import NavBar from "../../components/NavBar";
import  "../../styles/adminHome.css";
import { RiCheckboxCircleFill, RiAlertFill } from 'react-icons/ri';

function AdminDashboard() {
    const [totalFinishedRequests, setTotalFinishedRequests] = useState(0);
    const [totalUnfinishedRequests, setTotalUnfinishedRequests] = useState(0);
    const [lastThreeRequests, setLastThreeRequests] = useState([]);

    useEffect(() => {
        // Fetch total finished requests
        fetch("http://localhost:5000/history")
            .then(response => response.json())
            .then(data => setTotalFinishedRequests(data.history.length))
            .catch(error => console.error('Error fetching history data:', error));

        // Fetch total unfinished requests
        fetch("http://localhost:5000/reclamations")
            .then(response => response.json())
            .then(data => setTotalUnfinishedRequests(data.reclamations.length))
            .catch(error => console.error('Error fetching reclamations data:', error));

        // Fetch last three requests
        fetch("http://localhost:5000/history")
            .then(response => response.json())
            .then(data => setLastThreeRequests(data.history.slice(-3).reverse()))
            .catch(error => console.error('Error fetching last three requests:', error));
    }, []);

    return (
        <>
        <NavBar />
        <div className="container">
            <h1 className="title-lg">Dashboard</h1>
            <div className="dashboard-blocks">
                <div className="dashboard-block">
                    <h2>Total Finished Requests: {totalFinishedRequests}</h2>
                </div>
                <div className="dashboard-block">
                    <h2>Total Unfinished Requests: {totalUnfinishedRequests}</h2>
                </div>
                <div className="dashboard-block">
                    <h2>Requests Chart</h2>
                </div>
            </div>
            <div className="last-three-requests">
                <h2>Last Three Requests</h2>
                <table className="last-three-requests-table">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Department</th>
                            <th>Lab Number</th>
                            <th>Post Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lastThreeRequests.map((request, index) => (
                            <tr key={index}>
                                <td>{request.fullName}</td>
                                <td>{request.department}</td>
                                <td>{request.labNumber}</td>
                                <td>{request.postNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>
);
}

export default AdminDashboard;
