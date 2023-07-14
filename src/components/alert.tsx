'use client'
interface AlertInt {
    show: boolean
}

export const Alert: React.FC<AlertInt> = ({show}) => {
    return (
        <div className={`flex gap-4 items-center bg-[#f87272] px-2 rounded-lg max-[425px]:text-xs max-[425px]:px-2 ${show ? 'h-[58px]' : 'h-[0px] p-0 border-0'} overflow-hidden`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Error! Input field is empty!</span>
        </div>
    )
};