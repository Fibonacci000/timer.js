class Timer {
    constructor(input, startButton, pauseButton, callbacks) {
        this.input = input;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start)
        this.pauseButton.addEventListener('click', this.pause)

        if (callbacks) {
            this.onStart = callbacks.onStart
            this.onTick = callbacks.onTick
            this.onComplete = callbacks.onComplete
        }
    }
    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.interval = setInterval(this.tick, 10)


    }
    pause = () => {
        clearInterval(this.interval)
        // if (this.timeRemaining = 0) {
        //     clearInterval(this.interval);
        // }
    }
    tick = () => {
        // const timeRemaining = parseFloat(this.input.value);
        //THIS WILL STOP TIMER IF 0 OR LESS THAN 0 WITH PAUSE()
        //IF NOT 0 , KEEP COUNTING MINUS -1

        const timeRemaining = this.timeRemaining;
        if (this.timeRemaining <= 0) {
            this.pause();
            //ONCOMPLETE WILL RUN ONCE TIMER IS DONE
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeRemaining = timeRemaining - 0.01;
            // this.input.value = timeRemaining - 1; 
            //ON TICK WILL RUN ONCE IT STARTS TICKING
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }
        }
    }
    get timeRemaining() {
        return parseFloat(this.input.value);
    }
    set timeRemaining(time) {
        this.input.value = time.toFixed(2);
    }

}