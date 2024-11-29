export async function GET(request){
    // console.log(request)
    const x = request.nextUrl.searchParams.get('x');
    const y = request.nextUrl.searchParams.get('y');


    return Response.json({x,y})
}