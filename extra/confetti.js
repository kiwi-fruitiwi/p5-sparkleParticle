class Confetti extends Particle {
    constructor(x, y) {
        super(x, y)
        this.angle = random(TAU)
        this.r = 7
        this.lifetime = random(10, 25)
    }


    show() {
        // DEBUG_MSG = `${this.pos.x}`

        noStroke()
        fill(0, 0, 100, this.lifetime)

        if (this.finished()) {
            strokeWeight(1)
            const h = random(360)
            stroke(h, 100, 100, 100)
            // fill(h, 100, 100, 50)
            circle(this.pos.x, this.pos.y, 4)
        } else {
            push()
            translate(this.pos.x, this.pos.y)
            rotate(this.angle)
            rect(0, 0, this.r, this.r, 3)
            pop()
        }
        this.angle += 0.2
    }
}