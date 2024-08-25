const {body} = require('express-validator')

exports.validatorForAddMarkMethod  = [
    body('discipline_id','Заполните все обязательные поля!').toInt().isInt(),
    body('class_id','Заполните все обязательные поля!').notEmpty().toInt().isInt(),
    body('liter_class').escape().trim(),
    body('source_id','Заполните все обязательные поля!').toInt().isInt(),
    body('id_teacher','Заполните все обязательные поля!').notEmpty().trim(),
    body('school_id','Заполните все обязательные поля!').notEmpty().toInt().isInt(),
    body('project_id','Заполните все обязательные поля!').notEmpty().toInt().isInt(),
    body('thema','Заполните все обязательные поля!').notEmpty().escape().trim(),
    body('k_2_1','Заполните все обязательные поля!').toInt().isInt(),
    body('k_2_2','Заполните все обязательные поля!').toInt().isInt(),
    body('k_2_3','Заполните все обязательные поля!').toInt().isInt(),
    body('k_2_4','Заполните все обязательные поля!').toInt().isInt(),
    body('k_2_5','Заполните все обязательные поля!').toInt().isInt(),
    body('k_2_6','Заполните все обязательные поля!').toInt().isInt(),
    body('k_2_7','Заполните все обязательные поля!').toInt().isInt(),
    body('k_2_8','Заполните все обязательные поля!').toInt().isInt(),
    body('k_2_9','Заполните все обязательные поля!').toInt().isInt(),
    body('k_2_10','Заполните все обязательные поля!').toInt(),
    body('k_2_11','Заполните все обязательные поля!').toInt(),
    body('k_2_12','Заполните все обязательные поля!').toInt().isInt(),
    body('k_2_13','Заполните все обязательные поля!').toInt().isInt(),
    body('k_2_14','Заполните все обязательные поля!').toInt().isInt(),
    body('k_2_15','Заполните все обязательные поля!').toInt().isInt(),
    body('k_2_16','Заполните все обязательные поля!').toInt().isInt(),
    body('k_2_17','Заполните все обязательные поля!').toInt().isInt(),
    body('k_2_18','Заполните все обязательные поля!').toInt().isInt(),
    body('k_2_19','Заполните все обязательные поля!').toInt(),
    body('k_2_20','Заполните все обязательные поля!').toInt(),
    body('k_2_21','Заполните все обязательные поля!').toInt().isInt(),
    body('k_2_22','Заполните все обязательные поля!').toInt().isInt(),


    // body('total_experience').custom( (value, {req}) => {
    //     if(parseInt(value) < parseInt(req.body.teaching_experience)) {
    //         throw new Error('Общий стаж не может быть меньше педагогического')
    //     }
    // })

]