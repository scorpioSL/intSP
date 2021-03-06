class ShiftLetters {
    letters: string = "abcdefghijklmnopqrstuvwxyz";
    outPutInCapitals: boolean = true;
    inputString: string = "abc";
    shiftNumber: number = 20;

    constructor(input?: string, shift?: number) {
        if (input)
            this.inputString = input;
        if (shift)
            this.shiftNumber = shift;
    }

    generateOutput() {
        let inputToArray: string[] = this.inputString.split('');
        let outPut: string[] = [];
        inputToArray.forEach((value: string, index: number) => {
            let letterIndex = this.letters.indexOf(value.toLowerCase());
            let mod = letterIndex % 26;
            let newIndex = mod + this.shiftNumber;
            if (newIndex > 26) newIndex = newIndex - 26;
            if (this.outPutInCapitals)
                outPut.push(this.letters[newIndex].toUpperCase());
            else
                outPut.push(this.letters[newIndex]);
        });
        console.log(`Output - ${outPut.join('')}`);
    }
}

let firstShift = new ShiftLetters();
firstShift.generateOutput();

/**
 * Disadvantage of using ASCII
 * 
 * The algorithm wil be complex when handling scenarios like z character. The ascii code for z character 
 * will b 122. If we move z by 2 characters the output should be b which is 098 in ascii(in this scenario). To get the result
 * algorithm should run complex calculations which affects the performance of the algorithm.
 * 
 */

