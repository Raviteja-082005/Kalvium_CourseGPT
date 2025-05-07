const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
    topic: String,
    content: String,
});

module.exports = mongoose.model('Lesson', LessonSchema);
