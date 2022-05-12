const express = require("express")
const router = new express.Router()
const StudentMarks = require("../models/student")

router.post('/', async (req, res) => {
    try {
        const {name, rollNo, AI, WAD, CNS, DSBDA} = req.body;
        const student = new StudentMarks({
            name, rollNo, AI, WAD, CNS, DSBDA
        })
        await student.save()
        return res.status(200).json(student)
    } catch (error) {
        console.log(error.message)
    }
})

// To get count of students alog with all documents
router.get('/count', async (req, res) => {
    try {
        const students = await StudentMarks.find({})

        console.log(students.length)

        // return res.status(200).json(students)
        res.render('index', {count: students.length, studentlist : students})
    } catch (error) {
        console.log("Error message")
    }
})

// Students who got more than 20 in DSBDA
router.get('/dsbda', async (req, res) => {
    try {
        const students = await StudentMarks.find({DSBDA: {$gt: 20}})
        console.log(students)
        res.render('e', {students: students})
    }catch (e) {
        console.log(e.message)
    }
})

// @route : Update the marks of Specified students by 10.
router.post("/:rollNo" , async(req , res)=>{
    try {
        let student = await StudentMarks.findOne({rollNo: req.params.rollNo})
        console.log(req.params.rollNo)

        if(!student){
            return res.status(400).json({msg : "Student does not exists"})
        }
        student.DSBDA += 10;
        student.CNS+=10
        student.AI+=10
        student.WAD+=10

        await student.save()

        return res.json(student)
    } catch (error) {
        console.log(error)
    }
})

// Remove specified student
// @route: Remove specified student document from collection.
router.delete("/:id" , async(req , res)=>{
    try {
        let student = await StudentMarks.findByIdAndDelete(req.params.id)

        if(!student){
            return res.status(400).json({msg : "Student does not exists"})
        }
        
        return res.json(student)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router