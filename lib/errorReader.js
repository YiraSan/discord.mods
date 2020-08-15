module.exports = function errorReader(error, api) {
    if (error == 0) {
        console.log(`[DiscordMods] Cannot connect with the API (ApiResponse: ${api}) [Code: ${error}]`)
    } else if (error == 4000) {
        console.log(`[DiscordMods] Information is missing from your request (ApiResponse: ${api}) [Code: ${error}]`)
    } else if (error == 4001) {
        console.log(`[DiscordMods] User is not logged in (ApiResponse: ${api}) [Code: ${error}]`)
    } else if (error == 3000) {
        console.log(`[DiscordMods] The API refused your request (ApiResponse: ${api}) [Code: ${error}]`)
    } else if (error == 3002) {
        console.log(`[DiscordMods] The API to return that the query did not exist (ApiResponse: ${api}) [Code: ${error}]`)
    } else if (error == 200) {
        // ITS OK
    } else if (error == 201) {
        // ITS OK
    } else {
        console.log(`[DiscordMods] An unknown error has occurred (ApiResponse: ${api}) [Code: ${error}]`)
    }

    return;
}