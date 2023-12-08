

function color (country) {
    switch (country) {
        case 'Africa':
            return "africa"
        case 'Americas':
            return "americas"

        case 'Asia':
            return "asia"

        case 'Europe':
            return "europe"

        case 'Oceania':
            return "oceania"
        default:
            return "unknown"
    }
}

export default color;