let numarray=[2,310,34,12,14]
function reducer(previous, current, index, array)
{
    const returns = previous +  current ;
    console.log( `previous : ${previous}, current : ${current},index : ${index},returns:${returns}` )
    return  returns;
}
console.log(numarray.reduce( reducer))