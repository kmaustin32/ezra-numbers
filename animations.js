//Animations
//Will decide which to use as I go
//When -beforeChildren, staggerChildren -time

export const fadePage = {
    hidden: {
        scale: 1.2,
        opacity: 0,
        transition: {
            duration: 1
        }
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1,
            when: 'beforeChildren',
            staggerChildren: .75
        }
    },
    exit: {
        scale: 1.2,
        opacity: 0,
        transition: {
            duration: 1
        }
    }
};

export const zoomDiv = {
    hidden: {
        x: 500,
        opacity: 0,
        transition: {
            duration: 1
        }
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: 'easeOut'
        }
    },
    exit: {
        x: 500,
        opacity: 0,
        transition: {
            duration: 1
        }
    }
};

export const fadeDiv = {
    hidden: {
        scale: 1.5,
        opacity: 0,
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1,
            delay: 3.25
        }
    },
}

export const factFade = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            duration: .5,
            ease: 'easeOut'
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: .5
        }
    }
}