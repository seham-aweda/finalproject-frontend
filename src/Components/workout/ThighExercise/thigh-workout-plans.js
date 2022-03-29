import highSteppingVideo from '../videos/butt beginners/high-stepping.mp4'
import buttKickingVideo from '../videos/butt beginners/butt-kicking.mp4'
import squatsVideo from '../videos/butt beginners/squats.mp4'
import mountainClimberVideo from '../videos/butt beginners/mountain climber.mp4'
import backWardLungeVideo from '../videos/thigh beginner/backward-lunge.mp4'
import jumpingJacksVideo from '../videos/thigh beginner/jumping-jacks.mp4'
import kneeToChestStretchRightVideo from '../videos/thigh beginner/knee-to-chest-stretch-right.mp4'
import kneeToChestStretchLeftVideo from '../videos/thigh beginner/knee-to-chest-stretch-left.mp4'
import leftQuadStretchWithWallVideo from '../videos/thigh beginner/left-quad-stretch-with-wall.mp4'
import RightQuadStretchWithWallVideo from '../videos/thigh beginner/right-quad-stretch-with-wall.mp4'
import sideLyingLegLiftLeftVideo from '../videos/thigh beginner/side-lying-leg-lift-left.mp4'
import sideLyingLegLiftRightVideo from '../videos/thigh beginner/side-lying-leg-lift-right.mp4'
import modifiesBurpeesVideo from '../videos/thigh beginner/modified-burpees.mp4'
import rest from '../videos/exercise-page/rest.jpg'

//thigh-advanced
import gluteKickbackLeftVideo from '../videos/thigh adv/glute-kick-back-left.mp4'
import gluteKickbackRightVideo from '../videos/thigh adv/glute-kick-back-right.mp4'
import sideLegCircleLeftVideo from '../videos/thigh adv/side-leg-cricle-left.mp4'
import sideLegCircleRightVideo from '../videos/thigh adv/side-leg-circle-right.mp4'
import wallSitVideo from '../videos/thigh adv/wall-sit.mp4'
import jumpingSquatsVideo from '../videos/thigh adv/jumping-squats.mp4'

//exercises
const gluteKickbackLeft = 'Start on all fours with your knees under your butt and your hands directly under your shoulders. \n Then kick one leg back until it is parallel with the ground. Switch to the other side after several sets.'
const gluteKickbackRight = 'Start on all fours with your knees under your butt and your hands directly under your shoulders. \n Then kick one leg back until it is parallel with the ground. Switch to the other side after several sets.'
const sideLegCircleLeft = 'Lie on your right side with your head resting on your right hand. \n Then lift your left leg and rotate your foot in circles.'
const sideLegCircleRight = 'Lie on your left side with your head resting on your left hand. \n Then lift your right leg and rotate your foot in circles.'
const wallSit = 'Start with your back against the wall, then slide down until your knees are at a 90 degree angle. \n Keep your back against the wall with your hands and arms away from your legs. Hold the position. \n The exercise is to strengthen the quadriceps muscles.'
const jumpingSquats = 'Start in the squat position, then jump up using your abdominal muscles for strength . This exercise works your abdomen.'
const backWardLunge = "Stand with your feet shoulder width apart and your hands on your hips. \n Step a big step backward with your right leg and lower your body until your left thigh is parallel to the floor. Return and repeat with the other side."
const jumpingJacks = "Start with your feet together and your arms by your sided, then jump up with your feet apart and your hands overhead. \n Return to the start position then do next rep. This exercise provides a full-body workout and works all your large muscle groups."
const kneeToChestStretchRight = "Lie on the floor with your legs extended. Lift your right knee up and grab it with both hands. \n Pull your right knee towards your chest as much as you can while keeping your left leg straight on the ground. \n Hold this position for a few seconds."
const kneeToChestStretchLeft = "Lie on the floor with your legs extended. Lift your left knee up and grab it with both hands. \n Pull your left knee towards your chest as much as you can while keeping your right leg straight on the ground. \n Hold this position for a few seconds."
const leftQuadStretchWithWall = "Stand with your right hand on the wall.Bend your left leg and grasp your ankle or toes to bring your left calf close to your left thigh. Hold this position."
const RightQuadStretchWithWall = "Stand with your left hand on the wall.Bend your right leg and grasp your ankle or toes to bring your rightLie on the floor with your legs extended. Lift your left knee up and grab it with both hands. \n Pull your left knee towards your chest as much as you can while keeping your right leg straight on the ground. \n Hold this position for a few seconds calf close to your rightLie on the floor with your legs extended. Lift your left knee up and grab it with both hands. \n Pull your left knee towards your chest as much as you can while keeping your right leg straight on the ground. \n Hold this position for a few seconds thigh. Hold this position."
const sideLyingLegLiftLeft = "Lie down on your side with your head rested on your right arm. Lift your upper leg up and return to the start position. \n Make sure your left leg goes straight up and down during the exercise."
const sideLyingLegLiftRight = "Lie down on your side with your head rested on your right arm. Lift your upper leg up and return to the start position. \n Make sure your right leg goes straight up and down during the exercise."
const modifiesBurpees = 'Stand with your feet shoulder width apart. Put your hands on the ground and kick your feet backward,then bring your feet back and jump up. Repeat the exercise.'

const squats = 'Stand with your feet shoulder width apart and your arms stretched forward, then lower your body until your thighs are parallel with the floor. \n Your knees should be extended in the same direction as your toes. Return to the start position and do the next rep. \n This works the thighs, hips buttocks. quads, hamstrings and lower body'
const highStepping = 'Run in place while pulling your knees as high as possible with each step.\n Keep your upper body upright during this exercise'
const buttKicks = 'Stand up on the floor, then run in place while kicking your heel up to touch your butt with each step. \n try to di it as fast as you can. it\'s a great exercise for the gluteus and hamstrings'
const mountainClimber = 'Start in the push-up position. Bend your right knee towards your chest and keep your left leg straight, then quickly switch from one leg to the other. \n This exercise strengthens multiple muscle groups'

export const thighBeginnerPlan = [
    {anim: highSteppingVideo, time: 30, exercise: 1, text: highStepping},
    {anim: rest, time: 8},
    {anim: buttKickingVideo, time: 30, exercise: 2, text: buttKicks},
    {anim: rest, time: 8},
    {anim: squatsVideo, time: '12times', exercise: 3, text: squats},
    {anim: rest, time: 15},
    {anim: backWardLungeVideo, time: '14times', exercise: 4, text: backWardLunge},
    {anim: rest, time: 15},
    {anim: jumpingJacksVideo, time: 30, exercise: 5, text: jumpingJacks},
    {anim: rest, time: 15},
    {anim: modifiesBurpeesVideo, time: '5times', exercise: 6, text: modifiesBurpees},
    {anim: rest, time: 15},
    {anim: mountainClimberVideo, time: '14times', exercise: 7, text: mountainClimber},
    {anim: rest, time: 15},
    {anim: kneeToChestStretchRightVideo, time: 30, exercise: 8, text: kneeToChestStretchRight},
    {anim: rest, time: 8},
    {anim: kneeToChestStretchLeftVideo, time: 30, exercise: 9, text: kneeToChestStretchLeft},
]

export const thighIntermediatePlan = [
    {anim: highSteppingVideo, time: 30, exercise: 1, text: highStepping},
    {anim: rest, time: 8},
    {anim: buttKickingVideo, time: 30, exercise: 2, text: buttKicks},
    {anim: rest, time: 8},
    {anim: jumpingSquatsVideo, time: '10times', exercise: 3, text: jumpingSquats},
    {anim: rest, time: 15},
    {anim: sideLyingLegLiftLeftVideo, time: '10times', exercise: 4, text: sideLyingLegLiftLeft},
    {anim: rest, time: 15},
    {anim: sideLyingLegLiftRightVideo, time: '10times', exercise: 5, text: sideLyingLegLiftRight},
    {anim: rest, time: 15},
    {anim: leftQuadStretchWithWallVideo, time: 30, exercise: 6, text: leftQuadStretchWithWall},
    {anim: rest, time: 15},
    {anim: RightQuadStretchWithWallVideo, time: 30, exercise: 7, text: RightQuadStretchWithWall},
    {anim: rest, time: 15},
    {anim: kneeToChestStretchRightVideo, time: 30, exercise: 8, text: kneeToChestStretchRight},
    {anim: rest, time: 8},
    {anim: kneeToChestStretchLeftVideo, time: 30, exercise: 9, text: kneeToChestStretchLeft},
]

export const thighAdvancedPlan = [
    {anim: highSteppingVideo, time: 30, exercise: 1, text: highStepping},
    {anim: rest, time: 8},
    {anim: buttKickingVideo, time: 30, exercise: 2, text: buttKicks},
    {anim: rest, time: 8},
    {anim: gluteKickbackLeftVideo, time: '12times', exercise: 3, text: gluteKickbackLeft},
    {anim: rest, time: 15},
    {anim: gluteKickbackRightVideo, time: '12times', exercise: 4, text: gluteKickbackRight},
    {anim: rest, time: 15},
    {anim: sideLegCircleLeftVideo, time: '10times', exercise: 5, text: sideLegCircleLeft},
    {anim: rest, time: 15},
    {anim: sideLegCircleRightVideo, time: '10times', exercise: 6, text: sideLegCircleRight},
    {anim: rest, time: 15},
    {anim: wallSitVideo, time: 40, exercise: 7, text: wallSit},
    {anim: rest, time: 15},
    {anim: kneeToChestStretchRightVideo, time: 30, exercise: 8, text: kneeToChestStretchRight},
    {anim: rest, time: 8},
    {anim: kneeToChestStretchLeftVideo, time: 30, exercise: 9, text: kneeToChestStretchLeft},
]

