const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the schema for HOD
const hodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

// Hash password before saving it to the database
hodSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// Create method to compare passwords
hodSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const Hod = mongoose.model('Hod', hodSchema);

module.exports = Hod;
