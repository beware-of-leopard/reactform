export const isFormValid = (
    {
        firstName: { valid: firstNameValid },
        lastName: { valid: lastNameValid },
        email: { valid: emailValid },
        zip: { valid: zipValid },
        city: { valid: cityValid }
    }) => {
    return (
        firstNameValid && 
        lastNameValid && 
        emailValid && 
        zipValid && 
        cityValid
    );
}

export const isFormFullyFilled = (
    {
        firstName: { value: firstNameValue },
        lastName: { value: lastNameValue },
        email: { value: emailValue },
        city: { value: cityValue }, 
        zip: { value: zipValue }
    }
    ) => {
    return !!(
        firstNameValue && 
        lastNameValue && 
        emailValue && 
        cityValue && 
        zipValue
    )
}