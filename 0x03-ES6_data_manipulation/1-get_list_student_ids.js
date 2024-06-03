/**
 * 
 * @param {Array} arrofobj 
 */
export default function getListStudentIds(arrofobj){

    if (!Array.isArray(arrofobj))
        return []

    let ans = arrofobj.map(x => x.id)
    return ans
}