const express = require('express');
const router = express.Router();
const { mockData, generateId } = require('./mockData');

// Get all projects for user
router.get('/user/:userId', (req, res) => {
    let projects = mockData.projects.filter(p => p.user === req.params.userId);
    
    const { status } = req.query;
    if (status) {
        projects = projects.filter(p => p.status === status);
    }
    
    res.json(projects.sort((a, b) => new Date(b.lastEdited) - new Date(a.lastEdited)));
});

// Get single project
router.get('/:id', (req, res) => {
    const project = mockData.projects.find(p => p._id === req.params.id);
    if (!project) {
        return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
});

// Create new project
router.post('/', (req, res) => {
    const newProject = {
        _id: generateId('proj'),
        ...req.body,
        status: 'In Progress',
        lastEdited: new Date().toISOString(),
        createdAt: new Date().toISOString()
    };
    
    mockData.projects.push(newProject);
    res.status(201).json(newProject);
});

// Update project
router.put('/:id', (req, res) => {
    const projectIndex = mockData.projects.findIndex(p => p._id === req.params.id);
    if (projectIndex === -1) {
        return res.status(404).json({ message: 'Project not found' });
    }
    
    mockData.projects[projectIndex] = {
        ...mockData.projects[projectIndex],
        ...req.body,
        lastEdited: new Date().toISOString()
    };
    
    res.json(mockData.projects[projectIndex]);
});

// Update project status
router.patch('/:id/status', (req, res) => {
    const projectIndex = mockData.projects.findIndex(p => p._id === req.params.id);
    if (projectIndex === -1) {
        return res.status(404).json({ message: 'Project not found' });
    }
    
    mockData.projects[projectIndex].status = req.body.status;
    mockData.projects[projectIndex].lastEdited = new Date().toISOString();
    
    res.json(mockData.projects[projectIndex]);
});

// Duplicate project
router.post('/:id/duplicate', (req, res) => {
    const project = mockData.projects.find(p => p._id === req.params.id);
    if (!project) {
        return res.status(404).json({ message: 'Project not found' });
    }
    
    const duplicatedProject = {
        ...project,
        _id: generateId('proj'),
        name: project.name + ' (Copy)',
        lastEdited: new Date().toISOString(),
        createdAt: new Date().toISOString()
    };
    
    mockData.projects.push(duplicatedProject);
    res.status(201).json(duplicatedProject);
});

// Delete project
router.delete('/:id', (req, res) => {
    const projectIndex = mockData.projects.findIndex(p => p._id === req.params.id);
    if (projectIndex === -1) {
        return res.status(404).json({ message: 'Project not found' });
    }
    
    mockData.projects.splice(projectIndex, 1);
    res.json({ message: 'Project deleted successfully' });
});

module.exports = router;
