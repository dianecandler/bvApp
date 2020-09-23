import React from 'react'

export default function Hero() {
    return (
        <div className=".carousel">
            <div className="container">
                <div className="row-mx-0">
                    <div className="col-md-6 col-lg-4 pl-0 pr-md-30px">
                        <h1>Bartlett Venue - testing</h1>
                        <br />
                    </div>
                </div>
            </div>
            
        </div>
    )
}


// 1. .carousel.pointer-event should ideally be pan-y (to allow for users to scroll vertically)
//    even when their scroll action started on a carousel, but for compatibility (with Firefox)
//    we're preventing all actions instead
// 2. The .carousel-item-left and .carousel-item-right is used to indicate where
//    the active slide is heading.
// 3. .active.carousel-item is the current slide.
// 4. .active.carousel-item-left and .active.carousel-item-right is the current
//    slide in its in-transition state. Only one of these occurs at a time.
// 5. .carousel-item-next.carousel-item-left and .carousel-item-prev.carousel-item-right
//    is the upcoming slide in transition.