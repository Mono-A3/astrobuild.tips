export const formatDate = (date) => {
    const event = new Date(date);
    const newDate = event.toDateString();

    return newDate
}

export const formatDateWithoutYear = (date) => {
    const event = new Date(date);
    const newDate = event.toDateString().slice(0, -4)
    
    return newDate
}