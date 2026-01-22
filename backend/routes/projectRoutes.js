const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Get all projects for user
router.get('/user/:userId', async (req, res) => {
    try {
        const { status } = req.query;
        let query = { user: req.params.userId };
        
        if (status) query.status = status;
        
        const projects = await Project.find(query)
            .populate('product')
            .sort({ lastEdited: -1 });
        
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get single project
router.get('/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id)
            .populate('product')
            .populate('user', 'firstName lastName email');
        
        if (!project) return res.status(404).json({ message: 'Project not found' });
        res.json(project);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create new project
router.post('/', async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        await project.populate('product');
        
        res.status(201).json(project);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update project
router.put('/:id', async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(
            req.params.id,
            { ...req.body, lastEdited: Date.now() },
            { new: true }
        ).populate('product');
        
        if (!project) return res.status(404).json({ message: 'Project not found' });
        res.json(project);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update project status
router.patch('/:id/status', async (req, res) => {
    try {
        const { status } = req.body;
        const project = await Project.findByIdAndUpdate(
            req.params.id,
            { status, lastEdited: Date.now() },
            { new: true }
        );
        
        if (!project) return res.status(404).json({ message: 'Project not found' });
        res.json(project);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Duplicate project
router.post('/:id/duplicate', async (req, res) => {
    try {
        const originalProject = await Project.findById(req.params.id);
        if (!originalProject) return res.status(404).json({ message: 'Project not found' });
        
        const duplicatedProject = new Project({
            ...originalProject.toObject(),
            _id: undefined,
            name: originalProject.name + ' (Copy)',
            createdAt: undefined,
            updatedAt: undefined
        });
        
        await duplicatedProject.save();
        await duplicatedProject.populate('product');
        
        res.status(201).json(duplicatedProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete project
router.delete('/:id', async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if (!project) return res.status(404).json({ message: 'Project not found' });
        
        res.json({ message: 'Project deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
