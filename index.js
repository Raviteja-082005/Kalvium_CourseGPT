const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const OpenAI = require('openai');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const Lesson = require('./models/Lesson');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.post('/api/generate-lesson', async (req, res) => {
    const { topic } = req.body;

    if (!topic) {
        return res.status(400).json({ error: 'Topic is required' });
    }

    try {
        const prompt = `Generate a detailed lesson on the topic "${topic}" with title, description, outcomes, key concepts, and activities.`;

        const response = await openai.completions.create({
            model: 'text-davinci-003',
            prompt,
            max_tokens: 500,
        });

        const lessonContent = response.choices[0]?.text?.trim();

        if (!lessonContent) {
            return res.status(500).json({ error: 'Failed to generate lesson content' });
        }

        const lesson = new Lesson({ topic, content: lessonContent });
        await lesson.save();

        res.json(lesson);
    } catch (err) {
        console.error('Error generating lesson:', err);
        res.status(500).send('Error generating lesson');
    }
});

app.get('/api/lessons', async (req, res) => {
    try {
        const lessons = await Lesson.find();
        res.json(lessons);
    } catch (err) {
        console.error('Error fetching lessons:', err);
        res.status(500).send('Error fetching lessons');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
