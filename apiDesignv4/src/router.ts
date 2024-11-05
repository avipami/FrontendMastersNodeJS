import {Router} from 'express'

const router = Router()

//products
router.get('/product', (req, res) => {
    res.json({message: 'hello product'})
})
router.get('/product/:id', () => {})

//update
router.put('/product/:id', () => {})

//create
router.post('/product', () => {})

//delete
router.delete('/product/:id', () => {})

/**
 * Update
 */

router.get('/update', () => {})
router.get('/update/:id', () => {})

//update
router.put('/update/:id', () => {})

//create
router.post('/update', () => {})

//delete
router.delete('/update/:id', () => {})

/**
 * Update Points
 */

router.get('/updatepoint', () => {})
router.get('/updatepoint/:id', () => {})

//update
router.put('/updatepoint/:id', () => {})

//create
router.post('/updatepoint', () => {})

//delete
router.delete('/updatepoint/:id', () => {})

export default router