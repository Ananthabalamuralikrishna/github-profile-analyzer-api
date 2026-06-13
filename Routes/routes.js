import express from 'express'
import { anaprofile } from '../controller/gitprofile.js'

const router = express.Router()

router.get("/ana/:username",anaprofile)

export default router;