export type CaseStudy = {
    title: string;
    description: string;
    imageUrl: string;
}

/**
 * Retrieves case studies data from an API endpoint.
 * 
 * @returns {Promise<CaseStudy[]>} The retrieved case studies data.
 * @throws {Error} If the API URL is not provided or if there is an error during the API request.
 * 
 * @example
 * const caseStudies = await getCaseStudies();
 * console.log(caseStudies);
 */
export const getCaseStudies = async () : Promise<CaseStudy[]> => {
    try {
        const url = process.env.API_URL;
        if(!url) throw new Error("URL Endpoint not supplied.")
        const response = await fetch(url);
        if (response.status !== 200) {
            throw new Error("Could not get case studies. Please contact the admin." + response.status);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        throw new Error("Could not get case studies. Please contact the admin." + error)
    }
}