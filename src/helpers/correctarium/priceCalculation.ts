export const priceCalculation = (language: string, count: number, mimetype: string) => {
    let factor;
    let minPrice;

    if (language === "Українська" || language === "Російська") {
        factor = 0.05
        minPrice = 50
    } else {
        factor = 0.12
        minPrice = 120
    }

    if (language === 'Українська' || language === 'Російська'){
        if (mimetype === ".doc" || mimetype === ".docx" || mimetype === ".rtf" || mimetype === undefined) {
            return count > 1000 ? count * factor : minPrice;
        } else {
            return count > 1000 ? count * factor * 1.2 : minPrice * 1.2
        }
    } else {
        if (mimetype === ".doc" || mimetype === ".docx" || mimetype === ".rtf" || mimetype === undefined) {
            return count > 1000 ? count * factor : minPrice;
        } else {
            return count > 1000 ? count * factor * 1.2 : minPrice * 1.2
        }
    }
}