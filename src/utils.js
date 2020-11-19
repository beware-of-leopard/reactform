export const computeZip = value => {
    let zip = {value, valid: true, errorMessage: ''}
    // zip is numeric and correct number of digits
    const invalidZip = value.length !== 5 || !Number.isInteger(Number(value));

    if (invalidZip) {
        zip.errorMessage = 'Zip code can only be numeric and 5 digits';
        zip.valid = false;
    } else if (value !== '98107') {
        zip.errorMessage = 'Address is not correct';
        zip.valid = false;
    }
    return zip;
}
  