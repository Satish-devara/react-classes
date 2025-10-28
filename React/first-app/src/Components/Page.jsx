

function Page({info}){

    return(
        <>
        <p className="bg-blue-500 text-yellow-400 text-left">Hi i am {info.name}</p>
        <p className="bg-amber-200 text-red-500 text-left">I am {info.age} old</p>
        <p className="bg-green-400 text-left">I am from {info.section}</p>
        </>
        
    )
}

export default Page