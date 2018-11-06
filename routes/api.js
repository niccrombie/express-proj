const express = require('express')
const router = express.Router()

const Student = require('../models/Student.js')
const School = require('../models/School.js')

router.get('/student', (req, res) => {
    //const query = req.query
    let fileters = req.query
    if (req.query.grade != null){
        filters = {
            grade: {
                $gt: req.query.grade
            }
        }
    }
    Student.find(filters)
    .then(student => {
        res.json({
            confirmation: 'success',
            data: student
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: 'Student ' + id + ' not found.'
        })
    })
})

// 
router.get('/grade/:id', (req, res) => {
    const id = req.params.id
    Student.findById(id)
    .then(profile => {
        res.json({
            confirmation: 'success',
            data: student
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
    res.json({
        confirmation: 'success',
        data: id
    })
})

router.get('/school', (req, res) => {
    let filters = req.query
    /*if (req.query.grade != null){
        filters = {
            grade: {
                $gt: req.query.grade
            }
        }
    }*/
    School.find(filters)
    .then(school => {
        res.json({
            confirmation: 'success',
            data: school
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})

router.post('/student', (req, res) => {
    res.json({
        confirmation: 'success',
        data: req.body
    })
})

module.exports = router
