export function getFieldValue(label) {
    return new Promise((resolve) => {
        cy.contains(label)
            .invoke('text')
            .then((text) => {
                const value = text.split(': ')[1]; // Extract the part after ": "
                resolve(value); // Resolve the value as a string
            });
    });
}