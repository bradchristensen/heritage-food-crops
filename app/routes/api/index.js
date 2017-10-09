import { Router as routerConstructor } from 'express';

import contact from './contact';

const router = routerConstructor({ mergeParams: true, strict: true });

router.use('/contact', contact);

/* Serve JSON 404s instead of standard HTML 404s. */
router.use((req, res) => {
    res.status(404).json({
        error: 'Page not found',
    });
});

export default router;
