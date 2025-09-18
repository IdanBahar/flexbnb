import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import {HomeEditStepOneTitle} from '../cmps/home-edit/HomeEditStepOneTitle'
import {HomeEditStepOneA} from '../cmps/home-edit/HomeEditStepOneA'
import { HomeEditStepOneB } from '../cmps/home-edit/HomeEditStepOneB'
import { HomeEditStepOneC } from '../cmps/home-edit/HomeEditStepOneC'
import { HomeEditStepTwoTitle } from '../cmps/home-edit/HomeEditStepTwoTitle'
import { HomeEditStepTwoA } from '../cmps/home-edit/HomeEditStepTwoA'
import { HomeEditStepTwoB } from '../cmps/home-edit/HomeEditStepTwoB'
import { HomeEditStepTwoC } from '../cmps/home-edit/HomeEditStepTwoC'
import { HomeEditStepTwoD } from '../cmps/home-edit/HomeEditStepTwoD'
import { HomeEditStepThreeTitle } from '../cmps/home-edit/HomeEditStepThreeTitle'
import { HomeEditStepThreeA } from '../cmps/home-edit/HomeEditStepThreeA'

export function HomeEdit(){
    const currentStep = useSelector(
        state => state.homeEditModule.potentialHome?.editProgress?.currentStep ?? 1
    )
    console.log("🚀 ~ currentStep:", currentStep)
    const currentSubStep = useSelector(
        state => state.homeEditModule.potentialHome?.editProgress?.currentSubStep ?? 1
    )
    console.log("🚀 ~ currentSubStep:", currentSubStep)
    // const [displayedStep, setDisplayedStep] = useState(currentStep)
    // const [displayedSubStep, setDisplayedSubStep] = useState(currentSubStep)
    // const [isVisible, setIsVisible] = useState(true)
    // const [prevStep, setPrevStep] = useState(null)
    // const [prevSubStep, setPrevSubStep] = useState(null)

    const homeEditComponents = {
        1: {
            1: HomeEditStepOneTitle,
            2: HomeEditStepOneA,
            3: HomeEditStepOneB,
            4: HomeEditStepOneC
        },
        2: {
            1: HomeEditStepTwoTitle,
            2: HomeEditStepTwoA,
            3: HomeEditStepTwoB,
            4: HomeEditStepTwoC,
            5: HomeEditStepTwoD
        },
        3: {
            1: HomeEditStepThreeTitle,
            2: HomeEditStepThreeA
        }
    }

    const Comp = homeEditComponents[currentStep]?.[currentSubStep]

    // function renderStepComponent(step, subStep) {
    //     return homeEditComponents[step]?.[subStep] || null
    // }

    // useEffect(()=>{
    //     if (currentStep === displayedStep && currentSubStep === displayedSubStep) return //should occur only in step 1
        
    //     setPrevStep(displayedStep)
    //     setPrevSubStep(displayedSubStep)

    //     // setIsVisible(false); // start fade-out animation

    //     setDisplayedStep(currentStep)
    //     setDisplayedSubStep(currentSubStep)

    //     const timeout = setTimeout(() => {
    //         setPrevStep(null)
    //         setPrevSubStep(null)  
    //         // setIsVisible(true); //start fade-in animation
    //         // setIsStepCompleted(false)       
    //     }, 600); 

    //     return () => clearTimeout(timeout);
    // }, [currentStep, currentSubStep])
    
    return(
        <section className='home-edit-container'>
            <div className='home-edit-main'>
                <AnimatePresence mode='wait'>
                    {Comp && (
                        <motion.div
                            key={`${currentStep}-${currentSubStep}`} // מזהה ייחודי לכל שלב
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                            style={{ width: '100%' }}
                        >
                            <Comp />
                        </motion.div>
                    )}
                </AnimatePresence>
                {/* {prevStep && (
                    <div className="fade-out">
                    {renderStepComponent(prevStep, prevSubStep)}
                    </div>
                )}
                {displayedStep && (
                    <div className="fade-in">
                    {renderStepComponent(displayedStep, displayedSubStep)}
                    </div>
                )} */}
            </div>
        </section>
    )
}