import {Router} from 'express'
import {body, oneOf, validationResult} from 'express-validator'
import { handleInputErrors } from './modules/middleware'

const router = Router()

//products
router.get('/product', (req, res) => {
    res.json({message: 'hello product'})
})
router.get('/product/:id', () => {})

//update
router.put('/product/:id', body('name').isString, handleInputErrors,(req, res) => {
    

})

//create
router.post('/product', body('name').isString, handleInputErrors,(req, res) => {
    
})

//delete
router.delete('/product/:id', () => {})

/**
 * Update
 */

router.get('/update', () => {})
router.get('/update/:id', () => {})

//update
router.put('/update/:id', 
    body('title').optional(), 
    body('body').optional(), 
    body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
    body('version').optional(), 
    () => {

    }
)

//create
router.post('/update', () => {})

//delete
router.delete('/update/:id', 
    body('title').exists().isString(), 
    body('body').exists().isString(),
    () => {

    })

/**
 * Update Points
 */

router.get('/updatepoint', () => {})
router.get('/updatepoint/:id', () => {})

//update
router.put('/updatepoint/:id', 
    body('name').optional().isString(),
    body('description').optional().isString(),
    () => {}
)

//create
router.post('/updatepoint',
    body('name').isString(),
    body('description').isString(),
    body('updateId').exists().isString(),
    () => {}
)

//delete
router.delete('/updatepoint/:id', () => {})

export default router