const express = require('express')
const router = express.Router()
const Student = require('../models/Student.js')
const School = require('../models/School.js')

//request school entity
router.get('/school', (req, res) => {
    let filters = req.query
    if (req.query.usd != null){
        filters = {
            grade: {
                $gt: req.query.usd
            }
        }
    }
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
            message: 'School ' + id + ' not found.'
        })
    })
})

//request school update
router.get('/school/update', (req, res) => {
    const query = req.query
    const schoolId = query.id
    delete query['id']
    School.findByIdAndUpdate(schoolId, query, {new:true})
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

//remove school entity
router.get('/school/remove', (req, res) => {
    const query = req.query
    
    School.findByIdAndRemove(query.id)
    .then(data => {
        res.json({
            confirmation: 'success',
            data: 'School ' +query.id+ ' successfully removed'
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})

//request school id by grade
router.get('/grade/:id', (req, res) => {
    const id = req.params.id
    School.findById(id)
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
    res.json({
        confirmation: 'success',
        data: id
    })
})

//request school entity
router.get('/school', (req, res) => {
    let filters = req.query
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

// create school entity
router.post('/school', (req, res) => {
    School.create(req.body)
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

module.exports = router