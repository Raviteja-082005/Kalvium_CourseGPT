import React from 'react';

function LessonList({ lessons }) {
  return (
    <div>
      <h2>Generated Lessons</h2>
      {lessons.map(lesson => (
        <div key={lesson._id}>
          <h3>{lesson.topic}</h3>
          <pre>{lesson.content}</pre>
        </div>
      ))}
    </div>
  );
}

export default LessonList;
