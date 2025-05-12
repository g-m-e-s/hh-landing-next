"use client"

export default function Frame() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-[1px] bg-black z-[9999]"></div>
      <div className="fixed bottom-0 left-0 right-0 h-[1px] bg-black z-[9999]"></div>
      <div className="fixed top-0 left-0 bottom-0 w-[1px] bg-black z-[9999]"></div>
      <div className="fixed top-0 right-0 bottom-0 w-[1px] bg-black z-[9999]"></div>
    </>
  )
}
