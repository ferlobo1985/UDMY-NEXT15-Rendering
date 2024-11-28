export async function StreamOne(){
    await new Promise((resolve)=> setTimeout(resolve,2000))
    return(
        <div>
            Stream one
        </div>
    )
}

export async function StreamTwo(){
    await new Promise((resolve)=> setTimeout(resolve,3000))
    return(
        <div>
            Stream two
        </div>
    )
}