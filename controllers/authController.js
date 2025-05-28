const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const users = require('../models/Utilisateur');

const SECRET = process.env.JWT_SECRET || 'supersecret';

exports.inscription = async (req, res) => {

    const { email, password } = req.body;
    const existing = users.find(u => u.email === email);
    if(existing) return res.status(400).json({message: 'Utilisateur existe déjà'});

    try {
         const hashed = await bcrypt.hash(password, 10);
        const user = new User({email, password: hashed});
        await user.save();
        res.status(201).json({message: 'Inscription réussie'});
    }
    catch(error) {
        if(error.code === 11000) {
            return res.status(400).json({message: 'Cet email est déjà utilisé.'});
        }
        res.status(500).json({message: error.message});
    }
   
}

exports.connexion = async (req, res) => {

    const {email, password} = req.body;
    const user = user.find(u => u.email === email);
    if(!user) return res.status(400).json({message: 'Utilisateur introuvable'});

    const match = await bcrypt.compare(password, user.password);
    if(!match) return res.status(401).json({message: 'Mot de passe incorrect'});

    const token = jwt.sign({email: user.mail}, SECRET, {expiresIn: '1h'});
    res.json({token});
    
}