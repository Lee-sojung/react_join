export const setMembers = members => {
    return {
        type: 'SET_MEMBERS',
        payload: members
    }
}

export const setYoutube = data => {
    return {
        type: 'SET_YOUTUBE',
        payload: data
    }
}

export const setFlickr = data => {
    return {
        type: 'SET_FLICKR',
        payload: data
    }
}