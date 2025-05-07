import React, { useState } from 'react';

function LessonForm({ setLessons }) {
  const [topic, setTopic] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('/api/generate-lesson', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic }),
    });
    const newLesson = await res.json();
    setLessons(prev => [...prev, newLesson]);
    setTopic('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={topic} onChange={e => setTopic(e.target.value)} placeholder="Enter topic" />
      <button type="submit">Generate Lesson</button>
    </form>
  );
}

export default LessonForm;
