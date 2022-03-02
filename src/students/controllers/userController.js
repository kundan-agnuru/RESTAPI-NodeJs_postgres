const { response } = require('express');
const pool = require('../../../db');
const queries = require('../models/userQuery');

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows); 
    });
};

const addUser = (req, res) => {
    const {id,fname,lname,club} = req.body;

    //check for duplicates
    pool.query(queries.checkUserExists, [parseInt(id)],(error, results)=>{
        if(results.rows.length){
            res.send("id already exists");
        }
        //add User to DB
        pool.query(queries.addUser, [id, fname, lname, club],(error, results)=>{
            if(error) throw error;
            res.status(201).send("User created successfully");
        });
    });
};

const getUserById = (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById, [id], (error, results)=>{
      if(error) throw error;
      res.status(200).json(results.rows);      
    });
};

const deleteUser = (req, res) =>{
    const id = parseInt(req.params.id);

    pool.query(queries.getUserById, [id], (error, results) =>{
        const noUSerFound = !results.rows.length;
        if(noUSerFound){
            res.send("User doesn't exit in database.");
        }
        pool.query(queries.deleteUser, [id], (error, results)=>{
            if(error) throw error;
            res.status(200).send("User deleted Successfully.");
        });
    });
};

const updateUser = (req, res) =>{
    const id = parseInt(req.params.id);
    const {lname} = req.body;

    pool.query(queries.getUserById, [id], (error, results)=>{
        const noUSerFound = !results.rows.length;
        if(noUSerFound){
            res.send("User doesn't exit in database.");
        } 
        pool.query(queries.udpdateUser, [lname,id], (error, results)=>{
            if(error) throw error;
            res.status(200).send("User Updated Successfully");
        });       
    });
};

module.exports = {
    getUsers,
    getUserById,
    addUser,
    deleteUser,
    updateUser,
};