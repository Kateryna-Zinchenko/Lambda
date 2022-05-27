export const timeCalculation = (language: string, count: number, mimetype: string) => {

    let speed;
    let time;

    if (language === "Українська" || language === "Російська") {
        speed = 1333;
    } else {
        speed = 333;
    }

    if (mimetype === ".doc" || mimetype === ".docx" || mimetype === ".rtf" || mimetype === undefined) {
        time = (count / speed + 0.5);
        time = Math.floor(time * 100) / 100;
        return time <= 1 ? 1 : time;
    } else {
        time = (count / speed + 0.5) * 1.2;
        time = Math.floor(time * 100) / 100;
        return time <= 1 ? 1.2 : time;
    }

}