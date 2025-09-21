import React, { useState } from 'react';
import axios from 'axios';

export default function AllocationReview({ paymentId }) {
  const [review, setReview] = useState(null);
  const [error, setError] = useState(null);

  const handleReview = async () => {
    try {
      const res = await axios.get(`/api/allocate/debug/${paymentId}`);
      setReview(res.data);
      setError(null);
    } catch (e) {
      setError(e.response?.data?.error || 'Error fetching allocation');
    }
  };

  return (
    <div>
      <button onClick={handleReview}>Review Allocation</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {review && (
        <pre>{JSON.stringify(review, null, 2)}</pre>
      )}
    </div>
  );
}
