import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother)


export default function PropertiesList({ items = [] }) {
    const cardsData = items || []
    const containerRef = useRef(null);
    const countsRef = useRef(null);
    const headingsRef = useRef(null);
    const imagesRef = useRef(null);
    const paragraphRef = useRef(null)
    const maxTranslate = 100 / cardsData.length

    useGSAP(() => {
        const Images = gsap.utils.toArray(".sticky-image");
        const headings = gsap.utils.toArray(".h2");
        const pElements = gsap.utils.toArray(".p");
        const [f, ...other] = pElements || [];
        gsap.set(other, { opacity: 0, height: "0%" })

        const effect = { ease: "power1.in", duration: .3 }
        const tl = gsap.timeline({ paused: true })
        tl.addLabel("start")
        ScrollTrigger.create({
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            end: cardsData.length * 100 + "vh",
            animation: tl,
            snap: {
                snapTo: 1 / (cardsData.length - 1),
                ...effect
            },
            onUpdate: (self) => {
                const percentage = self.progress.toFixed(3);
                const scrollStatus = Number(percentage);

                const textTranslate = (-100 + maxTranslate) * scrollStatus
                const translate = (-101 + maxTranslate) * scrollStatus

                const activeItemIndex = Math.floor(scrollStatus * (cardsData.length - 1));
                gsap.to(countsRef.current, { yPercent: textTranslate, })
                gsap.to(headingsRef.current, { yPercent: translate, })

                headings.forEach((val, index) => {
                    if (index == activeItemIndex) {
                        gsap.to(val, { opacity: 1 })
                        gsap.to(pElements[index], { opacity: 1, duration: .3, height: "100%" })
                    } else {
                        gsap.to(val, { opacity: 0 })
                        gsap.to(pElements[index], { opacity: 0, duration: .3, height: "0%" })
                    }
                })

            }
        })

        Images.forEach((val, index) => {
            if (index == Images.length - 1) return
            tl.to(val, {
                yPercent: -100,
            })
        })

    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="h-screen relative">
            <div className="relative h-full flex gap-4 w-full justify-items-center justify-center items-center">
                <div className="min-w-sm w-full mx-4 md:w-lg p-4 py-6 md:p-12 ">
                    <div className="flex justify-center gap-1 mb-4">
                        <div className=" h-8 overflow-hidden">
                            <div ref={countsRef}>
                                {cardsData.map((_, idx) => <h3 key={idx} className="h-8 sequence font-semibold tracking-wide">{cardsData.length <= 9 && 0} {idx + 1}</h3>)}
                            </div>
                        </div>
                        <span>-</span>
                        <h3 className=" font-semibold tracking-wide">{cardsData.length <= 9 && 0}{cardsData.length}</h3>
                    </div>
                    <div className="h-[72px] overflow-hidden text-center mb-4">
                        <div ref={headingsRef} >
                            {cardsData.map((item, index) => <div className="text-3xl font-bold" key={index}>
                                <h2 className="h2">{item.title}</h2>
                            </div>)}
                        </div>
                    </div>
                    <div
                        ref={imagesRef}
                        className="h-[400px] relative overflow-hidden ">
                        {cardsData.map((item, index) => <img key={index}
                            className="h-[400px] sticky-image absolute object-cover top-0 left-0  w-full"
                            style={{ zIndex: cardsData.length - index }}
                            src={item?.image} />)}
                    </div>
                </div>
                <div ref={paragraphRef} className="w-sm relative" >
                    {cardsData.map((item, index) => <div className="absolute  left-0 top-0 text-base font-bold" key={index}>
                        <p className="p overflow-hidden">{item.description}</p>
                    </div>)}
                </div>
            </div>
        </section>
    )
}
