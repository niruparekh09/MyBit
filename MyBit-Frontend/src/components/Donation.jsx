import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import './css/Donation.css';

const Donation = () => {
  const [donationList, setDonationList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          'https://localhost:8443/donation/list'
        );
        setDonationList(response.data);
      } catch (error) {
        setError(error.message || 'Failed to fetch donation data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading donation data...</p>}
      {error && <p className="error">{error}</p>}
      {donationList.length > 0 && (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Donor Name</th>
              <th>Type</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {donationList.map((donation) => (
              <tr key={donation.donorName}>
                <td>{donation.donorName}</td>
                <td>{donation.type}</td>
                <td>{donation.qty}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      {donationList.length === 0 && <p>No donation data found.</p>}
    </div>
  );
};

export default Donation;
