import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    progress: { type: String, enum: ['Not Started', 'In Progress', 'Completed'], default: 'Not Started' },
    dueDate: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

export const Task = mongoose.model('Task', taskSchema);

export { taskSchema };

