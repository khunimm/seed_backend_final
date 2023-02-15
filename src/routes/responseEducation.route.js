const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const responseEducationService = require('../service/responseEducation.service')

router.get('/findAll', async (req, res) => {
    try {
        console.log('test');
        // console.log('news route');
        res.json(await responseEducationService.findAll(req.query));
    } catch (error) {
        res.json(error);
    }
})

router.post('/requestResponseEducation', async (req, res) => {
    try {
        // console.log(req.files)
        var folder_path = path.join(__dirname, '../public/responseEducation/' + req.body.s_id);
        fs.mkdir(folder_path,async  (err) => {
            if (err) {
                // return console.error(err);
                fs.readdir(folder_path, (err, files) => {
                    if (err) throw err;

                    for (const file of files) {
                        fs.unlink(path.join(folder_path, file), (err) => {
                            if (err) throw err;
                        });
                    }
                    // console.log('del')
                });
            }
            // console.log('Directory created successfully!');
            //continue
            // console.log('1')
            var date = new Date().toISOString();
            const file = req.files.file
            var filepath = `/../public/responseEducation/` + req.body.s_id + '/' + date + "_" + file.name;
            // console.log('2')
            // console.log(filepath);
            file.mv(`${__dirname}${filepath}`, function (err, result) { })
            // console.log('3')
            res.json(await responseEducationService.requestResponseEducation(req.body, filepath));
        });


    } catch (error) {
        res.json(error);
    }
})


module.exports = {
    router
}