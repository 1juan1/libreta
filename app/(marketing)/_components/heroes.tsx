"use client"
import Image from "next/image";
export const Heroes = () => {
    return (
        <div className=" flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[400] h-[400] sm:w-[350px] sm:h[350px] md:h-[400px] md:w-[400px]">
                    <Image src="/documents.png" fill alt="Documents" className="object-contain" />
                </div>
                <div className=" relative h-[600px] w-[600px] hidded md:block">
                    <Image src="/reading.png" fill alt="Reading" className="object-contain" />
                </div>
            </div>
        </div>
    );
}

export default Heroes;