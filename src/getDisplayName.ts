const getDisplayName = (firstName: string, lastName: string, city: string = '', isWns: boolean = false) => {
    const cityLabel = city || '?'
    const wnsLabel = isWns ? ' - Wns' : ''
    return `[${cityLabel}] ${firstName} ${lastName}${wnsLabel}`
}

export default getDisplayName
