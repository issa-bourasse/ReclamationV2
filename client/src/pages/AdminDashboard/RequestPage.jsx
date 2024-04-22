import React, { useState, useEffect } from 'react';
import NavBar from "../../components/NavBar";
import styles from "../../styles/Component.module.css";

function RequestPage() {
    const [requestsData, setRequestsData] = useState([]);
    const [selectedRequest, setSelectedRequest] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/reclamations")
            .then(response => response.json())
            .then(data => {
                const updatedData = data.reclamations.map(item => ({
                    ...item,
                    status: "start",
                }));
                setRequestsData(updatedData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleDetailsClick = request => {
        setSelectedRequest(request);
    };

    const handleButtonClick = id => {
        // Make a POST request to update the status of the request to "completed"
        fetch(`http://localhost:5000/reclamations/${id}/complete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        })
        .then(response => {
            if (response.ok) {
                // Remove the completed request from the list
                setRequestsData(prevData => prevData.filter(request => request.id !== id));
            } else {
                throw new Error('Failed to complete request');
            }
        })
        .catch(error => console.error('Error completing request:', error));
    };

    return (
        <>
            <NavBar />
            <div className={styles.container}>
                {selectedRequest && (
                    <div className={styles["popup-details"]}>
                        {/* Details for selected request */}
                        <h2 className={styles["title-lg"]}>Request Details</h2>
                        <p><strong>Full Name:</strong> {selectedRequest.fullName}</p>
                        <p><strong>Department:</strong> {selectedRequest.department}</p>
                        <p><strong>Lab Number:</strong> {selectedRequest.labNumber}</p>
                        <p><strong>Post Number:</strong> {selectedRequest.postNumber}</p>
                        <p><strong>Nature of Panne:</strong> {selectedRequest.natureOfPannee}</p>
                        <p><strong>Description:</strong> {selectedRequest.description}</p>
                        <button className={styles["button-secondary"]} onClick={() => setSelectedRequest(null)}>Close</button>
                        
                    </div>
                )}
                <h1 className={`${styles["title-lg"]} ${styles["font-semibold"]} ${styles["mb-4"]}`}>Requests</h1>
                <table className={styles["request-table"]}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Department</th>
                            <th>Lab Number</th>
                            <th>Post Number</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requestsData.map((request, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{request.fullName}</td>
                                <td>{request.department}</td>
                                <td>{request.labNumber}</td>
                                <td>{request.postNumber}</td>
                                <td>
                                    <button
                                        className={styles["button-secondary"]}
                                        onClick={() => handleDetailsClick(request)}
                                    >
                                        Details
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn"
                                        onClick={() => handleButtonClick(request.id)}
                                    >
                                        Complete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default RequestPage;
