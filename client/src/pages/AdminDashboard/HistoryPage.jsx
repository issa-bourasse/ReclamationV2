import React, { useState, useEffect } from 'react';
import NavBar from "../../components/NavBar";
import styles from "../../styles/Component.module.css";

function HistoryPage() {
    const [historyData, setHistoryData] = useState([]);
    const [selectedRequest, setSelectedRequest] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/history")
            .then(response => response.json())
            .then(data => setHistoryData(data.history))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleDetailsClick = (request) => {
        setSelectedRequest(request);
    };

    return (
        <>
            <NavBar />
            <div className={styles.container}>
                {selectedRequest && (
                    <div className={styles["popup-details"]}>
                        <h2 className={`${styles["title-lg"]} ${styles["font-semibold"]} ${styles["mb-4"]}`}>
                            Details for Request ID: {selectedRequest.id}
                        </h2>
                        <table className={styles["details-table"]}>
                            <tbody>
                                <tr>
                                    <td>Full Name:</td>
                                    <td>{selectedRequest.fullName}</td>
                                </tr>
                                <tr>
                                    <td>Department:</td>
                                    <td>{selectedRequest.department}</td>
                                </tr>
                                <tr>
                                    <td>Lab Number:</td>
                                    <td>{selectedRequest.labNumber}</td>
                                </tr>
                                <tr>
                                    <td>Post Number:</td>
                                    <td>{selectedRequest.postNumber}</td>
                                </tr>
                                {/* Add more details as needed */}
                            </tbody>
                        </table>
                        <button className={styles["button-primary"]} onClick={() => setSelectedRequest(null)}>
                            Close
                        </button>
                    </div>
                )}
                <h1 className={`${styles["title-lg"]} ${styles["font-semibold"]} ${styles["mb-4"]}`}>History</h1>
                <table className={styles["request-table"]}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Department</th>
                            <th>Lab Number</th>
                            <th>Post Number</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historyData.map((request, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{request.fullName}</td>
                                <td>{request.department}</td>
                                <td>{request.labNumber}</td>
                                <td>{request.postNumber}</td>
                                <td>
                                    <button className={styles["button-secondary"]} onClick={() => handleDetailsClick(request)}>
                                        Details
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

export default HistoryPage;
