import highSteppingVideo from '../videos/butt beginners/high-stepping.mp4'
import buttKickingVideo from '../videos/butt beginners/butt-kicking.mp4'
import flutterKicksVideo from '../videos/abs-beginner/flutter-kicks.mp4'
import legsRaisesVideo from '../videos/abs-beginner/leg-raises.mp4'
import russianTwistVideo from '../videos/abs-beginner/russian-twist.mp4'
import skippingWithoutRopeVideo from '../videos/abs-beginner/skipping-without-rope.mp4'
import standingBicycleCrunchesVideo from '../videos/abs-beginner/standing-bicycle-crunches.mp4'
import kneelingLungeStretchLeftVideo from '../videos/butt beginners/kneeling-lunge-stretch-left.mp4'
import kneelingLungeStretchRightVideo from '../videos/butt beginners/kneeling-lunge-stretch-right.mp4'
import rest from '../videos/exercise-page/rest.jpg'
//abs intermediate
import heelTouchVideo from '../videos/abs inter/heel-touch.mp4'
import heelToTheHeavensVideo from '../videos/abs inter/heels-to-the-heavens.mp4'
import plankVideo from '../videos/abs inter/plank.mp4'
import reclinedObliqueTwistVideo from '../videos/abs inter/reclined-oblique-twist.mp4'
import reverseCrunchesVideo from '../videos/abs inter/reverse-crunches.mp4'
//abs-advanced
import crossArmCrunchesVideo from '../videos/abs adv/cross-arm-crunches.mp4'
import crossKneePlankVideo from '../videos/abs adv/cross-knee-plank.mp4'
import sideCrunchesLeftVideo from '../videos/abs adv/side-crunches-left.mp4'
import sideCrunchesRightVideo from '../videos/abs adv/side-crunches-right.mp4'
import vHoldVideo from '../videos/abs adv/v-hold.mp4'
import xManCrunchVideo from '../videos/abs adv/x-man-crunch.mp4'

//exercises
const flutterKicks = "Lie on your back with your arms at your sides. \n Lift your legs and keep them as straight as you can. \n Then quickly raise your right leg up, and simultaneously lower your left leg. Switch legs and repeat."
const legsRaises = "Lie down on your back, and put your hands beneath your hips for support. \n Then lift your legs up until they form a right angle with the floor. \n Slowly bring your legs back down and repeat the exercise."
const russianTwist = "Sit on the floor with your knees bent, feet lifted a little bit and back tilted backwards. \n Then hold your hands together and twist from side to side."
const skippingWithoutRope = "Place your arms at your sides and pretend to hold a skipping rope handle in each hand. \n Jump and alternately land on the balls of your feet, rotating your wrists at the same time as if you wee spinning a rope."
const standingBicycleCrunches = "Stand with your feet shoulder width apart. \n Bring your knee to your opposite elbow. \n Return to the start position and repeat with the other side."
const heelTouch = 'Lie on the ground with your legs bent and your arms by your sides. \n Slightly lift your upper body off the floor and make your hands alternately reach your heels.'
const heelToTheHeavens = 'Lie on your back with your hands at your sides and legs straight up towards the ceiling. \n Raise your hips straight up off the floor, then go back to the starting position, Repeat the exercise.'
const plank = 'Lie on the floor with your toes and forearms on the ground. Keep your body straight and hold this position as long as you can. \n this exercise strengthens the abdomen, back and shoulders.'
const reclinedObliqueTwist = 'Lie on your back with your legs extended and your elbows directly under your shoulders. \n Lift your left leg up at a 45 degree angle while reaching your right arm over to your left side. \n Then slowly go back to the starting position. \n Repeat several times, and then switch to the other side.'
const reverseCrunches = 'Lie on your back with your knees up at a 90 degree angle and your hands behind your head. \n Lift your upper body and thighs, and then stretch out. Repeat this exercise.'
const crossArmCrunches = "Lie down and bend your knees with your feet flat on the floor. Cross your arms in front of your chest. \n Then lift your head and shoulders up to make a 30 degree angle with the ground. IT primarily works on the rectus abdominis muscle and obliques."
const crossKneePlank = "Start with the plank position. Bring one knee and the opposite elbow in to touch each other, then bring them back. Repeat with the other side."
const sideCrunchesLeft = "Lie on your right side with your right foot behind your left foot. \n Put your left hand behind your head and your right hand on the left side of your oblique muscles. \n Lift your right shoulder up off the floor. Repeat the exercise."
const sideCrunchesRight = "Lie on your left side with your left foot behind your right foot. \n Put your right hand behind your head and your left hand on the right side of your oblique muscles. \n Lift your left shoulder up off the floor. Repeat the exercise."
const vHold = "Sit on the floor, lift your legs up at a 45 degree angle, and lean your upper body back at a 45 degree angle. Stretch your arms forward, Hold this position."
const xManCrunch = "Lie on your back with your hands stretched at your sides and legs apart.\n Lift your legs and arms off the floor .Then raise your upper body and squeeze your arms amd knees towards your abdominals. Lower your arms and legs(but don\'t touch the floor) and repeat the exercise."

const highStepping = 'Run in place while pulling your knees as high as possible with each step.\n Keep your upper body upright during this exercise,'
const buttKicks = 'Stand up on the floor, then run in place while kicking your heel up to touch your butt with each step. \n try to di it as fast as you can. it\'s a great exercise for the gluteus and hamstrings.'
const kneelingLungeStretchLeft = 'Start in a push-up position. Bring your left knee forward and drop your right knee on the floor. \n Raise your upper body and put your hands on your waist. Then push your hips forward while keeping your upper body straight.\n Please make sure your front knee won\'t go over your toes.Hold this position for a few seconds.'
const kneelingLungeStretchRight = 'Start in a push-up position. Bring your right knee forward and drop your left knee on the floor. \n Raise your upper body and put your hands on your waist. Then push your hips forward while keeping your upper body straight.\n Please make sure your front knee won\'t go over your toes.Hold this position for a few seconds.'

export const ABSBeginnerPlan = [
    {anim: highSteppingVideo, time: 30, exercise: 1, text: highStepping},
    {anim: rest, time: 8},
    {anim: buttKickingVideo, time: 30, exercise: 2, text: buttKicks},
    {anim: rest, time: 8},
    {anim: flutterKicksVideo, time: 15, exercise: 3, text: flutterKicks},
    {anim: rest, time: 15},
    {anim: legsRaisesVideo, time: '8times', exercise: 4, text: legsRaises},
    {anim: rest, time: 15},
    {anim: russianTwistVideo, time: '16times', exercise: 5, text: russianTwist},
    {anim: rest, time: 15},
    {anim: skippingWithoutRopeVideo, time: 30, exercise: 6, text: skippingWithoutRope},
    {anim: rest, time: 15},
    {anim: standingBicycleCrunchesVideo, time: '14times', exercise: 7, text: standingBicycleCrunches},
    {anim: rest, time: 15},
    {anim: kneelingLungeStretchLeftVideo, time: 30, exercise: 8, text: kneelingLungeStretchLeft},
    {anim: rest, time: 8},
    {anim: kneelingLungeStretchRightVideo, time: 30, exercise: 9, text: kneelingLungeStretchRight},
]

export const ABSIntermediatePlan = [
    {anim: highSteppingVideo, time: 30, exercise: 1, text: highStepping},
    {anim: rest, time: 8},
    {anim: buttKickingVideo, time: 30, exercise: 2, text: buttKicks},
    {anim: rest, time: 8},
    {anim: heelTouchVideo, time: '18times', exercise: 3, text: heelTouch},
    {anim: rest, time: 15},
    {anim: heelToTheHeavensVideo, time: '12times', exercise: 4, text: heelToTheHeavens},
    {anim: rest, time: 15},
    {anim: plankVideo, time: 30, exercise: 5, text: plank},
    {anim: rest, time: 15},
    {anim: reclinedObliqueTwistVideo, time: '16times', exercise: 6, text: reclinedObliqueTwist},
    {anim: rest, time: 15},
    {anim: reverseCrunchesVideo, time: '18times', exercise: 7, text: reverseCrunches},
    {anim: rest, time: 15},
    {anim: kneelingLungeStretchLeftVideo, time: 30, exercise: 8, text: kneelingLungeStretchLeft},
    {anim: rest, time: 8},
    {anim: kneelingLungeStretchRightVideo, time: 30, exercise: 9, text: kneelingLungeStretchRight},
]

export const ABSAdvancedPlan = [
    {anim: highSteppingVideo, time: 30, exercise: 1, text: highStepping},
    {anim: rest, time: 8},
    {anim: crossArmCrunchesVideo, time: '18times', exercise: 2, text: crossArmCrunches},
    {anim: rest, time: 8},
    {anim: crossKneePlankVideo, time: '28times', exercise: 3, text: crossKneePlank},
    {anim: rest, time: 8},
    {anim: sideCrunchesLeftVideo, time: '16times', exercise: 4, text: sideCrunchesLeft},
    {anim: rest, time: 8},
    {anim: sideCrunchesRightVideo, time: '16times', exercise: 5, text: sideCrunchesRight},
    {anim: rest, time: 8},
    {anim: vHoldVideo, time: 30, exercise: 6, text: vHold},
    {anim: rest, time: 8},
    {anim: xManCrunchVideo, time: '18times', exercise: 7, text: xManCrunch},
    {anim: rest, time: 8},
    {anim: kneelingLungeStretchLeftVideo, time: 30, exercise: 8, text: kneelingLungeStretchLeft},
    {anim: rest, time: 8},
    {anim: kneelingLungeStretchRightVideo, time: 30, exercise: 9, text: kneelingLungeStretchRight},
]

