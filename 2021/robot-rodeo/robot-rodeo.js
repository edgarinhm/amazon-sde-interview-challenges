class RobotRodeo {
    instrutions = {};
    resultOptions = {};

    constructor() {
        this.instrutions.G = 'G';
        this.instrutions.L = 'L';
        this.instrutions.R = 'R';
        this.resultOptions.YES = 'YES';
        this.resultOptions.NO = 'NO';
    }

    doesCircleExist(n, commands) {
        const commandStack = [];

        if (n < 1 || n > 10) {
            return this.resultOptions.NO;
        }

        for (const instructionSequence of commands) {
            if (instructionSequence.length < 1 || instructionSequence.length > 2500) {
                return this.resultOptions.NO;
            }
            commandStack.push(this.processInstructionSequence(instructionSequence));
        }

        return commandStack;
    }

    processInstructionSequence(instructionSequence) {
        if (instructionSequence.length === 1) {
            return this.handleSingleInstruction(instructionSequence);
        } else {
            return this.handleMultipleInstructions(instructionSequence);
        }
    }

    handleSingleInstruction(instructionSequence) {
        if (this.instrutions[instructionSequence] === this.instrutions.G) {
            return this.resultOptions.NO;
        } else if (this.instrutions[instructionSequence] === this.instrutions.L || this.instrutions[instructionSequence] === this.instrutions.R) {
            return this.resultOptions.YES;
        }
    }

    handleMultipleInstructions(instructionSequence) {
        let direction = 0;
        let posX = 0;
        let posY = 0;
        let isCircleFound = false;

        for (const command of instructionSequence) {
            ({ posX, posY, direction } = this.updatePositionAndDirection(command, posX, posY, direction));

            if (posX === 0 && posY === 0) {
                isCircleFound = true;
            }
        }

        return isCircleFound ? this.resultOptions.YES : this.resultOptions.NO;
    }

    updatePositionAndDirection(command, posX, posY, direction) {
        if (command === this.instrutions.G) {
            if (direction === 0) {
                posY += 1;
            } else if (direction === 1) {
                posX += 1;
            } else if (direction === 2) {
                posY -= 1;
            } else if (direction === 3) {
                posX -= 1;
            }
        } else if (command === this.instrutions.L) {
            direction -= 1;
            if (direction < 0) {
                direction = 3;
            }
        } else if (command === this.instrutions.R) {
            direction += 1;
            if (direction > 3) {
                direction = 0;
            }
        }

        return { posX, posY, direction };
    }
}

module.exports = RobotRodeo;