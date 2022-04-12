class SparkleParticle extends Particle {
    constructor(x, y) {
        super(x, y)
    }

    update() {
        super.update()
        this.lifetime = 100
    }
}