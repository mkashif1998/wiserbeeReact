export const formatNumber = (num) => {
    const arabicNumbers = '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';
    return num.toString().replace(/[0-9]/g, (d) => {
        return arabicNumbers[d];
    });
};
