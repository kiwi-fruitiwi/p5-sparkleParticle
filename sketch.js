/**
 *  @author kiwi 🥝
 *  @date 2022.04.10
 *
 *  borrows particle system code from p5-particleSystem
 *
 *
 */


let font
let instructions  /* div for instructions */
let DEBUG_MSG =`starting!`

let particles = []

function preload() {
    font = loadFont('data/consola.ttf')
}


function setup() {
    let cnv = createCanvas(600, 300)
    cnv.parent('#canvas')

    colorMode(HSB, 360, 100, 100, 100)
    textFont(font, 14)
    rectMode(CENTER)

    /* initialize instruction div */
    instructions = select('#ins')
    instructions.html(`<pre>
        [1,2,3,4,5] → no function ✨
        z → freeze sketch
        </pre>`)

    for (let i=0; i<50; i++) {
        particles.push(new SparkleParticle(random(width), random(height)))
    }
}


function draw() {    
    background(234, 34, 24)
    fill(0, 0, 100, 70)
    stroke(0, 0, 100)

    displayDebugCorner()
    for (let p of particles) {
        p.update()
        p.show()
    }
}


function keyPressed() {
    /* stop sketch */
    if (key === 'z') {
        noLoop()
        instructions.html(`<pre>
            sketch stopped</pre>`)
    }
}


function displayDebugCorner() {
    /** debug corner 🍁  */
    const LEFT_MARGIN = 10
    const DEBUG_Y_OFFSET = height - 10 /* floor of debug corner */
    const LINE_HEIGHT = textAscent() + textDescent() + 2 /* 2 = lineSpacing */
    fill(0, 0, 100, 100) /* white */
    strokeWeight(0)
    text(`frame rate ${frameRate().toFixed(1)}`, LEFT_MARGIN, DEBUG_Y_OFFSET)
    text(`frame count ${frameCount}`, LEFT_MARGIN, DEBUG_Y_OFFSET - LINE_HEIGHT)
    text(`→ ${DEBUG_MSG}`, LEFT_MARGIN, DEBUG_Y_OFFSET - 2*LINE_HEIGHT)

}