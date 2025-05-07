import React, { useState, useEffect } from 'react';
import LessonForm from './components/LessonForm';
import LessonList from './components/LessonList';
import './App.css';

function App() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetch('/api/lessons')
      .then(res => res.json())
      .then(data => setLessons(data));
  }, []);

  return (
    <div className="App">
      <h1>CourseGPT - AI Course Authoring</h1>
      <LessonForm setLessons={setLessons} />
      <LessonList lessons={lessons} />
    </div>
  );
}

export default App;
