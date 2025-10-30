const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API route for health check
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'success', 
        message: 'نظام إدارة الموارد البشرية يعمل بشكل صحيح',
        timestamp: new Date().toISOString(),
        version: '1.0.0'
    });
});

// Serve static files
app.use(express.static('.'));

// Fallback for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log('🚀 نظام إدارة الموارد البشرية يعمل بنجاح!');
    console.log(`📊 العنوان: http://localhost:${PORT}`);
    console.log(`⏰ الوقت: ${new Date().toLocaleString()}`);
    console.log('🌈 جاهز للاستخدام...');
});