import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import './css/View.css';

const View = () => {
  const [ngoList, setNgoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ngoName, setNgoName] = useState(''); // State for NGO name input

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get('https://localhost:8443/ngo/list');
        setNgoList(response.data);
      } catch (error) {
        setError(error.message || 'Failed to fetch NGO data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNgoChange = (event) => {
    setNgoName(event.target.value);
  };

  const handleFetchNgo = async () => {
    if (!ngoName) return; // Prevent unnecessary API calls for empty name

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://localhost:8443/ngo/${ngoName}/info`
      );
      setNgoList([response.data]); // Update list with single fetched NGO
    } catch (error) {
      setError(error.message || 'Failed to fetch NGO data');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="view-container">
      {isLoading && <p className="loading-message">Loading NGO data...</p>}
      {error && <p className="error-message">{error}</p>}

      <input
        type="text"
        placeholder="Enter NGO name"
        value={ngoName}
        onChange={handleNgoChange}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            handleFetchNgo();
          }
        }}
        className="input-field"
      />

      {ngoList.length > 0 && (
        <table className="ngo-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {ngoList.map((ngo) => (
              <tr key={ngo.id}>
                <td>{ngo.firstName}</td>
                <td>{ngo.lastName}</td>
                <td>{ngo.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {ngoList.length === 0 && (
        <p className="no-data-message">No NGO data found.</p>
      )}
    </div>
  );
};

export default View;
