//ukan abrunebs stringis limitirebul asoebis raodenobas
//da tu limiti naklebia stringis sigrdzeze boloshi amatebs "..."
function solution(string,limit){
    return string.substring(0,limit)+(limit>=string.length?"":"...");
}