class Oven {
    constructor(maxTemp) {
        if (maxTemp > 15) {
            throw new Error("Максимальная температура не может превышать 15");
        }
        this._maxTemp = maxTemp;
    }

    get maxTemp() {
        return this._maxTemp;
    }

    set maxTemp(value) {
        if (value > 15) {
            throw new Error("Максимальная температура не может превышать 15");
        } else if (value < 0) {
            console.error("Температура не может быть отрицательной");
        } else {
            this._maxTemp = value;
        }
    }
}

const oven = new Oven(10);
console.log(oven.maxTemp);

class ImprovedOven extends Oven {

    temp = 0;
    isWorking = true;

    increaseTemp() {
        if (this.isWorking) {
            this.temp++;
            console.log(`Текущая температура: ${this.temp}`);
            if (this.temp >= this._maxTemp) {
                this.stop();
            } else {
                setTimeout(() => this.increaseTemp(), 500);
            }
        }
    }

    start() {
        console.log('Нагреваем печь');
        this.increaseTemp();
    }

    stop() {
        console.log('Охлаждаем печь');
        setTimeout(() => this.decreaseTemp(), 500);
    }

    decreaseTemp() {
        if (this.isWorking) {
            this.temp--;
            console.log(`Текущая температура: ${this.temp}...`);
            if (this.temp < 0) {
                console.log('Сбрасываем до 0');
                this.temp = 0;
            }
            if (this.temp === 0) {
                console.log('Печь охладилась');
                this.isWorking = false;
            }
            setTimeout(() => this.decreaseTemp(), 500);
        }
    }
}

const improvedOven = new ImprovedOven(15);

improvedOven.start()