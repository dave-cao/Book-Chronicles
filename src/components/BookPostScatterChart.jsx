import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`${payload[0].payload.formatted_date}`}</p>
        <p><b>{`${payload[0].payload.title}`}</b></p>
        <p>{`Word Count: ${payload[0].payload.word_count}`}</p>
      </div>
    );
  }

  return null;
};

const BookPostScatterChart = ({ bookPosts }) => {
  const totalWords = bookPosts.reduce((total, current) => total + current.word_count, 0)
  return (
    <div className='outer-dashboard-container'>
      <div className='dashboard-container'>
        <h1 className='dashboard-title'><span className='pastel-orange'>Your</span> Dashboard</h1>
        <div className='total-counters'>
          <h3>Total Posts: <span className='pastel-orange'>{bookPosts.length}</span></h3>
          <h3>Total Words: <span className='pastel-orange'>{totalWords}</span></h3>
        </div>

        <h2 className='chart-title'>Word Count Per Post</h2>
        <div className='chart-container'>
          <ResponsiveContainer width="100%" height={300} minWidth={300}>
            <LineChart data={bookPosts} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <Line type="monotone" dataKey="word_count" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="formatted_date_day_only" type="category" interval={0} tick={{ fontSize: 10 }} padding={{ top: 10, right: 20, bottom: 10, left: 20 }} />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div >
  );
};

export default BookPostScatterChart;
