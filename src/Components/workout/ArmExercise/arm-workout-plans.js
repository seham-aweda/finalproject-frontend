import highSteppingVideo from '../videos/butt beginners/high-stepping.mp4'
import jumpingJacksVideo from '../videos/thigh beginner/jumping-jacks.mp4'
import armCircleClockwiseVideo from '../videos/arms/arm-circle-clockwise.mp4'
import armScissorsVideo from '../videos/arms/arm-scissors.mp4'
import chestPressPulseVideo from '../videos/arms/chest-press-pulse.mp4'
import dynamicChestVideo from '../videos/arms/dynamic-chest.mp4'
import kneePushUpsVideo from '../videos/arms/knee-push-ups.mp4'
import punchesVideo from '../videos/arms/punches.mp4'
import standingBicepsStretchLeftVideo from '../videos/arms/standing-biceps-stretch-left.mp4'
import standingBicepsStretchRightVideo from '../videos/arms/standing-bicep-stretch-right.mp4'
import tricepsDipsVideo from '../videos/arms/triceps-dips.mp4'
import tricepsStretchLeftVideo from '../videos/arms/triceps-stretch-left.mp4'
import tricepsStretchRightVideo from '../videos/arms/triceps-stretch-right.mp4'
import wallPushUpsVideo from '../videos/arms/wall-push-ups.mp4'
import kneelingLungeStretchLeftVideo from '../videos/butt beginners/kneeling-lunge-stretch-left.mp4'
import kneelingLungeStretchRightVideo from '../videos/butt beginners/kneeling-lunge-stretch-right.mp4'
import rest from '../videos/exercise-page/rest.jpg'


//exercises
const jumpingJacks = "Start with your feet together and your arms by your sided, then jump up with your feet apart and your hands overhead. \n Return to the start position then do next rep. This exercise provides a full-body workout and works all your large muscle groups."
const armCircleClockwise = 'Stand on the floor with your arms extended straight out to the sides at shoulder height. \nMove your arms clockwise in circles fast.\n Try to do it as fast as you can.'
const armScissors = 'Stand upright with your feet shoulder width apart. \n Stretch your arms in front of you at shoulder height with one arm overlap the other in the shape of the letter "X", and then spread them apart. \n Switch arms , and repeat th exercise.'
const chestPressPulse = 'Hold your forearms together at shoulder height and bend your elbows with your hands together to make an "L" shape. \nThen lift your forearms up and down.'
const dynamicChest = 'Stand on the floor with your feet shoulder width apart. Extend your arms forward at shoulder height with your palms facing each other. \nExtend your arms as far out as possible, then move them back to the front.Repeat the exercise.'
const kneePushUps = 'Start in the regular push-up position, then let your knees touch the floor and raise your feet up off the floor.\n Next push your body up and down.'
const punches = 'Stand with one of your legs forward and your knees bent slightly. Bend your elbows and clench your fists in front of your face. \n Extend one arm forward with the palm facing the floor. Take the arm back and repeat with the other arm.'
const standingBicepsStretchLeft = 'Stand with your left arm close to a wall. Extend your left arm and put your left hands on the wall, then gently turn your body to the right.'
const standingBicepsStretchRight = 'Stand with your right arm close to a wall. Extend your right arm and put your right hands on the wall, then gently turn your body to the right.'
const tricepsDips = 'For the start position, sit on the chair. Then move your hip off the chair with your hands holding the edge of the chair. \nSlowly bend and stretch your arms to make your body go up and down. This is A great exercise for the triceps.'
const tricepsStretchLeft = 'Put your left hand on your back, use your right hand to grab your left elbow and gently pull it. Hold this position for a few seconds.'
const tricepsStretchRight = 'Put your right hand on your back, use your left hand to grab your right elbow and gently pull it. Hold this position for a few seconds.'
const wallPushUps = 'Stand in front of a wall one big step away from it. Then put your hands out straight towards the wall and lean against it.Lift your heels. \n Slowly bend your elbows and press your upper body towards the wall. Push back and repeat the exercise. Remember to keep your body straight.'
const highStepping = 'Run in place while pulling your knees as high as possible with each step.\n Keep your upper body upright during this exercise'
const kneelingLungeStretchLeft = 'Start in a push-up position. Bring your left knee forward and drop your right knee on the floor. \n Raise your upper body and put your hands on your waist. Then push your hips forward while keeping your upper body straight.\n Please make sure your front knee won\'t go over your toes.Hold this position for a few seconds'
const kneelingLungeStretchRight = 'Start in a push-up position. Bring your right knee forward and drop your left knee on the floor. \n Raise your upper body and put your hands on your waist. Then push your hips forward while keeping your upper body straight.\n Please make sure your front knee won\'t go over your toes.Hold this position for a few seconds'

export const armBeginnerPlan = [
    {anim: highSteppingVideo, time: 30, exercise: 1, text: highStepping},
    {anim: rest, time: 8},
    {anim: chestPressPulseVideo, time: 30, exercise: 2, text: chestPressPulse},
    {anim: rest, time: 15},
    {anim: jumpingJacksVideo, time: 30, exercise: 3, text: jumpingJacks},
    {anim: rest, time: 15},
    {anim: armScissorsVideo, time: 20, exercise: 4, text: armScissors},
    {anim: rest, time: 15},
    {anim: punchesVideo, time: 30, exercise: 5, text: punches},
    {anim: rest, time: 15},
    {anim: tricepsDipsVideo, time: '12times', exercise: 6, text: tricepsDips},
    {anim: rest, time: 15},
    {anim: kneelingLungeStretchLeftVideo, time: 30, exercise: 7, text: kneelingLungeStretchLeft},
    {anim: rest, time: 8},
    {anim: kneelingLungeStretchRightVideo, time: 30, exercise: 8, text: kneelingLungeStretchRight},
]

export const armIntermediatePlan = [
    {anim: highSteppingVideo, time: 30, exercise: 1, text: highStepping},
    {anim: rest, time: 8},
    {anim: chestPressPulseVideo, time: 30, exercise: 2, text: chestPressPulse},
    {anim: rest, time: 15},
    {anim: jumpingJacksVideo, time: 30, exercise: 3, text: jumpingJacks},
    {anim: rest, time: 15},
    {anim: armCircleClockwiseVideo, time: 20, exercise: 4, text: armCircleClockwise},
    {anim: rest, time: 15},
    {anim: dynamicChestVideo, time: 20, exercise: 5, text: dynamicChest},
    {anim: rest, time: 15},
    {anim: kneePushUpsVideo, time: '10times', exercise: 6, text: kneePushUps},
    {anim: rest, time: 15},
    {anim: tricepsStretchLeftVideo, time: 30, exercise: 7, text: tricepsStretchLeft},
    {anim: rest, time: 8},
    {anim: tricepsStretchRightVideo, time: 30, exercise: 8, text: tricepsStretchRight},
]

export const armAdvancedPlan = [
    {anim: highSteppingVideo, time: 30, exercise: 1, text: highStepping},
    {anim: rest, time: 8},
    {anim: chestPressPulseVideo, time: 30, exercise: 2, text: chestPressPulse},
    {anim: rest, time: 15},
    {anim: jumpingJacksVideo, time: 30, exercise: 3, text: jumpingJacks},
    {anim: rest, time: 15},
    {anim: wallPushUpsVideo, time: '12times', exercise: 4, text: wallPushUps},
    {anim: rest, time: 15},
    {anim: standingBicepsStretchLeftVideo, time: 30, exercise: 5, text: standingBicepsStretchLeft},
    {anim: rest, time: 15},
    {anim: standingBicepsStretchRightVideo, time: 30, exercise: 6, text: standingBicepsStretchRight},
    {anim: rest, time: 15},
    {anim: kneelingLungeStretchLeftVideo, time: 30, exercise: 7, text: kneelingLungeStretchLeft},
    {anim: rest, time: 8},
    {anim: kneelingLungeStretchRightVideo, time: 30, exercise: 8, text: kneelingLungeStretchRight},
]

